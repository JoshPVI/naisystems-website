# Wake Downloads — publication review

## 3 November 2026 — detailed Wake guide publication approved

Josh explicitly says “Yes you can publish” in Wake thread 01a19ed5-af85-7b51-a9e2-5a499af98283 after the prepared guide preview. This authorizes this guide/CSS publication and necessary website Git commit/main push through GitHub → Vercel. Canonical Wake ADR-047 / BUG-028/029/030. Publish from production baseline baf80e1 in an isolated checkout, preserving newer unapproved installer preparation in the original checkout. Windows 0.4.5, local Android 1.5.3/code 8, iPhone build 15 and all archives remain unchanged. Current guide includes Fast Startup versus BIOS Fast Boot, Windows sign-in options and unconfirmed command outcomes. Dan’s Ethernet Sleep → Wake works; shutdown Wake remains unresolved. No native build, credential/settings change or real power action. Require matching commit/READY domains, live page/mobile guide and binary-manifest continuity after push. See WAKE_SETUP_PUBLICATION.md.

## 3 November 2026 — combined update approved for publication

Josh explicitly approved “Just publish” for the prepared candidate described in NOV_BUILD_004_REVIEW.md, including detection/card ordering and necessary Git publication actions. Baseline is `9b078e5` / `dpl_DuvyeLmHo7vaQK5ENW3z2mLwShj9`. Use the existing GitHub → Vercel production route and complete the recorded live checks; preserve current access and all beta/device notices. Earlier preparation-only statements below describe the state before this approval.

## Windows Nov build 004 + local Android — prepared, not approved for publication

Read [NOV_BUILD_004_REVIEW.md](NOV_BUILD_004_REVIEW.md) for the current review candidate, exact URLs, hashes and validation. Primary Windows is the unsigned 0.4.5 setup EXE, with an optional ZIP; Android is the selected existing-release-key-signed local 1.5.3/code 8 APK. iPhone stays 1.5.2/build 15. The site includes detection/card ordering, four immutable archive files, three current binaries and current beta restrictions. Local complete HTTP transfers pass; public transfer checks remain pending publication. Current production baseline: `9b078e5` / `dpl_DuvyeLmHo7vaQK5ENW3z2mLwShj9`.

The handoff authorizes preparing these artifacts, not another commit/push/deployment or wider access. Use the existing GitHub main → Vercel route only after separate explicit approval, then verify all three new public responses (filenames, full byte counts, SHA-256), archive continuity, iPhone destination, mobile navigation and protected internal-file exclusions. No direct CLI upload, environment/domain/access change or public-release clearance. The seven binaries individually remain below 100 MiB; total static output is 532,382,316 bytes. Existing earlier approvals below are historical and apply to their reviewed batches.

## Nov build 002 — 3 November 2026

Published commit `9b078e5`, READY deployment `dpl_DuvyeLmHo7vaQK5ENW3z2mLwShj9`. Actual current/archive downloads and the completed-job IPA matched recorded sizes/hashes. Final verification and changed-file report: [NOV_BUILD_002_PUBLICATION.md](NOV_BUILD_002_PUBLICATION.md).

Josh's current request reaffirms the existing GitHub → Vercel publication authority for this exact update. Keep current team/project/domain/access settings. The rollback baseline is production deployment `dpl_B9aE7moogAnCc7VuPg6nnCKEa4tW`, commit `9d4a7e3`.

Current artifacts: Windows 0.4.4 ZIP, Android 1.5.2/code 7 APK, and iPhone 1.5.2/build 15 through the stable Expo ad-hoc installation page. Exact identities/sizes/SHA-256 values are in `release/wake-installers.json`, derived from the canonical Nov build 002 manifest. Both mobile jobs are FINISHED/INTERNAL and actual EAS downloads matched. The IPA is not self-hosted or linked through an expiring artifact URL. Only provisioned devices can install it.

Current hosted artifacts are 58,612,934 and 96,845,542 bytes, each below GitHub's 100 MiB per-file limit. Existing October archive files stay at their original URLs with recorded hashes. The full output includes current and archive files; use the existing Git-based hosting route, not a Hobby CLI source upload. Immutable caching and the same access model are preserved. No held 0.4.3 or additional private files are introduced. The checkout/production had not published Nov build 001, so there is no Nov build 001 current choice to remove here; source archives remain untouched.

Before pushing: run the release preparation, verify staged bytes against its generated manifest, check the local page/mobile layout and confirm all beta/ad-hoc/capability notices. After READY: download both new files completely from the production domain and compare byte sizes/SHA-256; check archive URLs, page hashes, mobile links/menu and internal-file exclusions. The iPhone link must remain the finished provisioned-device install page. No device installation/power testing or public-release clearance is part of this publication.

The October review and verification history below are retained as historical evidence; their old current-version labels and byte totals are not the Nov build 002 release.

Prepared 27 October 2026. **Josh explicitly approved publication through GitHub → Vercel on 27 October 2026. Publication and live verification are now authorized.**

Published and verified: https://www.naisystems.online/downloads.html — commit `9d4a7e3b15c794f94a6a8a3a677e40443d47765d`, production deployment `dpl_B9aE7moogAnCc7VuPg6nnCKEa4tW` (READY). Both full public installer downloads match the recorded byte sizes and SHA-256 hashes; live mobile navigation and retained beta/testing notices passed. See CURRENT_STATUS.md for results. The baseline below remains the rollback reference.

## Production destination verified

- Host: Vercel; live HTTP response identifies `Server: Vercel`.
- Team: Josh Pascoe's projects (`josh-pascoe-s-projects`, `team_6VaYnXYFKMA0j5jijx1OrHot`).
- Project: `naisystems-website` (`prj_MRw3Gf3ai4afAe6IcTzQCVWuAgyk`).
- Production domain: `https://www.naisystems.online`; `naisystems.online` redirects there. Both domains are verified on this project.
- Current production deployment: `dpl_5wr3WhuYbTniy5JDVA51skgq59MH`, READY, source `git`, branch `main`, commit `820a5c0e31f72f1b9032f7c543491755ac536aca`.
- Repository: `JoshPVI/naisystems-website`, public, default branch `main`. Its source matches this checkout's current HEAD.

## File-size findings and publication route

| Installer | Bytes | MiB | GitHub 100 MiB per-file limit |
| --- | ---: | ---: | --- |
| Windows Agent 0.4.1 | 58,609,366 | 55.89 | Within limit |
| Android beta 1.5.0 / code 5 | 97,019,642 | 92.53 | Within limit |

Both are below 100,000,000 bytes as well. Together they are 155,629,008 bytes. The prepared public site totals **157,218,377 bytes in 14 files**.

Use the existing **Git-based Vercel publication route**. [GitHub's file limits](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github) permit both files in regular Git, with warnings above 50 MiB. Browser uploads are limited to 25 MiB, so do not upload these through GitHub's web editor. No Git LFS is needed for these versions.

[Vercel's upload limits](https://vercel.com/docs/limits#static-file-uploads) explicitly apply to CLI source uploads: 100 MB on Hobby and 1 GB on Pro. The complete site exceeds the Hobby CLI limit; do not use a direct CLI upload as the approved route. The current deployment's source is Git, which uses repository import instead of that CLI upload path. No documented size blocker was found for these files on that route. This is a documented compatibility assessment, not a claim that a new Vercel deployment or live installer transfer has already passed.

The connector's team response omits the exact billing plan. Its rolling-release eligibility read says `plan_not_supported` and suggests Pro/Enterprise; this is not proof of an exact plan name. Browser account inspection requires sign-in. No plan upgrade, billing change or credentials retrieval was attempted. The chosen Git route does not rely on assuming Pro.

Sources checked: [Vercel Git deployment behavior](https://vercel.com/docs/git), [Vercel static configuration](https://vercel.com/docs/project-configuration/vercel-json).

## Prepared local publication inputs

- `vercel.json`: run `node scripts/prepare-release.cjs`, publish only `dist/`; serve the two versioned downloads with attachment filenames, appropriate MIME types, `nosniff` and immutable caching.
- `scripts/prepare-release.cjs`: verifies installer byte counts/hashes and page release details/notices, checks local links and inline script syntax, then copies only the 14 approved public files into `dist/`. No upload or deployment command exists in the script.
- `release/wake-installers.json`: exact installer identities, sizes and SHA-256 values.
- `.release/publication-manifest.json`: SHA-256 for every public file and the three build inputs. Manifest SHA-256: `35D289B1B8A22AA5FA117A20347788E2D511098BD5E281FF6614E5E50FE5944B`.
- `dist/` and `.release/` are generated/ignored. Internal docs, build scripts, Git metadata and local hosting configuration are absent from the public output.

Pre-push verification reconciled only Git newline normalization in five HTML files (10 bytes total). The manifest above records Git's exact bytes; page content and both immutable installer hashes are unchanged from the reviewed release.

The Windows unsigned-beta warning, Android beta label, pending physical-device testing, unresolved Hibernate-to-Wake notice and private cloud-invitation guidance are retained. No live codes, credentials or recovery files are part of the output.

## Exact publication step — only after explicit approval

1. Re-run `node scripts/prepare-release.cjs`. Confirm the manifest SHA-256 still matches the reviewed value; if any public/build input changed, review the new manifest before release.
2. Commit the approved site changes, both installer files, `.gitignore`, `vercel.json`, `scripts/prepare-release.cjs`, `release/wake-installers.json` and documentation. Do not commit `dist/`, `.release/` or `.vercel/`. Josh's explicit publication approval authorizes the necessary commit/push for this release; the workspace's default Git restriction still applies outside this approved release.
3. **The approved push to `main` is the production publication trigger.** Vercel's standard Git integration builds the production branch and updates its assigned domains. No separate Deploy click should be assumed to protect against publication after a push.
4. Inspect that new deployment under the verified team/project. Require READY, the exact new approved commit, successful `prepare-release.cjs` output and the expected domains. A build error must leave the prior deployment live; stop and diagnose instead of changing links or omitting the binaries to force success.
5. Verify `https://www.naisystems.online/downloads.html`, site navigation and beta/testing notices. Download both installers in full from the production domain; compare byte counts and SHA-256 against the manifest. Confirm attachment filename and MIME type. Verify internal files such as `/docs/CURRENT_STATUS.md` and `/scripts/prepare-release.cjs` are not served.
6. Record the new deployment ID, commit, verification results and date in CURRENT_STATUS.md. Production transfer/bandwidth usage should be observed during the beta; no usage-based billing or plan change is authorized here.

## Rollback

If the released page or installer delivery fails verification, restore the previously verified production deployment `dpl_5wr3WhuYbTniy5JDVA51skgq59MH` through Vercel's rollback/promotion controls after confirming it is still the intended baseline. Do not rebuild the old release or replace bytes under immutable installer filenames. Vercel rollback can disable automatic domain assignment for subsequent pushes; explicitly inspect assignment state before resuming releases. No rollback, promotion or remote configuration action has been taken.

## Verification limits

Local preparation passes with 14 files and 157,218,377 bytes, both approved installer hashes, retained notices and no internal files in the public output. The used configuration properties validate against the corresponding definitions in Vercel's official JSON schema. Earlier local HTTP and browser checks passed for the download page and both installers. Vercel's new build and production downloads remain untested until publication is explicitly approved. Android physical-device testing remains pending independently of package verification.
