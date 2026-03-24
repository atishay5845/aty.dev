# 👋 Atishay's Portfolio

Welcome to my personal portfolio website! A modern, responsive portfolio showcasing my skills, projects, certifications, and experience.

🚀 **[View Live Demo](https://atydev.vercel.app/)**

---

## 📋 Overview

This is a full-featured portfolio built with cutting-edge web technologies. It showcases my work as a developer, highlighting projects, skills, certifications, and providing an easy way to get in touch.

## ✨ Features

- **🎨 Modern UI/UX** - Clean, professional design with smooth animations
- **📱 Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **🌐 Interactive Globe** - 3D globe visualization for visual appeal
- **📑 Multiple Sections**:
  - Landing/Hero section
  - About Me
  - Featured Projects
  - Certifications
  - Skills & Features
  - Contact & Links
  - Navigation & Footer
- **⚡ Fast Performance** - Optimized with Next.js and modern best practices
- **🎯 SEO Optimized** - Built with proper meta tags and structure

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org) - React-based framework for production
- **Styling**: CSS with PostCSS
- **Components**: Custom React components
- **Deployment**: [Vercel](https://vercel.com)
- **3D Graphics**: Interactive globe component
- **ESLint**: Code quality and linting

## 📂 Project Structure

```
app/
├── components/
│   ├── Loader.jsx              # Loading component
│   └── home/
│       ├── Navbar.jsx          # Navigation bar
│       ├── Landing.jsx         # Hero section
│       ├── About.jsx           # About me section
│       ├── Projects.jsx        # Portfolio projects
│       ├── Certifications.jsx  # Certs & achievements
│       ├── Features.jsx        # Skills & features
│       ├── Contact.jsx         # Contact section
│       ├── Footer.jsx          # Footer
│       └── ui/
│           └── globe.jsx       # 3D globe component
├── layout.js                   # Root layout
├── page.js                     # Home page
└── globals.css                 # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (14+)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd aty.dev
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio locally.

## 🔧 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 📦 Building for Production

```bash
npm run build
npm start
```

The optimized build will be ready for deployment.

## 🌐 Deployment

This portfolio is deployed on **Vercel** for optimal performance and reliability.

- **Production URL**: [https://atydev.vercel.app/](https://atydev.vercel.app/)
- **Deployment**: Connected to GitHub for automatic deployments on push

### Deploy Your Own

To deploy to Vercel:

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure settings
4. Click deploy!

## 💡 Customization

### Update Portfolio Content

- **Personal Info**: Edit component files in `app/components/home/`
- **Projects**: Update `Projects.jsx` with your projects
- **Certifications**: Modify `Certifications.jsx`
- **Styling**: Customize `app/globals.css` and component-specific styles

### Add Certificate Images

Place certificate images in `public/certificates/` directory

## 🤝 Connect With Me

- **Portfolio**: [https://atydev.vercel.app/](https://atydev.vercel.app/)
- Visit the Contact section on the portfolio for direct contact options

## 📝 License

This portfolio is personal work. Feel free to use it as inspiration for your own portfolio!

---

**Built with ❤️ using Next.js & React**
