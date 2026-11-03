# Nov build 002 — website publication results

Published 3 November 2026 through the existing approved GitHub → Vercel route.

- Page: https://www.naisystems.online/downloads.html
- Commit: `9b078e53b9489caad4d3f3e9b48c0b8113efda5a`
- Production deployment: `dpl_DuvyeLmHo7vaQK5ENW3z2mLwShj9` (READY)
- Vercel built 16 public files / 312,679,594 bytes. Team, project, domain and access settings are unchanged. No binaries were rebuilt or repacked.

## Final URLs and full-transfer checks

### Windows Agent 0.4.4

- URL: https://www.naisystems.online/downloads/Wake-Agent-0.4.4-win-x64.zip
- Downloaded size: **58,612,934 bytes**
- SHA-256: `0E2E7DE649AA3A0BC2E8783C5E3C0650C802FE42E29C022DA38C530F87D3ED17`
- Complete public HTTP 200 response matches the canonical manifest. Correct ZIP MIME type and attachment filename.

### Android Wake 1.5.2 / code 7

- URL: https://www.naisystems.online/downloads/Wake-1.5.2-android-7-Nov-build-002.apk
- Downloaded size: **96,845,542 bytes**
- SHA-256: `E816C19D4BD9AD575A980E50CB1FF418BB9300AFAC58918A9DE6C4DA56C8C422`
- Complete public HTTP 200 response matches the canonical manifest. Correct APK MIME type and attachment filename. Package/version/signature verified with Android SDK tools; signer matches the recorded certificate.
- Source job `329fa8fd-d947-452a-9acf-6c406e964bd7` is FINISHED/INTERNAL; its actual EAS APK transfer also matched the manifest.

### iPhone Wake 1.5.2 / build 15

- Stable installation page: https://expo.dev/accounts/naisystemss-team/projects/wake/builds/76335874-888b-45ac-ad0d-a5eeb5f783ab
- EAS job is FINISHED/INTERNAL; following the website link in the browser shows Succeeded and IPA iOS internal distribution.
- Actual IPA downloaded from that completed job: **9,041,787 bytes**.
- SHA-256: `D416506E98E114378C0C8B1CE1043DCE0CE938A6974B580CA7648A638BCC0400` — matches canonical local artifact and manifest.
- Internal ad-hoc, provisioned devices only. No store link, expiring artifact link or direct website IPA was published. Binary signature was not independently verified on this Windows host.

## Preserved archives and hosting behavior

Both prior URLs returned full HTTP 200 bodies with their original bytes/hashes:

- https://www.naisystems.online/downloads/Wake-Agent-0.4.1-win-x64.zip — 58,609,366 bytes; SHA-256 `CF7ACFA1E5F1FAED2A4A2F2EAC73C65BFDF654E9AED36ECD1287E9583A963542`.
- https://www.naisystems.online/downloads/Wake-1.5.0-android-build-5.apk — 97,019,642 bytes; SHA-256 `EE7DF5551FB9B6C4688CEDB8EE010E86DD6C83E49A8B63E39B53FE17658B2C29`.

All four hosted files retain correct MIME types/attachment filenames and `Cache-Control: public, max-age=31536000, immutable`. Initial edge-cache observation was MISS; no unobserved cache-hit guarantee is claimed. Existing Git-based hosting avoids the Hobby CLI source-upload limit. No plan or access changes were made.

## Page, navigation and restrictions

- Deployed page hash matches the prepared release. Current choices show only Nov build 002. Neither Nov build 001 nor held 0.4.3 is offered.
- The checkout/production still had the October release at task start. No Nov build 001 or held 0.4.3 source artifact was changed or newly exposed.
- Main product lockup is Wake + Dawn. Corporate byline removed from primary branding; footer/secondary attribution retained.
- Desktop three-column and mobile single-column layouts pass DOM measurements without horizontal overflow. Live mobile Home → Downloads menu navigation, Escape closing and iPhone help link pass. Browser console reports no errors.
- Screenshot capture timed out twice; screenshot-based visual QA was unavailable. No old, rejected or private installed-PC screenshot was substituted.
- Copy explicitly limits beta power controls to the local network, describes encrypted internet status/history and router/ISP-dependent internet wake, and states internet power commands are not implemented.
- Internal/beta/ad-hoc/device/security/public-release gates remain. No registration, beta eligibility, hosting access or cloud invitation permissions were expanded. No new Command documentation was added.
- Internal docs, build metadata, held Windows 0.4.3 and direct IPA website URLs return 404. No credentials, recovery material, private logs, protected profiles or local settings were uploaded.

## Changed files in the published commit

- `downloads.html`
- `index.html`
- `css/styles.css`
- `release/wake-installers.json`
- `scripts/prepare-release.cjs`
- `vercel.json`
- `downloads/Wake-Agent-0.4.4-win-x64.zip`
- `downloads/Wake-1.5.2-android-7-Nov-build-002.apk`
- `CHANGELOG.md`
- `docs/ARCHITECTURE.md`
- `docs/CURRENT_STATUS.md`
- `docs/DECISIONS.md`
- `docs/PROJECT_BRAIN.md`
- `docs/PUBLICATION_REVIEW.md`
- `docs/ROADMAP.md`

This post-deployment report and updated status notes are retained locally without an extra deployment. Machine-readable transfer evidence is in ignored `.release/nov-002-production-verification.json`.
