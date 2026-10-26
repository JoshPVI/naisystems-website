# Current status

## 27 October 2026 — publication approved

Josh explicitly approved publishing the prepared release through GitHub → Vercel, including the necessary Git publication actions. The reviewed manifest still matches `EE538A22AB1961920C135DB003E22DF6EDE4C25DFDB0FF35EBF9A7A156CF9BF3`, and local/remote main plus current Vercel production match baseline `820a5c0e31f72f1b9032f7c543491755ac536aca`. Next: commit/push the approved release, require the matching production deployment to reach READY, verify both public installer transfers against the manifest and check mobile navigation/notices. Physical-device testing remains pending.

Pre-push staged-byte verification found five HTML files with only Git newline normalization differences. Normalized those local files to their staged LF bytes (10 bytes fewer total; no content/installer changes). The Git-aligned publication manifest is now `35D289B1B8A22AA5FA117A20347788E2D511098BD5E281FF6614E5E50FE5944B`, 14 files / 157,218,377 bytes. This supersedes the earlier local manifest for byte-exact deployment comparison.

## 27 October 2026 — Wake Downloads preparation

- Added `downloads.html`, Wake home callout, navigation/footer links across all pages, shared responsive styles and the Dawn product mark derived from Wake's approved SVG.
- Replaced the staged Windows package with the exact Agent 0.4.1 ZIP from `C:/NAI_Systems/wake/artifacts/`, per Josh's handoff. SHA-256: `CF7ACFA1E5F1FAED2A4A2F2EAC73C65BFDF654E9AED36ECD1287E9583A963542`; 58,609,366 bytes. Version, link, byte size, accessible download label and checksum changed together; the superseded ZIP was removed. It remains unsigned, self-contained and x64.
- EAS `build:view` now confirms Android 1.5.0 / version code 5 build `9af7d00c-c6fd-468e-9fdf-a2a4d45b5246` is `FINISHED`, with the exact APK URL supplied by Josh. Downloaded and verified it using Android SDK tools before staging `downloads/Wake-1.5.0-android-build-5.apk`: package `au.com.naisystems.wake`, versionName `1.5.0`, versionCode `5`, application label `Wake`, min SDK 24, target SDK 36. APK Signature Scheme v2 verifies successfully. Size: 97,019,642 bytes. SHA-256: `EE7DF5551FB9B6C4688CEDB8EE010E86DD6C83E49A8B63E39B53FE17658B2C29`. The queued/pending-download UI was replaced with the verified local APK link and checksum. Android beta and physical-device testing notices remain.
- Setup help covers Windows installation, the available Android beta APK, local pairing, agent-free Wake, invitation-only cloud setup, recovery privacy and beta limitations. No live invitation/recovery data was read or copied.
- Windows packaging discrepancies are resolved by the 0.4.1 replacement. Josh's handoff confirms executable metadata and package contents were verified. The replacement's bundled INSTALL.txt was inspected and now describes Android pairing and optional cloud setup; installer source derives DisplayVersion from the assembly version. Removed the website notice about stale instructions. Wake source and original artifacts were left unchanged.
- Publication is pending user review. No commit, push, deployment, installed application changes, firewall changes or power actions.

## Required before publishing

1. Review the local preview and approve publication.
2. Windows replacement is staged and verified; preserve its version, byte size and hash together if any further artifact changes.
3. Android APK is staged and verified. Preserve its immutable filename, version, byte size and checksum together; never overwrite this filename with different bytes. Complete physical-device testing separately; signature/identity validation is not handset validation.
4. Host and Git publication route are documented in PUBLICATION_REVIEW.md. Both installers fit GitHub's 100 MiB per-file limit; use the existing Vercel Git integration. The 157,218,387-byte public site exceeds Hobby's CLI source-upload allowance, so direct CLI upload is not the prepared path. New deployment/live-download validation remains pending approval.
5. Preserve remaining physical-device/security/operations release gates documented by Wake. Adding download UI does not clear those gates.

## Verification

- All six HTML pages passed local link/asset and fragment validation (83 references); inline scripts parsed successfully and `git diff --check` passed.
- Original preview HTTP responses passed for the page, stylesheet and Dawn asset. The original Windows package was verified through HTTP; replacement verification is recorded below.
- Browser checks passed for desktop layout, mobile single-column cards without horizontal overflow, mobile menu open/Escape close, checksum disclosure, installation anchors, cloud help disclosure, and Home → Wake downloads navigation. No browser console errors were reported.
- Review preview: `http://127.0.0.1:4173/downloads.html`, loopback-only. The server excludes Git metadata, documentation and other non-public files. Full-page screenshot saved outside the website at `%TEMP%/nai-wake-downloads-preview.png`.
- Windows installation and Android handset behaviour were not exercised. Production hosting/download delivery remains unverified because nothing was published.

## 27 October 2026 — 0.4.1 handoff verification

- Source and staged ZIP both match Josh's exact size/hash. Full HTTP download from the local preview returned 200, 58,609,366 bytes and SHA-256 `CF7ACFA1E5F1FAED2A4A2F2EAC73C65BFDF654E9AED36ECD1287E9583A963542`. The superseded download URL returns 404.
- Rechecked EAS build `9af7d00c-c6fd-468e-9fdf-a2a4d45b5246`: `IN_QUEUE`, app 1.5.0/build 5, empty artifacts. Android's queued/pending notices are unchanged.
- Browser confirmed version 0.4.1, the versioned link, exact size and checksum. Mobile layout has no horizontal overflow with the longer byte-size text. All 83 local references/anchors and inline script syntax checks passed; `git diff --check` passed.
- Updated screenshot: `%TEMP%/nai-wake-downloads-0.4.1-preview.png`. Preview remains `http://127.0.0.1:4173/downloads.html`.
- No publish, commit, push, installer execution or changes to Wake source/original artifacts.

## 27 October 2026 — Android build 5 handoff verification

- EAS build is FINISHED and its application artifact URL matches Josh's supplied APK: `https://expo.dev/artifacts/eas/YV6mE6hMbUJlVmZHzD3ewFy0bw-mHvel8hbosv536Tc.apk`.
- Android SDK 36 `aapt dump badging` confirmed `au.com.naisystems.wake`, versionName `1.5.0`, versionCode `5`, label `Wake`, min SDK 24 / target SDK 36. `apksigner verify --verbose --print-certs` passed with APK Signature Scheme v2, one RSA-2048 signer. Signing certificate SHA-256: `d0d645e050728f31f5d93542a7a4056573cbbb7d53731fb4d115f72a3e860321`.
- Downloaded file, staged immutable APK and full HTTP download all match 97,019,642 bytes and SHA-256 `EE7DF5551FB9B6C4688CEDB8EE010E86DD6C83E49A8B63E39B53FE17658B2C29`. Preview returns HTTP 200, Android APK MIME type and an attachment filename matching the immutable artifact.
- All 84 local references/anchors, inline JavaScript syntax and `git diff --check` passed. Browser confirmed Android beta, version/code, exact size, checksum disclosure and versioned download link. Mobile layout has no horizontal overflow; no browser console errors were reported.
- Screenshot: `%TEMP%/nai-wake-downloads-android-build-5-preview.png`. Local preview: `http://127.0.0.1:4173/downloads.html`.
- Physical-device testing remains pending. No installation, publish, commit, push, cloud invitation access or Wake source changes were performed.

## 27 October 2026 — publication prepared for review

- Verified production Vercel team/project/domains and current Git-backed `main` deployment using connected read-only tools; no remote settings changed. Exact identifiers, source links, file-size findings, release trigger and rollback baseline are in PUBLICATION_REVIEW.md.
- Added a local-only release builder, installer manifest and Vercel build/output/download-header configuration. Generated `dist/` contains only 14 public files, 157,218,387 bytes. Installer hashes and page notices passed validation; docs/Git/build scripts are absent from output. `dist/`, `.release/` and `.vercel/` are ignored.
- Reviewed manifest hash: `EE538A22AB1961920C135DB003E22DF6EDE4C25DFDB0FF35EBF9A7A156CF9BF3` (public files plus build inputs). `git diff --check` passes. Beta/physical-testing notices remain intact.
- No commit, Git staging, push, hosted preview, deployment, promotion, rollback, plan change or production mutation. Await explicit publication approval; Josh retains Git actions under workspace AGENTS.md.
