# Website project brain

NAI Systems' existing website is a buildless HTML/CSS site. Preserve its shared navigation, white/blue visual style and static hosting compatibility.

Current Wake handoff is Nov build 002 (3 November 2026): Windows 0.4.4, Android 1.5.2/code 7 and iPhone 1.5.2/build 15. Read Wake's canonical build handoff/manifest before updating. Primary product branding is Dawn + Wake without a corporate byline; secondary/legal publisher attribution remains. iPhone uses its stable provisioned-device ad-hoc build page, never a store or expiring artifact URL. Existing hosted archives remain immutable and reachable; held 0.4.3 must not be offered as current. Website maintenance/publication does not clear native/device/security/public-release gates or authorize internet power commands.

Wake download preparation was requested on 27 October 2026. Wake product/source authority is `C:/NAI_Systems/wake`; read its current documentation before changing versions or product claims. Basic local Wake is agent/account/cloud independent. Cloud beta remains invitation-only: never put live invitation codes, pairing payloads, recovery files or credentials in this repository or its public assets.

Website edits must be prepared and previewed before publication. Do not commit, push or deploy without the user's subsequent authorization and applicable workspace instructions.

Production hosting is verified as Vercel `naisystems-website` on `josh-pascoe-s-projects`, sourced from this repository's main branch. `node scripts/prepare-release.cjs` prepares verified public-only `dist/` output without deploying. A push to main can publish automatically; Josh handles Git actions. Read PUBLICATION_REVIEW.md before any approved publication.

Wake Downloads was explicitly approved and published on 27 October 2026 at https://www.naisystems.online/downloads.html, commit `9d4a7e3`. Both public installer downloads were verified byte-for-byte against their approved size/SHA-256. This release's explicit approval covered the necessary commit/push; it does not remove the default Git/approval rules for later work. Android remains beta with physical-device validation pending.
