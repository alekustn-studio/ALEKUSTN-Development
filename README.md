# ALEKUSTN — personal portfolio site

Hi. This repository is **my one-page portfolio website**: services, case studies, stack, a short about section, and a contact form. It is not a framework app — just **HTML, CSS, and JavaScript** you can open in a browser or host as a static site anywhere.

**What visitors can do:** switch **Russian / English**, browse the sections, and reach out through the form. The form offers **message templates** — pick one to insert a starter message, then edit anything by hand.

**How the form works:** on submit, the page tries to **POST** JSON to the URL in the `data-contact-api` attribute on the form in `index.html`. If that URL is missing or the request fails, it falls back to **mailto** so people can still send a message.

**What’s in the repo:** `index.html`, `styles.css`, `script.js` (interactivity and translations), `404.html`, and an image used in the About section.

### Run it locally

Easiest: open `index.html` in your browser. For a small local server, from this folder:

```bash
npx --yes serve .
```

Then open the URL printed in the terminal (often `http://localhost:3000`).

### Put it online

There is no build step. Upload the project to **GitHub Pages**, **Netlify**, **Cloudflare Pages**, or any static host, with `index.html` at the site root.
