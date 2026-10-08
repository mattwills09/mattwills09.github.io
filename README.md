# Matthew Williams — Portfolio

A lightweight personal portfolio built with HTML, CSS, and JavaScript, hosted on GitHub Pages.

## Pages
- index.html: professional introduction and selected work
- portfolio.html: Safely public SDK demo and Family League Legacy project context
- contact.html: direct email and GitHub links
- portfolio-archive.html: original project gallery, preserved for historical context

Shared presentation lives in assets/css/style.css. JavaScript is limited to the footer year. No build step or framework is required.

Serve the repository with any local static web server to preview. See docs/implementation-decisions.md for the refresh rationale and remaining archive-link review.

## Contact form
The quick-message form posts to FormSubmit for email forwarding. The recipient must submit once and confirm the activation email before delivery works. Gmail and Outlook web compose links are also available. No email credentials are stored in this repository.
