# 🌐 Synapse School App

A modern, intelligent school platform built for staff. Plan lessons, track attendance, and communicate—all in one vibrant, secure hub.

![Synapse Banner](./frontend/public/logo.svg)

## ✨ Features

- **📊 Attendance Tracking** - Lightning-fast, reliable tracking with visual trends
- **📚 Lesson Planning** - Drag-and-drop plans, smart templates, and instant sharing
- **💬 Secure Messaging** - Private, role-based communication for announcements and chat
- **📈 Reports** - Comprehensive reporting for data-driven decisions
- **🎨 Modern UI** - Beautiful neon-accented interface with smooth animations

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Library**: [React 19](https://react.dev/)
- **Animations**: Custom CSS animations with neon effects

## 📁 Project Structure

```
school-mpk/
├── frontend/                 # Next.js application
│   ├── public/              # Static assets (SVG icons, favicon)
│   ├── src/
│   │   └── app/            # App router pages
│   │       ├── about/       # About page
│   │       ├── attendance/  # Attendance tracking
│   │       ├── components/  # Reusable components
│   │       │   ├── Footer.tsx
│   │       │   └── Navbar.tsx
│   │       ├── contact/     # Contact page
│   │       ├── gdpr/        # GDPR policy
│   │       ├── help/        # Help center
│   │       ├── lesson-planner/  # Lesson planning
│   │       ├── messaging/   # Messaging system
│   │       ├── privacy/     # Privacy policy
│   │       ├── reports/     # Reports dashboard
│   │       ├── support/     # Support page
│   │       ├── terms/       # Terms of service
│   │       ├── globals.css  # Global styles
│   │       ├── layout.tsx   # Root layout
│   │       └── page.tsx     # Home page
│   ├── eslint.config.mjs
│   ├── next.config.ts
│   ├── package.json
│   ├── postcss.config.mjs
│   ├── tailwind.config.ts
│   └── tsconfig.json
└── README.md
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/school-mpk.git
   cd school-mpk
   ```

2. **Install dependencies**
   ```bash
   cd frontend
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design System

### Color Palette
- **Primary Cyan**: `#00fff7` - Main accent color
- **Secondary Fuchsia**: `#ff00ea` - Secondary accent
- **Tertiary Blue**: `#00bfff` - Tertiary accent
- **Background**: Dark theme with `#050510` base

### Typography
- Modern sans-serif fonts with tight letter spacing
- Neon glow text effects
- Animated gradients

### Animations
- `animate-float` - Floating effect for logo
- `animate-fade-in` - Smooth fade-in transitions
- `animate-pulse` - Pulsing glow effects
- Neon border animations

## 📱 Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with features overview |
| `/about` | About Synapse and its mission |
| `/attendance` | Student attendance tracking |
| `/lesson-planner` | Create and manage lesson plans |
| `/messaging` | Secure staff messaging system |
| `/reports` | Analytics and reports dashboard |
| `/contact` | Contact information |
| `/support` | Support resources |
| `/help` | Help center |
| `/gdpr` | GDPR compliance information |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## 🔐 Security Features

- Staff-only access control
- Secure role-based messaging
- GDPR compliant data handling
- Privacy-first design

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**MPK** - Initial work

Built with ❤️, creativity, and a love for making technology feel good to use.

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Vercel](https://vercel.com/) for excellent hosting

---

<p align="center">
  <strong>SYNAPSE</strong> — The intelligent school platform for staff
</p>

