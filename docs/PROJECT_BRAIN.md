# Website project brain

## 3 November 2026 — detailed Wake guide publication approved

Josh explicitly says “Yes you can publish” in Wake thread 01a19ed5-af85-7b51-a9e2-5a499af98283 after the prepared guide preview. This authorizes this guide/CSS publication and necessary website Git commit/main push through GitHub → Vercel. Canonical Wake ADR-047 / BUG-028/029/030. Publish from production baseline baf80e1 in an isolated checkout, preserving newer unapproved installer preparation in the original checkout. Windows 0.4.5, local Android 1.5.3/code 8, iPhone build 15 and all archives remain unchanged. Current guide includes Fast Startup versus BIOS Fast Boot, Windows sign-in options and unconfirmed command outcomes. Dan’s Ethernet Sleep → Wake works; shutdown Wake remains unresolved. No native build, credential/settings change or real power action. Require matching commit/READY domains, live page/mobile guide and binary-manifest continuity after push. See WAKE_SETUP_PUBLICATION.md.

The detected/manually selected platform's complete card appears first; reorder actual nodes to keep reading and keyboard order consistent with the layout. Unknown-device automatic mode restores the default Windows/Android/iPhone order.

NAI Systems' existing website is a buildless HTML/CSS site. Preserve its shared navigation, white/blue visual style and static hosting compatibility.

Download device detection is advisory: keep manual platform choice and all current packages visible, derive suggested links from verified cards, and retain x64/provisioning/beta restrictions. No automatic downloads or detection telemetry. The locally prepared enhancement is not yet published.

Current prepared Wake handoff is Nov build 004 (3 November 2026): Windows 0.4.5 direct setup EXE plus optional ZIP, selected LOCAL Android 1.5.3/code 8 APK (Nov build 003 source; distinct from its cloud APK), and unchanged iPhone 1.5.2/build 15. Production remains Nov build 002 at `9b078e5` until new approval. Read Wake's canonical build handoff/manifest and Android local verification manifest before updating. Primary product branding is Dawn + Wake without a corporate byline; secondary/legal publisher attribution remains. iPhone uses its stable provisioned-device ad-hoc build page, never a store or expiring artifact URL. Existing hosted archives remain immutable and reachable; held 0.4.3 must not be offered as current. Website maintenance/publication does not clear native/device/security/public-release gates or authorize internet power commands.

Wake download preparation was requested on 27 October 2026. Wake product/source authority is `C:/NAI_Systems/wake`; read its current documentation before changing versions or product claims. Basic local Wake is agent/account/cloud independent. Cloud beta remains invitation-only: never put live invitation codes, pairing payloads, recovery files or credentials in this repository or its public assets.

Website edits must be prepared and previewed before publication. Do not commit, push or deploy without the user's subsequent authorization and applicable workspace instructions.

Production hosting is verified as Vercel `naisystems-website` on `josh-pascoe-s-projects`, sourced from this repository's main branch. `node scripts/prepare-release.cjs` prepares verified public-only `dist/` output without deploying. A push to main can publish automatically; Josh handles Git actions. Read PUBLICATION_REVIEW.md before any approved publication.

Wake Downloads was explicitly approved and published on 27 October 2026 at https://www.naisystems.online/downloads.html, commit `9d4a7e3`. Both public installer downloads were verified byte-for-byte against their approved size/SHA-256. This release's explicit approval covered the necessary commit/push; it does not remove the default Git/approval rules for later work. Android remains beta with physical-device validation pending.
