# Nvidia Joint Portfolio Website

Joint portfolio website built with Astro and Tailwind CSS, showcasing our experiences.

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

## 🏗️ Build

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Styling

-   Global styles: `src/styles/global.css`
-   Component styles: Individual `.astro` files use Tailwind classes
-   Color schemes: Modify gradient classes in components (e.g., `from-purple-600`, `to-blue-600`)

### Add Images

Place images in the `public/` directory and reference them in your components:

```astro
<img src="/your-image.jpg" alt="Description" />
```

## 📁 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── AboutSection.astro
│   │   ├── ContactSection.astro
│   │   ├── Hero.astro
│   │   ├── Navigation.astro
│   │   └── PersonCard.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── astro.config.mjs
└── package.json
```

## 📄 License

MIT
