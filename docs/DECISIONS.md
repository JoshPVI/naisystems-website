# Decisions

## 3 November 2026 — Nov build 002 handoff and archive retention

Josh requests the Nov build 002 update and reaffirms existing website publication authority without widening access. Source current versions, byte sizes and hashes from the canonical build manifest. Keep old hosted binaries in an explicit archive list so a new deployment preserves their URLs, while current page choices use only the corrected 0.4.4/1.5.2 batch. Do not expose the held 0.4.3 artifact or self-host the ad-hoc IPA; use the verified stable iPhone build page. Use Dawn + Wake in primary branding and retain secondary/legal attribution. Maintain explicit local-only beta power controls, encrypted internet status/history and router/ISP-dependent wake wording. No new Command documentation or public-release clearance.

## 27 October 2026 — Static Wake downloads

Prepare a dedicated Downloads page within the existing static site, with consistent links from all pages and a home-page callout. Use the existing stylesheet and approved Dawn geometry; no framework or additional runtime dependency is needed.

Keep product versions explicit. Stage the existing Windows ZIP byte-for-byte for review. Display Android's actual pending state until a completed APK is verified; build status is a secondary link, not a download substitute.

Josh's subsequent Windows handoff authorizes replacing the staged package with Agent 0.4.1, updating all release details together and removing the superseded archive. This resolves the earlier packaging discrepancies without changing Wake source or publishing the website.

Josh's Android handoff authorizes downloading the finished build 5 APK, checking its manifest identity/version and signature, and staging it as `Wake-1.5.0-android-build-5.apk`. Never overwrite that immutable filename with different bytes. Package verification permits replacing the pending-download UI; Android remains beta with physical-device testing pending.

Cloud access is separate from installer distribution and local pairing. Publish setup guidance only; all live codes and recovery material remain private. Preparation is authorized; publication remains a separate review step requested by the user.

## 27 October 2026 — publication preparation

Use the verified existing Vercel Git integration for publication after approval. Both installer files fit regular GitHub limits; the total site exceeds Hobby's CLI source-upload allowance, so direct CLI upload is not the prepared route. Package an explicit allowlist into `dist/` rather than serving the repository root. Verify installers and preserve beta/testing notices during packaging. Keep current production deployment identity as the rollback baseline. No remote settings or Git state changes are part of preparation.
