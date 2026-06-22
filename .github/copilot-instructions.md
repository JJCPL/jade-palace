# Copilot Instructions for jade-palace-website

## Project Overview
This is a static website for a restaurant, consisting of HTML and CSS files only. There is no JavaScript, backend, or build system. The site is designed for simplicity and direct browser compatibility.

## File Structure
- `index.html`: Home page
- `menu.html`: Menu page
- `contact.html`: Contact information
- `opening-hours.html`: Opening hours
- `review.html`: Customer reviews
- `style.css`: Shared stylesheet for all pages

## Key Conventions
- All pages use a single shared `style.css` for consistent styling.
- Navigation between pages is handled via standard HTML `<a>` links.
- No frameworks, preprocessors, or external dependencies are used.
- Keep HTML semantic and accessible (use `<header>`, `<nav>`, `<main>`, `<footer>` where appropriate).
- Use class names in CSS that are descriptive and scoped to their purpose (e.g., `.menu-section`, `.contact-form`).
- Images and assets (if any) should be placed in an `assets/` directory (create if needed).

## Editing Guidelines
- When adding new pages, link them from the navigation in all HTML files.
- When updating styles, ensure changes do not break layout or readability on any page.
- Keep code clean and well-indented; match the style of existing files.
- Test changes by opening HTML files directly in a browser.

## Example Patterns
- Navigation bar is typically a `<nav>` element at the top of each HTML file.
- Shared sections (like footer) should be consistent across all pages.
- Use relative links (e.g., `href="menu.html"`).

## No Build or Test Workflows
- There are no build, test, or deployment scripts. All development is manual and file-based.

## Integration Points
- None: this project is fully static and self-contained.

## How to Contribute
- Edit HTML or CSS files directly.
- Preview changes in a browser.
- Keep the design and navigation consistent across all pages.

---
For questions or major changes, consult the project owner.
