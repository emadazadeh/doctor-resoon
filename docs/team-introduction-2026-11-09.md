# Team introduction — 2026-11-09

The homepage team section now presents the three doctors supplied by the owner, followed by two collective staff groups. The owner explicitly requested that the nurses and the two MSc staff members have no individual names or photographs.

The visual reference was the public team section at https://lemonclinic.org/: vertical portrait cards, a separate name/role block, and registration numbers. This implementation uses Doctor Resoon’s existing green, cream and gold glass theme and native horizontal scrolling on small screens. It adds no carousel dependency or animation loop.

## Content provenance

- Dr Emad Azadeh: existing owner-confirmed founder name and role; no registration number was supplied or inferred.
- Dr Ali Mahdi Gholian: name and registration number 240391 transcribed from the owner’s image.
- Dr Sadegh Barzegar: name and registration number 244355 transcribed from the owner’s image.
- Registration numbers are owner-supplied information; this work did not independently verify them against the medical council register.
- Supporting staff: several nurses and two MSc staff members, as stated by the owner. No city, university, individual name, licence, attendance schedule or staff portrait has been invented.
- Degree terminology: «فیزیولوژی ورزشی، گرایش فیزیولوژی و تغذیه ورزشی», as printed in the reproduced SSRC 1403–1404 MSc admission announcement below. This identifies the programme name; no separate clinical nutrition qualification is asserted.

Degree reference: https://mastertest.ir/1403/06/%d8%a7%d8%b1%d8%b4%d8%af-%d8%a8%d8%af%d9%88%d9%86-%da%a9%d9%86%da%a9%d9%88%d8%b1-%d9%be%da%98%d9%88%d9%87%d8%b4%da%af%d8%a7%d9%87-%d8%aa%d8%b1%d8%a8%db%8c%d8%aa-%d8%a8%d8%af%d9%86%db%8c-1403/

## Images and accessibility

The three supplied medical poster portraits were edited with the image-generation tool to provide consistent backgrounds and clean photographs. Names and registration numbers are live HTML text rather than image text. The page visibly discloses AI editing. The generated originals remain in `/workspace/generated_images`; only optimized image assets are tracked.

Each doctor has 320, 640 and 960 pixel AVIF and WebP variants. Images are lazy loaded and have explicit dimensions, responsive sizes and descriptive alternative text. Mobile scrolling uses native overflow with a keyboard-focusable list, focus outlines and reduced-motion/transparency fallbacks. The global menu now links directly to `/#medical-team`.

## Verification and preview

TypeScript, all 32 existing project tests, and the production build passed. A server-rendered export of the actual component confirms three doctor cards, no images in the supporting staff section, and all 18 responsive image files. Source and metadata continue to use https://doctorreson.ir.

The review artifacts are:

- `/workspace/previews/doctor-resoon-team-preview.html`: standalone responsive HTML with embedded photographs and font; the booking action opens the existing service page, while production uses the existing booking dialog.
- `/workspace/previews/doctor-resoon-team-desktop.png`: design export rendered from that component markup.
- `/workspace/previews/doctor-resoon-team-preview.pdf`: design export, not a browser screenshot.

The managed environment did not expose the required `cua_repl.js` browser control, so browser QA was not run. The preview was exported without launching a separate managed preview server. No browser accessibility score or measured mobile rendering result is claimed.

## Release

The owner requested a preview before deployment. The preview was shown in the conversation before preparing publication. Production remains the existing Cloudflare Worker `doctor-resoon1`, deployed through the existing GitHub integration. Publish the tested source there first, verify the real domain and team assets, then synchronize and publish the exact same source/build to the original managed Site without changing its identity, audience or database binding. No database migration is needed for this UI change.
