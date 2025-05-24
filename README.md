
# 🌐 Nuxt LinkTree Clone

A simple, customizable **LinkTree clone** built using **Nuxt 3**, **Tailwind CSS**, and **Static Site Generation (SSG)**. Easily showcase your most important links on a beautiful personal page — and host it for free using **GitHub Pages**!

🎥 **Watch the full tutorial here**: [How to Make Your Own LinkTree + Deploy on GitHub Pages](https://youtu.be/7Ma075e8hCA?si=_n0pDf6gcnZGiGGV)

---

## 🚀 Features

- Built with **Nuxt 3** and **SSG**
- Fully responsive design with Tailwind CSS
- Easy customization through a single `user.json` file
- Quick deploy to GitHub Pages via `npm run deploy`
- SEO-ready with title, description, image, and keywords
- Support for social icons using Bootstrap Icons

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Moeabdelhafeed/mylinks.git
cd mylinks
```

### 2. Install Node.js and Git

- [Install Node.js](https://nodejs.org/)
- [Install Git](https://git-scm.com/)

### 3. Install Project Dependencies

```bash
npm install
```

---

## ⚙️ Configuration

### 🔧 `nuxt.config.ts`

Update your GitHub repo name in this section:

```ts
app: {
  baseURL: '/your-repo-name/',
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/your-repo-name/favicon.ico' }
    ]
  }
}
```

### 🔧 `user.json`

Edit `user.json` to customize your LinkTree:

- Change your `name`, `role`, `title`, images, and links
- Replace every `your-repo-name` and `yourusername` with your actual repo and GitHub username

---

## 🧪 Local Development

```bash
npm run dev
```

---

## 📦 Generate Static Site

```bash
npm run generate
```

---

## 🚀 Deploy to GitHub Pages

```bash
npm run deploy
```

> This command automatically builds your project and pushes the generated static files to the `gh-pages` branch.

---

## 🧩 Credits

Made with ❤️ by [Mohammad Abdelhafeed](https://github.com/Moeabdelhafeed)

📺 [Watch the tutorial on YouTube](https://youtu.be/7Ma075e8hCA?si=_n0pDf6gcnZGiGGV)

---

## 📄 License

MIT – free to use, modify, and share.
