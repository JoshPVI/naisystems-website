# Website architecture

Static HTML pages share `css/styles.css` and `assets/`. Each page contains its own navigation and footer; keep links consistent across all six pages. `downloads.html` uses native details/summary for installation help and checksums, and a small inline navigation handler. No framework or runtime dependencies are required.

Versioned installer packages belong under `downloads/` or a verified external release-asset host. The page's version, size, hash and link must describe the exact same immutable artifact. Never place secrets or operational runtime directories under the public site root.

`release/wake-installers.json` separates current `installers`, immutable previously hosted `archives`, and `ios` metadata pointing to a stable internal ad-hoc installation page. The builder verifies and copies current plus archived hosted files, but checks current page metadata only against current choices. IPA bytes are not part of website output. Each immutable hosted file retains attachment/MIME headers and long-lived caching; changing releases means adding new filenames, never overwriting prior bytes.

Production is Vercel project `naisystems-website` on team `josh-pascoe-s-projects`, imported from `JoshPVI/naisystems-website` main. `vercel.json` runs `node scripts/prepare-release.cjs` and serves only `dist/`. This packaging step verifies approved binaries from `release/wake-installers.json`, checks links/notices, and emits a public-file/build-input hash manifest under ignored `.release/`. It never uploads or deploys. Internal docs, build scripts and Git metadata are excluded from public output.

For local review, serve only approved public output over loopback. Dependency installation is unnecessary. Git publication must wait for explicit approval; see PUBLICATION_REVIEW.md for the production trigger, limits assessment and rollback baseline.
