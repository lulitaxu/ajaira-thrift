# Ajaira Thrift — storefront

Standalone website for **Ajaira Thrift**, a Dhaka vintage/thrift shop.
Converted from the single-file demo that lived inside the demo hub into a
proper multi-file static site. Design locked by the client: black + silver
only.

## Run it

Any static server from the repo root:

```bash
python3 -m http.server 8000
# or: npx serve .
```

Deploy as-is to GitHub Pages, Vercel, Netlify or Cloudflare Pages.
`vercel.json` and `_headers` carry the security headers for Vercel and
Netlify/Cloudflare Pages; the same CSP also ships as a `<meta>` tag in
`index.html` for hosts without header support (e.g. GitHub Pages).

## Structure

- `index.html` — markup only, plus one tiny pre-paint script (splash
  state) whose SHA-256 is pinned in the CSP.
- `styles.css` — all styles, extracted in original cascade order.
- `app.js` — catalogue, bag, checkout and splash logic.
- `images/`, `media/` — the shop's real product photos and the splash film.

## Shop rules baked into the code

- Every piece is **one of one**. Quantity is capped at the item's stock
  everywhere it can change (grid add, modal add, bag stepper).
- A booked item (stock 0) can never enter the bag: the buttons disable
  in the UI **and** `addToCart()` rejects it in the logic.
- Checkout validates name (3+ chars), Bangladeshi phone
  (`01` + `3-9` + 8 digits) and address (10+ chars) before anything is
  booked, with inline errors.
- Confirm is guarded against double submission; the bag clears in the
  same synchronous step, so a second confirm has nothing to book.
- Customer input is never written into the page with `innerHTML` —
  confirmations render through `textContent`, and the WhatsApp order
  message is built with `encodeURIComponent`.

## Wiring it to a backend

This is the frontend deliverable, built to be customized and connected:

- **Catalogue data** lives in the `PRODUCTS` array at the top of
  `app.js` (name, sku, price, compare-at, category, sizes, stock,
  specs, image). The grid, filters, search and product modal all read
  from it, so swapping the array for API data wires the whole page.
- **Bag state** is the `cart` Map in `app.js`. `addToCart()` enforces
  the one-piece stock rule; the bag drawer and totals read from it.
- **Checkout** is the confirm handler in `app.js`: it validates the
  form, builds the order and opens the WhatsApp order link. Replace
  that last step with the backend's checkout call when connecting.
- **Theme** is locked to black + silver with `data-theme="chrome"`
  on the `<html>` element.

## Production note

This build is the storefront. When it takes real orders, stock
reservation and payment confirmation must be enforced by a backend:
the first confirmed order must win atomically on the server, so two
buyers can never both book the same one-piece item. Client-side checks
here mirror that rule; they are not a substitute for it.
