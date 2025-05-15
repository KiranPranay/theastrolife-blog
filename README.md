# TheAstroLife

> A fast, modern, and extensible Astro-powered blog platform for skateboard enthusiasts.

**TheAstroLife** is a static site built with [Astro](https://astro.build/) that showcases skateboard tips, tutorials, and videos. It features MDX content, RSS feed generation, sitemap support, and an easy-to-extend component-based architecture—perfect for anyone looking to run a performance-first, content-driven site.

---

## 🚀 Key Features

* **Astro v5+**: Blazing-fast static site generation with partial hydration.
* **MDX Support**: Write posts in Markdown with embedded React/Vue/Svelte components.
* **RSS Feed**: Automatically generate `rss.xml` for subscribers.
* **Sitemap**: SEO-friendly `sitemap.xml` integration.
* **Responsive Layout**: Sidebar navigation, hero images, and video embeds.
* **Global Styling**: Centralized `global.css` for utility and component classes.
* **Video.js Integration**: Built-in support for video playback via CDN scripts.
* **GitHub Pages Deployment**: One-command deploy via `gh-pages` or GitHub Actions.

---

## 🛠️ Prerequisites

* **Node.js** v18 or later
* **pnpm** (recommended) or npm/yarn
* **Git** for version control

---

## 📦 Installation & Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/RES/theastrolife.git
cd theastrolife
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open your browser at `http://localhost:3000` to preview live changes.

---

## 🏗️ Build & Preview

Build the static site for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

---

## 📡 Deployment

### GitHub Pages (branch-based)

1. Ensure `astro.config.mjs` has the correct `base` and `site` values:

   ```js
   export default defineConfig({
     site: 'https://<USERNAME>.github.io/theastrolife/',
     base: '/theastrolife/',
     integrations: [/* ... */]
   });
   ```
2. Run the deploy script:

   ```bash
   pnpm run deploy
   ```
3. In your GitHub repository settings, set Pages source to the `gh-pages` branch (root).

### GitHub Actions (CI/CD)

An example workflow in `.github/workflows/deploy.yml` is included. On each push to `main`, it builds the site and updates `gh-pages` automatically.

---

## 🧱 Project Structure

```
├── public/             # Static assets (favicon, script.js, style.css)
├── src/
│   ├── components/     # Reusable UI components
│   ├── layouts/        # Page layouts (e.g. BlogPostLayout.astro)
│   ├── pages/          # Route-driven pages & MDX posts
│   └── styles/         # global.css and other styles
├── astro.config.mjs    # Astro configuration (integrations, base path)
├── package.json        # NPM scripts & dependencies
└── README.md           # This file
```

---

## ✍️ Writing Posts

1. Create a new `.mdx` file under `src/pages/posts/`, e.g. `2025-05-16-sample-post.mdx`.
2. Add frontmatter at the top:

   ```yaml
   ---
   title: "Your Post Title"
   pubDate: "2025-05-16"
   updatedDate: "2025-05-17"  # optional
   heroImage: "/images/your-hero.jpg"
   authorName: "Your Name"
   authorImage: "/images/you.jpg"
   ---
   ```
3. Write your content in Markdown/JSX below the frontmatter.

The `BlogPostLayout.astro` will automatically render the dates, hero image, and author info.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open a pull request.

1. Fork the repo.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m "feat: add new component"`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

---

## 📄 License

[MIT License](./LICENSE)

---

*This README was generated to help you get started with TheAstroLife—have fun building!*
