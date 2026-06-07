# Vertex -- Trading Strategy & Addon Landing Page

<p align="center">
  <img src="assets/static/logo-horizontal.png" alt="Vertex" height="40" />
</p>

<p align="center">
  <strong>A ready-to-deploy landing page for selling NinjaTrader trading strategies, addons, and tools.</strong>
</p>

<p align="center">
  <a href="#features">Features</a> &bull;
  <a href="#quick-start">Quick Start</a> &bull;
  <a href="#customization">Customization</a> &bull;
  <a href="#contributing">Contributing</a> &bull;
  <a href="#license">License</a>
</p>

<br />

---

## What Is This?

Vertex is a **complete, production-ready landing page** built with vanilla HTML, Tailwind CSS, and a lightweight Express backend. It's designed for traders and developers who want to sell NinjaTrader 8 strategies, indicators, or addons without building a site from scratch.

<br />

<p align="center">
  <img src="https://raw.githubusercontent.com/shrils/vertex/main/docs/hero-preview.svg" alt="Hero section preview" width="800" />
</p>

<br />

## Features

<table>
<tr>
<td width="50%">

### Landing Page
- Hero section with animated beam background
- "Built for ___ Traders" with rotating trait words
- Feature highlight cards with iconography
- Newsletter signup (stores to JSON via Express API)

</td>
<td width="50%">

### Strategy Dashboard
- Dynamic strategy cards with live charts (ApexCharts)
- Sort/filter by Profit Factor, Cumulative Profit, Drawdown
- Real-time PnL timeline with drawdown overlay
- Click-through to detailed strategy views

</td>
</tr>
<tr>
<td width="50%">

### Addons Marketplace
- Horizontal card layout with inline SVG previews
- Trade Copier -- replicate trades across accounts
- Social Trade Copier -- shareable trade codes
- Alert Engine X -- multi-condition webhook alerts
- TPO Charts -- Market Profile visualization
- Risk Manager Elite -- hard loss limits and auto-flatten

</td>
<td width="50%">

### Technical
- Pure vanilla HTML/CSS/JS -- no framework
- Tailwind CDN for styling
- Express backend for newsletter subscriptions
- Font: Space Grotesk (Google Fonts)
- Charts: ApexCharts
- Animated canvas background (light beams)

</td>
</tr>
</table>

<br />

---

## Quick Start

### Prerequisites
- **Node.js** v16+ installed on your machine

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/shrils/vertex.git
cd vertex

# 2. Install dependencies
npm install

# 3. Replace the logo
# Replace assets/static/logo-horizontal.png with your own logo

# 4. Customize your brand
# Search for "Vertex" in index.html and replace with your brand name
# Update the domain in the footer

# 5. Start the development server
npm start

# 6. Open your browser
# Visit http://localhost:3000
```

That's it! Your landing page is live.

<br />

---

## Customization

### Change Brand Name
Search and replace `Vertex` with your brand name in `index.html`. Don't forget to update:
- `<title>` tag (line 6)
- All `alt` attributes on logo images
- Copyright line in footer
- FAQ section heading
- Chat widget FAQ

### Change Domain
Find `yourwebsite.com` and replace with your actual domain.

### Update Pricing
The membership price ($349) is in the signup modal. Search for `Membership -- Strategies Only` and `$349` to update.

### Add Your Own Strategies
Edit the `strategies` array around line 1300 in `index.html`. Each strategy object has:
- `name`, `symbol`, `timeframe`
- `profit`, `profitFactor`, `drawdown`, `trades`
- A chart data generator function

### Add Your Own Addons
Edit the `addonData` array around line 1200. Each addon has:
- `id`, `name`, `desc`, `features` (array of 4 strings)
- `image` -- an inline SVG data URI
- A corresponding entry in `addonDetailContent` for the detail view

### Email Collection
Emails are stored in `mailing-list.json` via the Express API at `POST /api/subscribe`. To use in production, swap the JSON file storage for a database.

<br />

---

## Project Structure

```
vertex/
|-- index.html              # Main landing page (all HTML/CSS/JS)
|-- server.js               # Express server + mailing list API
|-- package.json            # Dependencies & scripts
|-- mailing-list.json       # Newsletter subscriber data
|-- README.md               # This file
|-- LICENSE                 # MIT License
`-- assets/
    `-- static/
        `-- logo-horizontal.png   # Your logo
```

<br />

---

## Contributing

Contributions are welcome and appreciated. Here's how:

1. **Fork** the repository
2. **Create a branch** -- `git checkout -b feature/amazing-thing`
3. **Make your changes** -- keep it clean and documented
4. **Test** -- run `npm start` and verify everything works
5. **Submit a PR** -- describe what you changed and why

### Ideas for Contributions
- Add more addon types
- Improve mobile responsiveness
- Add dark mode support
- Database integration for mailing list
- Authentication system
- Admin dashboard

<br />

---

## License

MIT -- see the [LICENSE](LICENSE) file for details.

**Built by [@shrils](https://github.com/shrils). Use it, modify it, ship it.**

<br />
