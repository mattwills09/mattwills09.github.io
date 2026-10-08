# Portfolio refresh decisions — October 8, 2026

- Keep the existing static HTML/CSS/JavaScript architecture and About, Work, and Contact pages. No framework migration or new build dependencies.
- Refresh the shared presentation with an editorial serif, clean body text, restrained teal/ivory palette, responsive grids, readable typography, and visible keyboard focus.
- Replace the older long biography with a concise senior-engineering introduction and a professional experience section based on the supplied background. No invented employment dates, impact metrics, client names, or project ownership claims.
- Feature the user-supplied Safely public SDK demo and Family League Legacy. Clearly distinguish a public company demo from available source code; describe Family League Legacy as an in-development project with sample data.
- Preserve all original gallery projects and their original destinations in portfolio-archive.html. Those destinations are not verified; review stale Heroku deployments and mismatched GitHub links before promoting archived work.
- Remove nested anchors from project cards and use separate source/demo links. Preserve project screenshot assets.
- Separate charset and viewport metadata, add descriptive page titles, semantic navigation and main content, current-page markers, and a skip link.
- Replace the mailto-based form with a direct email link. No form backend, analytics, external submissions, or contact data collection added.
- Remove the jQuery dependency from active pages: existing behavior was limited to hover decoration, now handled with CSS. Minimal JavaScript only updates the footer year.
- Use a neutral MW favicon and retain the existing portrait. No resume or LinkedIn URL added because neither was supplied.
- No deployment, push, or commit performed. Changes are intended for local review.

## Validation
- JavaScript syntax check and Git whitespace check passed.
- All four active pages passed checks for local asset paths, local page links, and nested anchors.
- Browser verified desktop homepage, Work-to-archive navigation, all 14 archive cards, and mobile homepage/contact layout at 390px with no horizontal page overflow.
- Public demo and archive destinations have not been verified end-to-end; the Safely link was supplied by the user. Legacy index2.html remains outside the active navigation and has not been modernized.

## Dark editorial revision and contact — October 8, 2026
- Shift the shared palette to dark charcoal, warm cream typography, pale mineral green links, and peach display accents. Retain vintage serif headings and readable sans-serif body type.
- Add a slightly tilted portrait outline and asymmetrical project-card corners for personality without animation or visual clutter. Mobile grids continue to stack.
- Rewrite homepage content in neutral professional language; remove first-person biography phrasing while retaining supported experience details.
- External demo/source and profile links open with target=_blank and rel=noopener noreferrer. Add a screen-reader description that they open separately. Browser preferences determine whether a new tab or window appears.
- Provide Gmail and Outlook web compose links addressed to mattwills09@gmail.com, alongside the default mailto fallback.
- Add a short name/email/message form using a native POST to FormSubmit. No mail credentials or private secrets belong in this static website. Include visitor-facing provider disclosure, native required/email validation, and message length limits.
- FormSubmit requires a first submission and confirmation by the recipient before email delivery is active. Delivery has not been activated or tested; do not represent it as verified. Leave default CAPTCHA enabled; no test messages sent externally.
- Validation: JavaScript syntax and Git whitespace checks passed; local page/asset and anchor checks passed on all four pages. Browser confirmed external-link targets, required contact fields, forwarding destination, and responsive contact layout at 390px without horizontal overflow. No form submission or email delivery test was performed.

## Miami palette and independent development — October 8, 2026
- Retain the dark editorial layout and vintage serif typography; shift accents toward Miami-inspired aqua, orange, and green. Use bright aqua for links/focus, warm orange for display accents, and green for secondary labels and the portrait outline. Avoid official logos or affiliation claims.
- Add current React/TypeScript/Vite and Vercel work to the homepage and experience section, explicitly identifying Family League Legacy as independent development rather than attributing that stack to Safely employment.
- Supabase is not installed in the inspected Family League Legacy package. Describe Supabase/PostgreSQL as planned persistence, not completed integration or demonstrated production experience.
- Requested replacement portrait was not available as an attachment or local file in this turn. Existing portrait remains until the user supplies the image.

## Updated portrait — October 8, 2026
- Replace the homepage portrait with the user-supplied HS2.png headshot, copied into the site's image assets under a descriptive filename.
- Preserve the original image and existing responsive portrait frame; no photo retouching or generation. Retain the previous portrait asset for recovery.

## Original vector wallpaper — October 8, 2026
- Reuse assets/images/vec-wall-bg.jpg as a decorative hero texture behind the portrait side, preserving the original asset.
- A low-opacity CSS pseudo-element and directional mask fade the artwork away from headline/body text. Reduce opacity and change fade direction on mobile.
- Keep the wallpaper out of the accessibility tree and make the decorative layer ignore pointer events. No image editing, new asset generation, or layout change.

## Portrait color presentation — October 8, 2026
- Remove the desaturation that made the supplied headshot appear pale. Use a gentle CSS warm tint (6% sepia) and modest saturation boost (108%) instead.
- Preserve the original headshot file; this changes only its appearance in the page, with no retouching of facial features.

## Resume and CTO recommendation — October 8, 2026
- Use the supplied resume as evidence for supported role dates, Safely SDK ownership, Kafka/Java services, observability tooling, and EMS POS/merchant portal work serving 300–400 locations.
- Strengthen Angular/TypeScript and UI/UX positioning while retaining full-stack breadth and current independent React/Vercel development.
- Add a verbatim excerpt from the user-provided recommendation, attributed to Safely's CTO and the supplied direct-management context. No name or endorsement invented.
- Keep planned Supabase work separate from implemented experience. Include relevant Node/Express, testing, collaboration, and AI-assisted engineering context without claiming every tool was used at Safely.
- Use the resume for content only; no public resume download, phone number, or personal contact details copied into the site.
- Testimonial now uses a neutral Professional recommendation attribution, with no CTO title or employment timing in visible text or accessible labels. Quote unchanged.
- Replace the Angular-specific testimonial with the verbatim recommendation excerpt about navigating ambiguity, collaboration, and outstanding user experiences. Keep the neutral Professional recommendation attribution.
