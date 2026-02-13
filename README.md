# Atlas Living GitHub Pages Website

Static, mobile-responsive website for **Atlas Living** built with pure HTML/CSS/JS.

## Included pages
- `index.html` (Home)
- `apartments.html`
- `book.html` (booking embed placeholder)
- `policies.html`
- `contact.html`

## Assets structure
```
assets/
  css/
    styles.css
  js/
    main.js
  images/
```

## Booking embed setup
1. Open `book.html`.
2. Locate the booking section and replace the placeholder `<iframe src="https://example.com">` with your provider embed URL/code.

## GitHub Pages deployment
1. Push this repository to GitHub.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, set:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` (or your default branch)
   - **Folder:** `/ (root)`
4. Save and wait for deployment.
5. Your site will be available at:
   - `https://<your-username>.github.io/<repo-name>/`

## Optional updates
- Replace placeholder text/images with real apartment content.
- Update the WhatsApp number and contact email in `contact.html`.
- Update canonical Open Graph URLs to your final production URL.
