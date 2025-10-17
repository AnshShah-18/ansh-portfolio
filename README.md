# 🌐 Ansh Shah — Portfolio

[![Deploy to GitHub Pages](https://github.com/AnshShah-18/ansh-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/AnshShah-18/ansh-portfolio/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/Live%20Portfolio-%23007ACC?style=for-the-badge&logo=react&logoColor=white)](https://AnshShah-18.github.io/ansh-portfolio/)

A modern, responsive developer portfolio built with **React**, **Tailwind CSS**, and **Framer Motion**, showcasing my work in **Machine Learning**, **Cloud Computing**, and **Software Development**.

---

## 🚀 Live Demo

🔗 **[Visit My Portfolio →](https://AnshShah-18.github.io/ansh-portfolio/)**

---

## 🧩 Tech Stack

| Category | Technologies |
|-----------|---------------|
| **Frontend Framework** | [React](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Form Handling** | [EmailJS](https://www.emailjs.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Hosting** | [GitHub Pages](https://pages.github.com/) |
| **CI/CD** | [GitHub Actions](https://github.com/features/actions) |

---

## 🧠 Features

✅ Fully responsive (mobile-first design)  
✅ Animated section transitions with smooth fade-in on scroll  
✅ Integrated contact form (EmailJS API)  
✅ Dynamic project, experience, and education data from JSON  
✅ Auto-deployed with **GitHub Actions + GitHub Pages**

---

## 📁 Folder Structure
```bash 
ansh-portfolio/
├── public/                     # Public assets (favicon, logos, static images)
│
├── src/
│   ├── components/             # Reusable UI components (Navbar, Hero, About, Skills, Projects, etc.)
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── FadeInSection.jsx
│   │
│   ├── data/                   # Centralized portfolio content (JSON-style data)
│   │   └── portfolioData.js
│   │
│   ├── App.jsx                 # Root React component (page layout + routing)
│   ├── index.css               # Tailwind base and custom styles
│   ├── main.jsx                # React DOM entry point
│   └── assets/                 # (optional) local images or icons
│
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD workflow (auto-deploy to Pages)
│
├── package.json                # npm scripts and dependencies
├── vite.config.js              # Vite configuration (base path for GitHub Pages)
├── .gitignore                  # Ignore files like node_modules, dist, etc.
└── README.md                   # This file (project overview)
```

## ⚙️ Deployment

This portfolio is automatically deployed using **GitHub Actions** whenever code is pushed to the `main` branch.  
The workflow builds your React + Vite project and publishes it to **GitHub Pages**.

---

### ▶️ Run Locally

To run the portfolio locally for development:
```bash
npm install
npm run dev
```


Then open your browser and visit:  
👉 [http://localhost:5173](http://localhost:5173)

---

### 🏗 Build for Production

To create a production-ready optimized build:
```bash
npm run build
```
The compiled file will generate the build output in the `dist/` folder.

---

### 🚀 Manual Deployment (Optional)

If you ever want to deploy manually (instead of using GitHub Actions):
```bash
npm run deploy
```

This runs:
- A Vite build to create the optimized files  
- Then publishes them to GitHub Pages  

---

### ⚙️ Continuous Deployment (CI/CD Workflow)

GitHub Actions automatically handles:
1. **Building** the project using Vite  
2. **Uploading** the production-ready build as an artifact  
3. **Deploying** to GitHub Pages  
4. **Hosting** the live version at:  
   👉 **[https://AnshShah-18.github.io/ansh-portfolio/](https://AnshShah-18.github.io/ansh-portfolio/)**

Every time you push to `main`, the deployment runs automatically — no manual steps needed.

---

## 💬 Contact

📧 **Email:** [ansh18june@gmail.com](mailto:ansh18june@gmail.com)  
💼 **LinkedIn:** [linkedin.com/in/anshshah18](https://www.linkedin.com/in/anshshah18)  
💻 **GitHub:** [github.com/AnshShah-18](https://github.com/AnshShah-18)  
📍 **Location:** Chicago, IL  

---

## 🧾 License

This project is licensed under the **MIT License**.  
You can freely use, modify, and distribute it with attribution.  
See the [LICENSE](LICENSE) file for details.

---


## 🧠 Acknowledgements

Built with:
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite](https://vitejs.dev/)
- [GitHub Pages](https://pages.github.com/)
- [GitHub Actions](https://github.com/features/actions)

---

## ✨ Quote

> _“Innovation starts with curiosity — I love building scalable systems that bring AI, cloud, and engineering together.”_  
> — **Ansh Shah**
