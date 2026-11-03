# Roadmap

- Josh approved publishing the current combined update. Deploy the verified candidate via GitHub → Vercel, then check public installer/archives, mobile detection/order/navigation and restrictions. Earlier pending-approval bullets below are historical preparation status.

- Current review candidate: Windows 0.4.5 EXE/alternative ZIP plus selected local Android 1.5.3/code 8 APK, unchanged iPhone build 15, and device recommendation/card ordering. Preview http://127.0.0.1:4184/downloads.html; see NOV_BUILD_004_REVIEW.md. Local full-body download checks pass; publication and subsequent production transfer verification await explicit approval.

- Device recommendation/card ordering is included in the current review candidate. Deployment awaits separate publication approval; current production remains `9b078e5`.

1. Nov build 002 is published at https://www.naisystems.online/downloads.html (`9b078e5`); production mobile navigation, both current installer transfers and both preserved archive transfers passed verification. iPhone build 15 uses its successful internal ad-hoc install page.
2. Current handoff is Nov build 002: Windows Agent 0.4.4, Android 1.5.2/code 7 and provisioned iPhone 1.5.2/build 15. Mobile/device/security/public-release acceptance remains separate and pending in Wake.
3. Preserve immutable download filenames and validate changed packages through the same manifest/build process.
4. Retain beta labels and known limits until Wake's separate physical-device/security/operations release gates are cleared. Future publications require their own authorized scope.
