# PT. Artha Hana Pranawa Website

Static company website for PT. Artha Hana Pranawa, an authorized distributor for Petronas lubricants, Bosch battery and automotive products, and MIB specialty chemicals.

## Project Structure

```
.
├── index.html              # Main landing page
├── README.md
├── .gitignore
├── .nojekyll               # Disables Jekyll on GitHub Pages
├── assets/
│   ├── css/
│   │   └── style.css       # All site styles
│   ├── js/
│   │   └── main.js         # Inquiry form and scrollspy
│   └── images/             # Photography and illustrative assets
│       ├── 01-warehouse.jpg
│       ├── 02-stock.jpg
│       ├── 03-products.jpg
│       ├── 04-office.jpg
│       ├── 05-authorization.jpg
│       ├── 06-legal.jpg
│       ├── 08-distribution.jpg
│       └── 09-industries.jpg
└── docs/
    ├── prompts.json        # AI image generation prompts (working file)
    ├── research.md         # Internal company research notes (gitignored)
    ├── feedback-01.txt     # Design review notes (gitignored)
    ├── feedback-02.txt
    └── feedback-03.txt
```

## Preview Locally

Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## GitHub Pages

This repository is ready to publish through GitHub Pages from the `main` branch root. The `.nojekyll` file ensures all assets and folders are served as-is.
