// Local/static-build preparation only. This script never uploads or deploys.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
const installers = JSON.parse(fs.readFileSync(path.join(root, 'release/wake-installers.json'), 'utf8')).installers;
const publicFiles = [
  'index.html', 'services.html', 'projects.html', 'downloads.html', 'about.html', 'contact.html',
  'css/styles.css', 'assets/apple-touch-icon.png', 'assets/favicon.ico',
  'assets/nai-logo-transparent.png', 'assets/nai-social-preview-1200x630.png', 'assets/wake-dawn.svg',
  ...installers.map(item => item.file),
].sort();
const hash = data => crypto.createHash('sha256').update(data).digest('hex');

function checkRegularFile(filename) {
  const absolute = path.resolve(root, filename);
  if (!absolute.startsWith(root + path.sep) || !fs.lstatSync(absolute).isFile() || fs.realpathSync(absolute) !== absolute) {
    throw new Error(`Unexpected release file: ${filename}`);
  }
  return absolute;
}

const manifest = publicFiles.map(file => {
  const data = fs.readFileSync(checkRegularFile(file));
  return { file, bytes: data.length, sha256: hash(data) };
});
for (const installer of installers) {
  const actual = manifest.find(item => item.file === installer.file);
  if (!actual || actual.bytes !== installer.bytes || actual.sha256 !== installer.sha256 || actual.bytes >= 104857600) {
    throw new Error(`Installer does not match its approved manifest or GitHub file limit: ${installer.file}`);
  }
}
const downloads = fs.readFileSync(path.join(root, 'downloads.html'), 'utf8');
for (const installer of installers) {
  for (const value of [installer.file, installer.version, installer.bytes.toLocaleString('en-US'), installer.sha256]) {
    if (!downloads.includes(value)) throw new Error(`Downloads page missing approved installer detail: ${value}`);
  }
}
for (const notice of ['Unsigned beta', 'Android beta', 'Android handset validation is pending', 'Physical Android pairing, controls and Wake testing are still pending.']) {
  if (!downloads.includes(notice)) throw new Error(`Required beta notice missing: ${notice}`);
}
if (/Build queued|Download pending/.test(downloads)) throw new Error('Outdated download-availability notice.');
for (const file of publicFiles.filter(file => file.endsWith('.html'))) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  for (const [, url] of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|data:)/.test(url)) continue;
    const [name, fragment] = url.split('#');
    const destination = name || file;
    if (!publicFiles.includes(destination)) throw new Error(`Link outside release: ${file} → ${url}`);
    if (fragment && !fs.readFileSync(path.join(root, destination), 'utf8').includes(`id="${fragment}"`)) {
      throw new Error(`Missing link destination: ${file} → ${url}`);
    }
  }
  for (const [, script] of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) new vm.Script(script, { filename: file });
}

// Refuse unexpected output files rather than recursively deleting an existing folder.
function existingFiles(directory, prefix = '') {
  if (!fs.existsSync(directory)) return [];
  if (fs.lstatSync(directory).isSymbolicLink()) throw new Error(`Symbolic link in output: ${directory}`);
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const relative = prefix + entry.name;
    if (entry.isSymbolicLink()) throw new Error(`Symbolic link in output: ${relative}`);
    return entry.isDirectory() ? existingFiles(path.join(directory, entry.name), relative + '/') : [relative];
  });
}
for (const file of existingFiles(output)) {
  if (!publicFiles.includes(file)) throw new Error(`Unexpected file in dist; review it before rebuilding: ${file}`);
}
for (const item of manifest) {
  const destination = path.join(output, item.file);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(path.join(root, item.file), destination);
  if (hash(fs.readFileSync(destination)) !== item.sha256) throw new Error(`Output verification failed: ${item.file}`);
}
fs.mkdirSync(path.join(root, '.release'), { recursive: true });
const buildInputs = ['vercel.json', 'release/wake-installers.json', 'scripts/prepare-release.cjs'].map(file => ({ file, sha256: hash(fs.readFileSync(checkRegularFile(file))) }));
const record = { files: manifest, buildInputs, fileCount: manifest.length, totalBytes: manifest.reduce((sum, item) => sum + item.bytes, 0) };
fs.writeFileSync(path.join(root, '.release/publication-manifest.json'), JSON.stringify(record, null, 2) + '\n');
console.log(JSON.stringify({ status: 'prepared locally; not published', fileCount: record.fileCount, totalBytes: record.totalBytes, installers: installers.map(item => ({ file: item.file, bytes: item.bytes, sha256: item.sha256 })) }, null, 2));
