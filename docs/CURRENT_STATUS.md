# Current status

## 3 November 2026 — combined tester update publication approved

Josh explicitly instructed “Just publish” after reviewing the prepared Windows 0.4.5/local Android 1.5.3 update and device detection/card ordering. This authorizes the necessary scoped Git commit/main push through the existing GitHub → Vercel route. Local/remote main and current production match baseline `9b078e5` / `dpl_DuvyeLmHo7vaQK5ENW3z2mLwShj9`. Release preparation still passes: 19 public files, 532,382,316 bytes, exact current/archive hashes. Keep beta/physical-testing notices and existing access settings. Publication and live transfer/mobile verification follow; previous preparation records below are historical.

## 3 November 2026 — Windows 0.4.5 and selected local Android APK (prepared only)

Received Josh's authorized combined handoff from the Wake development thread and read the complete NOV_BUILD_004_WEBSITE_HANDOFF.txt, Windows build record/manifest and local Android verification record/manifest. Staged immutable Windows 0.4.5 setup EXE (primary), 0.4.5 ZIP (alternative), and Wake 1.5.3/code 8 local APK, with matching links/versions/bytes/hashes. No rebuild, repack or cloud build. Android is the final existing-release-key-signed local artifact, not the debug intermediate or same-code cloud artifact. iPhone 1.5.2/build 15 card and metadata are unchanged. Existing October/Nov002 hosted files are archived without modifying their bytes; source cloud artifact remains untouched.

Source/staged and all 19 complete loopback HTTP responses match the prepared manifest, including all seven hosted binaries, their exact attachment filenames and MIME types. Output: 532,382,316 bytes. Windows EXE metadata is 0.4.5.0 and unsigned; ZIP has the expected three entries. Android SDK confirms package au.com.naisystems.wake, version 1.5.3/code 8, min SDK 24/target 36; v2/v3 signatures verify with existing certificate d0d645e050728f31f5d93542a7a4056573cbbb7d53731fb4d115f72a3e860321. Release preparation, local links/scripts and whitespace checks pass. Browser verifies automatic EXE selection, manual platform selection/card promotion, optional ZIP disclosure, unchanged iPhone destination, mobile menu/Escape and no mobile horizontal overflow (375 px); no console errors. Screenshot: `%TEMP%/wake-nov-004-preview.jpg`.

Preview: http://127.0.0.1:4184/downloads.html. Full URLs/checksums/files and review boundary: [NOV_BUILD_004_REVIEW.md](NOV_BUILD_004_REVIEW.md). Internal/unsigned/ad-hoc restrictions, pending Windows interactive acceptance, Pixel/Android 17 re-pair/refresh acceptance (BUG-023), capability limits and private cloud-code guidance remain. **Not published: no commit, push, upload or deployment.** Existing production stays at `9b078e5`; production downloads of these new filenames must be verified after separate publication approval.

## 3 November 2026 — device-aware download recommendation (local preview)

Follow-up: the detected or manually selected platform's complete card now moves first in the grid. Other cards retain their default relative order; unknown-device automatic mode restores Windows → Android → iPhone. Actual DOM nodes move so keyboard and screen-reader order match the visible desktop/mobile order; existing checksum disclosure state is retained. This remains local and unpublished.

Follow-up verification passed in the browser: Android → Windows → iPhone, iPhone → Windows → Android, and Windows/automatic → Windows → Android → iPhone. Android appears above the other cards on mobile without overflow (375 px), and Tab from the recommendation reaches the first card's download link. An expanded Android checksum stayed open when moved behind iPhone. No browser console errors; release preparation reverified immutable artifacts and `git diff --check` passed. Screenshot: `%TEMP%/wake-recommended-card-first.jpg` (manual iPhone selection demonstrates promotion).

Josh requested system detection following Dan's suggestion. Added an optional recommendation above the existing three download cards, with a labelled manual platform selector. Windows, Android and iPhone are detected from browser platform hints/user-agent fallback; unsupported/unknown devices (including iPads) get manual choice. Windows retains its x64 requirement. iPhone retains provisioned-device/ad-hoc restrictions. The recommendation copies the current verified card link, accessible version label and download/referrer attributes. All cards, metadata and beta/physical-testing notices remain available; no automatic download, analytics, storage or detection network request.

Validation passed: 13 device/browser cases, 52 manual/automatic transitions, restricted-navigator fallback, exact current-link attributes, static no-JavaScript fallback, release preparation (all four hosted artifacts still match their recorded hashes), and `git diff --check`. Local browser confirms automatic Windows recommendation, Android/iPhone manual changes, keyboard access, no console errors and no desktop/mobile horizontal overflow (1265/375 px). Screenshots saved outside the public output at `%TEMP%/wake-device-detection-desktop.jpg` and `%TEMP%/wake-device-detection-mobile.jpg`. Preview: http://127.0.0.1:4173/downloads.html. No native-device compatibility claim; browser identities can be masked. No commit, push or deployment for this change; production remains Nov build 002 at `9b078e5`.

## 3 November 2026 — Nov build 002 website update

**Published and verified:** https://www.naisystems.online/downloads.html — commit `9b078e53b9489caad4d3f3e9b48c0b8113efda5a`, production deployment `dpl_DuvyeLmHo7vaQK5ENW3z2mLwShj9` (READY). Full public transfers of both current installers and both preserved October archives match their recorded bytes/SHA-256 values. The iPhone stable page opens the successful internal build; its actual EAS IPA transfer also matches the canonical manifest. Live mobile navigation/layout, restrictions and internal-file exclusions pass. Exact URLs, all hashes, changed files and the screenshot-service limitation are in [NOV_BUILD_002_PUBLICATION.md](NOV_BUILD_002_PUBLICATION.md). Post-deployment notes remain local to avoid another deployment.

Updated current choices from the canonical `C:/NAI_Systems/wake/docs/builds/NOV_BUILD_002_MANIFEST.json` after reading the complete website handoff and batch/current-status records. Windows is 0.4.4 (58,612,934 bytes; SHA-256 `0E2E7DE649AA3A0BC2E8783C5E3C0650C802FE42E29C022DA38C530F87D3ED17`). Android is 1.5.2/code 7 (96,845,542 bytes; SHA-256 `E816C19D4BD9AD575A980E50CB1FF418BB9300AFAC58918A9DE6C4DA56C8C422`). Binaries were copied byte-for-byte, never rebuilt or repacked.

iPhone 1.5.2/build 15 uses only the stable Expo installation page `https://expo.dev/accounts/naisystemss-team/projects/wake/builds/76335874-888b-45ac-ad0d-a5eeb5f783ab`. Ad-hoc provisioned devices only; no IPA is added to website output. IPA: 9,041,787 bytes; SHA-256 `D416506E98E114378C0C8B1CE1043DCE0CE938A6974B580CA7648A638BCC0400`. Both mobile jobs were independently read through EAS as FINISHED/INTERNAL with matching package/version/build; their actual downloaded artifacts matched canonical sizes/hashes. Android manifest/signature verified with SDK tools; certificate matches the recorded signer. No iOS binary-signature/physical-install acceptance is claimed.

The checkout, GitHub main and production still point to the October release `9d4a7e3`, not Nov build 001. Neither Nov build 001 nor held Windows 0.4.3 is a current choice here. Existing October installer archives remain in both the repository and release output, with immutable paths/bytes. Source-repository Nov build 001/held 0.4.3 artifacts are untouched and are not newly exposed.

Wake + Dawn is the main branding; the home/downloads corporate byline is removed and footer/publisher attribution remains. Copy explicitly limits current power commands to the local network, describes encrypted internet status/history and router/ISP-dependent internet wake, and retains internal/beta/device/release gates. No Command documentation, private profile/recovery material or installed-PC screenshots were added. Hosting/access settings are unchanged.

Local release preparation, page/asset HTTP hashes, checksum disclosure and mobile menu/layout checks pass. Browser screenshot capture timed out; DOM/accessibility checks remained available. Publication will use the established GitHub main → Vercel authority reaffirmed by Josh's Nov build 002 request; live verification is recorded after deployment. Prior production deployment `dpl_B9aE7moogAnCc7VuPg6nnCKEa4tW` is the rollback baseline.

## 27 October 2026 — published and verified

Live: **https://www.naisystems.online/downloads.html**. Published through the approved GitHub main → Vercel route, commit `9d4a7e3b15c794f94a6a8a3a677e40443d47765d`, production deployment `dpl_B9aE7moogAnCc7VuPg6nnCKEa4tW` (READY). Vercel built the expected 14 files / 157,218,377 bytes and assigned the verified production domains.

- Downloaded both complete installers from the public domain. Windows: 58,609,366 bytes, SHA-256 `CF7ACFA1E5F1FAED2A4A2F2EAC73C65BFDF654E9AED36ECD1287E9583A963542`. Android: 97,019,642 bytes, SHA-256 `EE7DF5551FB9B6C4688CEDB8EE010E86DD6C83E49A8B63E39B53FE17658B2C29`. Both returned HTTP 200, correct MIME types, attachment filenames and immutable caching.
- Public downloads page hash matches the released manifest. Windows unsigned-beta, Android beta, pending physical-device testing and known-limit notices remain. Internal documentation, build script and release manifest URLs return 404.
- Mobile browser checks passed: menu opens, Home → Downloads navigation, menu closes after navigation, Escape closes it, installation anchor works, and no horizontal overflow. No browser console errors reported. No physical handset/installer execution was performed; Android hardware testing remains pending.
- Evidence: ignored `.release/production-verification.json`; screenshot `%TEMP%/nai-wake-downloads-live.png`. The live browser tab is retained for review.
- Post-deployment documentation is updated locally without another push to avoid triggering an unnecessary production rebuild. The published commit remains `9d4a7e3`.

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
