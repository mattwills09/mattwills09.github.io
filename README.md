# Matt Williams — Portfolio

A lightweight personal portfolio built with HTML, CSS, and JavaScript, hosted on GitHub Pages.

## Pages
- index.html: professional introduction and selected work
- portfolio.html: Safely public SDK demo and Family League Legacy project context
- contact.html: direct email and GitHub links
- portfolio-archive.html: original project gallery, preserved for historical context

Shared presentation lives in assets/css/style.css. JavaScript enhances the footer year, optional engineering notes, and subtle pointer-driven wallpaper movement. No build step or framework is required.

Serve the repository with any local static web server to preview. See docs/implementation-decisions.md for the refresh rationale and remaining archive-link review.

## Contact form
The quick-message form posts to FormSubmit for email forwarding. FormSubmit activation and inbox delivery were confirmed by the owner on October 28, 2026. Gmail and Outlook web compose links are also available. No email credentials are stored in this repository.

## Résumé
The public PDF is assets/documents/Matthew_Williams_FullStack_Resume.pdf. Replace that file with an updated copy using the same filename to preserve application links. Download links appear on the homepage and contact page. A dedicated section on the Work page offers both viewing in a new tab and downloading the PDF.

## Sharing and images
Active pages include page-specific descriptions, canonical URLs, Open Graph and large-card metadata. The shared 1200×630 preview is assets/images/portfolio-social-card.png. These absolute URLs target the public GitHub Pages domain and become available after deployment; social platforms may cache previews.

The homepage uses responsive 400px/800px WebP headshots. The original PNG remains unchanged as the source asset. Preserve the existing CSS warmth treatment when replacing the photo.

## Verification
This is a static site with no build step. Check shared JavaScript syntax, local page/asset links, responsive layout, résumé view/download links, and contact form validation before publishing. Actual contact email delivery also requires a recipient inbox check; passing HTML validation alone does not prove delivery.
