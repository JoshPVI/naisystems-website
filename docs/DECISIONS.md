# Decisions

## 27 October 2026 — Static Wake downloads

Prepare a dedicated Downloads page within the existing static site, with consistent links from all pages and a home-page callout. Use the existing stylesheet and approved Dawn geometry; no framework or additional runtime dependency is needed.

Keep product versions explicit. Stage the existing Windows ZIP byte-for-byte for review. Display Android's actual pending state until a completed APK is verified; build status is a secondary link, not a download substitute.

Josh's subsequent Windows handoff authorizes replacing the staged package with Agent 0.4.1, updating all release details together and removing the superseded archive. This resolves the earlier packaging discrepancies without changing Wake source or publishing the website.

Josh's Android handoff authorizes downloading the finished build 5 APK, checking its manifest identity/version and signature, and staging it as `Wake-1.5.0-android-build-5.apk`. Never overwrite that immutable filename with different bytes. Package verification permits replacing the pending-download UI; Android remains beta with physical-device testing pending.

Cloud access is separate from installer distribution and local pairing. Publish setup guidance only; all live codes and recovery material remain private. Preparation is authorized; publication remains a separate review step requested by the user.

## 27 October 2026 — publication preparation

Use the verified existing Vercel Git integration for publication after approval. Both installer files fit regular GitHub limits; the total site exceeds Hobby's CLI source-upload allowance, so direct CLI upload is not the prepared route. Package an explicit allowlist into `dist/` rather than serving the repository root. Verify installers and preserve beta/testing notices during packaging. Keep current production deployment identity as the rollback baseline. No remote settings or Git state changes are part of preparation.
