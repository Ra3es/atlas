# Atlas Living static website

Airbnb-inspired static multi-page site for GitHub Pages using **pure HTML/CSS/JS**.

## Pages
- `index.html` — home with hero search UI, featured cards, trust section
- `apartments.html` — apartment listing cards with View + Book CTA
- `property.html` — property detail template (gallery, amenities, reviews, map, accordion, sticky booking card)
- `book.html` — embedded booking provider slot (replace placeholder iframe/script)
- `policies.html` — booking and stay policies
- `contact.html` — WhatsApp CTA, mailto contact form, map placeholder

## Assets structure
- `assets/css/styles.css`
- `assets/js/main.js`
- `assets/images/` placeholder images for cards/gallery/OG
- `assets/icons/` amenity icons

## GitHub Pages setup
1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**.
4. Select your main branch and `/ (root)` folder.
5. Save, then wait for the Pages URL.
6. Replace all `yourusername` placeholders in meta tags, `sitemap.xml`, and `robots.txt`.

## Booking engine embed
Open `book.html` and replace the placeholder iframe with your booking provider's code:

```html
<!-- Replace this with provider iframe/script -->
<iframe src="https://provider.example/embed" title="Booking Engine"></iframe>
```

## Notes
- `.nojekyll` is included for static asset compatibility.
- All Book Now buttons route to `book.html`.
