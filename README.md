# 🦷 DentalCare — Premium Dental Solution

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)

**DentalCare** is a modern, high-end, and fully responsive dental clinic website built with **Next.js 15**. It features a premium "Dark Luxury" aesthetic designed to build trust and provide a seamless booking experience for patients.

## ✨ Key Features

- 💎 **Premium UI/UX**: Sophisticated dark-themed design with smooth micro-animations and professional typography.
- 📱 **Fully Responsive**: Optimized for all devices, from mobile phones to large desktop screens.
- ⚡ **Performance Optimized**: Built using Next.js 15 Server Components and optimized font/image loading.
- 🛠️ **Comprehensive Services**: Dedicated sections for General Dentistry, Cosmetic Dentistry, Orthodontics, and more.
- 🕒 **24/7 Emergency Support**: Integrated priority emergency care signals.
- 📅 **Patient Trust**: Featured testimonials, "Before & After" transformations, and detailed team expertise.
- 🗺️ **Interactive Contact**: Google Maps integration and direct WhatsApp booking.

## 🚀 Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Optimized Google Fonts (Inter, Outfit)
- **Deployment**: Vercel ready

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Riteshx01/dental-nextjs.git
   ```

2. Navigate to the project directory:
   ```bash
   cd dental-nextjs
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```text
/src
├── app/                    # Next.js App Router (Pages & Layouts)
│   ├── about/              # About Us page
│   ├── api/                # Backend API routes
│   ├── blog/               # Blog listing and articles
│   ├── contact/            # Contact Us page
│   ├── gallery/            # Smile gallery / portfolio
│   ├── services/           # Detailed dental services
│   ├── testimonials/       # Patient reviews page
│   ├── globals.css         # Global Tailwind styles & design tokens
│   ├── layout.js           # Root layout with Header & Footer
│   ├── page.js             # Homepage (Hero, Services, Testimonials, etc.)
│   ├── robots.js           # SEO Crawler instructions
│   └── sitemap.js          # Dynamic sitemap generation
├── components/             # Reusable React Components
│   ├── layout/             # Core structural components
│   │   ├── Header.jsx      # Navigation & Mobile Menu
│   │   └── Footer.jsx      # Multi-column professional footer
│   ├── sections/           # High-level page sections
│   │   ├── Hero.jsx        # First impact area with CTAs
│   │   ├── Services.jsx    # Feature grid for dental services
│   │   ├── WhyChooseUs.jsx # Value propositions & trust signals
│   │   ├── BeforeAfter.jsx # Interactive transformation slider
│   │   ├── Testimonials.jsx# Patient feedback display
│   │   └── LocationMap.jsx  # Embedded Google Maps integration
│   ├── ui/                 # Atomic UI elements & utilities
│   │   ├── AnimatedCounter.jsx # Stats & numbers animation
│   │   ├── WhatsAppButton.jsx  # Floating interactive chat
│   │   ├── PageHeader.jsx      # Consistent header for subpages
│   │   └── ScrollReveal.jsx    # Scroll-triggered animations
├── data/                   # Centralized Content Management
│   ├── siteData.js         # Site info, navigation, & service details
│   └── blogData.js         # Blog articles and metadata
└── public/                 # Static Assets (Images, Icons, Fonts)
```

## 📄 License

This project is private and for internal use.

---

Built with ❤️ for Dental Excellence.
