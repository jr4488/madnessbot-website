# MadnessBot Website

A modern, SEO-optimized marketing website for MadnessBot - an AI-powered automotive assistant for mechanics.

## 🚀 Live Website

- **Production:** [https://yourusername.github.io/madnessbot-website](https://yourusername.github.io/madnessbot-website)
- **Application:** [https://anansiportia.com](https://anansiportia.com)

## 🛠️ Built With

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **React Router** - Client-side routing
- **Radix UI** - Accessible component primitives

## ✨ Features

### 🎯 SEO Optimized
- Comprehensive meta tags and Open Graph support
- Structured data (JSON-LD) for rich snippets
- Semantic HTML and accessibility features
- Optimized for search engines and social sharing

### 📱 Mobile-First Design
- Responsive design optimized for mechanics on mobile devices
- Touch-friendly interface
- Fast loading and performance optimized

### 🔧 Marketing Features
- Professional landing page with hero section
- Feature showcase with icons and descriptions
- Pricing comparison (Free vs Pro)
- Customer testimonials
- FAQ section with comprehensive answers
- Contact information and support

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/madnessbot-website.git
cd madnessbot-website
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Build and Deploy

### Local Build
```bash
npm run build
npm run preview
```

### Deploy to GitHub Pages

#### Automatic Deployment (Recommended)
The repository is configured with GitHub Actions for automatic deployment:

1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at `https://yourusername.github.io/madnessbot-website`

#### Manual Deployment
```bash
npm run deploy
```

## 🔧 Configuration

### GitHub Pages Setup
1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. The site will be deployed automatically on push to main

### Custom Domain (Optional)
1. Add a `CNAME` file to the `public` directory with your domain
2. Configure your domain's DNS to point to GitHub Pages
3. Update the `homepage` field in `package.json`

## 📁 Project Structure

```
madnessbot-website/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/         # React components
│   │   ├── HomePage.jsx
│   │   ├── FAQPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── SEOHead.jsx     # SEO meta tags
│   │   └── StructuredData.jsx # JSON-LD schemas
│   ├── assets/            # Images and media
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions workflow
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Branding
- Update logo and images in `src/assets/`
- Modify colors in Tailwind CSS classes
- Update contact information in components

### Content
- Edit page content in respective component files
- Update FAQ questions and answers in `FAQPage.jsx`
- Modify pricing and features in `HomePage.jsx`

### SEO
- Update meta tags in `SEOHead.jsx`
- Modify structured data in `StructuredData.jsx`
- Update sitemap.xml and robots.txt in `public/`

## 📊 SEO Features

### Meta Tags
- Title, description, keywords
- Open Graph for social media
- Twitter Cards
- Canonical URLs

### Structured Data
- Organization schema
- Software application schema
- FAQ schema
- Service schema

### Technical SEO
- Sitemap.xml
- Robots.txt
- Semantic HTML
- Performance optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email:** snaponmadness@gmail.com
- **Phone:** +1 (628) 282-6142
- **Website:** [https://anansiportia.com](https://anansiportia.com)

## 🙏 Acknowledgments

- Built with modern web technologies
- Optimized for mechanics and automotive professionals
- SEO-optimized for maximum visibility
- Mobile-first design for on-the-go usage

