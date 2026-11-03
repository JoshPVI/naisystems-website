# Wake tester downloads — review candidate, 3 November 2026

Publication now explicitly approved by Josh's subsequent “Just publish” instruction, including scoped Git/main push. The preparation evidence and pre-approval statements below are retained as history. Production verification will be recorded in CURRENT_STATUS.md after deployment.

Prepared locally; **not published**. Preview: http://127.0.0.1:4184/downloads.html. Production remains https://www.naisystems.online/downloads.html at `9b078e5`; the new paths below are intended production destinations after approval, not verified live URLs.

## Prepared artifacts and URLs

| Selection | Filename under `/downloads/` | Bytes | SHA-256 |
| --- | --- | ---: | --- |
| Windows 0.4.5 primary | Wake-Agent-Setup-0.4.5-win-x64.exe | 64,104,668 | `1091F66FB386D939F906B82E9E1ED06CBE998E864B4F315D1CF90D23E19B94E2` |
| Windows 0.4.5 alternative | Wake-Agent-0.4.5-win-x64.zip | 58,615,898 | `873D7CAE6CF29A433A310118DFA4E1346308CEDB935A26E8D8F3A25D9280E099` |
| Android 1.5.3/code 8 local APK | Wake-1.5.3-android-8-local.apk | 96,975,989 | `1265D802543FA9BF3BA351178295B2155F521586B336D433C660F8E74FA2812D` |

Intended production URLs:

- https://www.naisystems.online/downloads/Wake-Agent-Setup-0.4.5-win-x64.exe
- https://www.naisystems.online/downloads/Wake-Agent-0.4.5-win-x64.zip
- https://www.naisystems.online/downloads/Wake-1.5.3-android-8-local.apk

Unchanged iPhone: https://expo.dev/accounts/naisystemss-team/projects/wake/builds/76335874-888b-45ac-ad0d-a5eeb5f783ab — 1.5.2/build 15; provisioned devices only. Its version, bytes, hash and destination remain in `release/wake-installers.json` and the identical existing card. No IPA copied or store link invented.

## Provenance and validation

Read the complete `C:/NAI_Systems/wake/docs/builds/NOV_BUILD_004_WEBSITE_HANDOFF.txt`, `NOV_BUILD_004.md`, Windows canonical manifest, and `ANDROID_LOCAL_VERIFICATION_2026_11_03.md`/manifest. Release manifest records the two source-manifest fingerprints. Windows artifacts came from `wake/artifacts/nov-build-004/`; selected Android came from `wake/artifacts/android-local/20261103T011154121Z/`. No rebuild/repack/cloud build. The same-code cloud APK remains untouched in Wake's artifact history; it was never a website download here and has not been newly exposed. The selected local APK retains its distinct path/hash and embedded Nov build 003 source/config identity.

All three source and copied files match canonical byte counts/SHA-256. Windows setup reports file version 0.4.5.0/product 0.4.5+nov-build-004 and NotSigned. ZIP contains exactly WakeAgent.exe, Install-WakeAgent.cmd and INSTALL.txt. SDK aapt confirms Android package au.com.naisystems.wake, 1.5.3/code 8, min SDK 24/target SDK 36, with no application-debuggable flag reported. APK signatures v2/v3 verify, one signer, certificate SHA-256 `d0d645e050728f31f5d93542a7a4056573cbbb7d53731fb4d115f72a3e860321`, matching the existing release record. Bundled JavaScript/emulator upgrade and launch acceptance is evidenced by Wake's local verification record; no native install or physical phone test was performed in this website task.

`node scripts/prepare-release.cjs` passes for 19 allowlisted files, 532,382,316 bytes. Full HTTP 200 transfers of **all 19 files** from the loopback preview match the prepared publication manifest. All seven current/archive binaries additionally pass exact attachment-filename/MIME checks. Machine evidence: ignored `.release/nov-004-preview-verification.json`. Four older hosted archives remain unchanged: Windows 0.4.1/0.4.4 and Android 1.5.0/code 5 and 1.5.2/code 7. Current versions, hashes and archive hashes are pinned in the release manifest. The public output excludes documentation, scripts, manifests, private logs and IPA bytes. These results describe the local preview; production byte/hash/header checks must follow approved deployment.

Browser verified automatic Windows setup-EXE recommendation; manual Android/iPhone/Windows choices and matching first-card promotion; optional ZIP disclosure/link; unchanged iPhone destination; mobile single-column order/no horizontal overflow at 375 px; mobile menu open/Escape close. No console errors. Desktop screenshot: `%TEMP%/wake-nov-004-preview.jpg`. Build-time local links/anchors/scripts and `git diff --check` pass.

## Restrictions and review boundary

Keep Wake + Dawn, footer attribution, unsigned internal Windows beta, Android beta and ad-hoc iPhone/provisioning restrictions. Windows interactive visual/pairing/scaling acceptance and Pixel/Android 17 re-pair/refresh acceptance (BUG-023) remain pending. Android instructions preserve app data by installing over the existing app and creating a fresh PC invitation for legacy keys. No public-release clearance or additional access is granted. Internet wake remains router/ISP-dependent; power controls stay local, with encrypted internet status/history and no internet power commands. Cloud invitation/recovery values remain private. No Command documentation added.

No commit, push, upload, deployment, promotion, remote access/configuration change or message back to another task was performed. Separate publication approval is required under the existing website review boundary. After that approval, use the existing GitHub → Vercel route and require matching READY deployment, three complete new production downloads matching this table, archive continuity and mobile/navigation/restriction/internal-exclusion checks.

## Files changed for this handoff

- `downloads.html`, `index.html`: current choices, metadata, setup/pairing/upgrade help; existing detection/order code preserved.
- `downloads/Wake-Agent-Setup-0.4.5-win-x64.exe`, `downloads/Wake-Agent-0.4.5-win-x64.zip`, `downloads/Wake-1.5.3-android-8-local.apk`: immutable byte-for-byte copies.
- `release/wake-installers.json`: current/alternative artifacts, provenance, four archives, unchanged iOS.
- `vercel.json`: exact new attachment/MIME rules; existing immutable-cache/access settings retained.
- `scripts/prepare-release.cjs`: verify per-platform details, primary selection, Android code, response-header configuration and upgrade/test notices.
- `CHANGELOG.md`, `docs/PROJECT_BRAIN.md`, `docs/CURRENT_STATUS.md`, `docs/ROADMAP.md`, `docs/DECISIONS.md`, `docs/ARCHITECTURE.md`, `docs/PUBLICATION_REVIEW.md`, this review: current evidence/boundaries.

Pre-existing local detection/CSS and Nov002 post-publication notes were retained. Ignored `dist/` and `.release/` are local build/verification output only.
