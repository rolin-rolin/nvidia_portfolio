# Joint Portfolio Website

A sleek, modern joint portfolio website built with Astro and Tailwind CSS, showcasing your and your friend's experiences together.

## 🚀 Features

-   **Modern Design**: Clean, responsive design with smooth animations
-   **Tailwind CSS**: Utility-first CSS framework for rapid styling
-   **Astro**: Fast, modern static site generator
-   **GitHub Pages Ready**: Configured for easy deployment

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

## 🚢 Deployment to GitHub Pages

1. **Update the base path** in `astro.config.mjs`:

    - Replace `YOUR_USERNAME` with your GitHub username
    - Update the `base` path to match your repository name (currently `/nvidia_website`)

2. **Enable GitHub Pages**:

    - Go to your repository settings on GitHub
    - Navigate to "Pages" in the sidebar
    - Set source to "GitHub Actions"

3. **Push to GitHub**:

    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git remote add origin https://github.com/YOUR_USERNAME/nvidia_website.git
    git branch -M main
    git push -u origin main
    ```

4. The GitHub Actions workflow will automatically build and deploy your site on every push to `main`.

## 📝 Customization

### Update Personal Information

Edit `src/pages/index.astro` to customize:

-   Names and titles
-   Descriptions
-   Skills
-   Experiences
-   Contact information

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

## 🎨 Design Features

-   Animated blob backgrounds
-   Smooth scrolling navigation
-   Gradient text effects
-   Responsive mobile menu
-   Hover animations and transitions
-   Modern card layouts

## 📄 License

MIT
