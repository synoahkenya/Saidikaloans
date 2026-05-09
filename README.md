# 🏦 Saidika Loans Kenya

> Fast & Flexible Mobile Loans — Premium Kenyan Fintech Platform

A production-ready React + Vite fintech web application inspired by Tala and Branch, built for the Kenyan market with full M-PESA integration design.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) to view in browser.

---

## 📁 Project Structure

```
saidika-loans/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx          # Sticky navbar with mobile drawer
│   │   │   └── Footer.jsx          # Full footer with links
│   │   ├── ui/
│   │   │   ├── Button.jsx          # Reusable button component
│   │   │   ├── Badge.jsx           # Color badge component
│   │   │   ├── Input.jsx           # Form input component
│   │   │   ├── FAQ.jsx             # Animated FAQ accordion
│   │   │   ├── SectionTag.jsx      # Section label pill
│   │   │   ├── Skeleton.jsx        # Loading skeleton components
│   │   │   ├── CookieBanner.jsx    # GDPR/DPA cookie consent
│   │   │   └── FloatingCTA.jsx     # Scroll-triggered floating button
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx     # Hero with animated phone mockup
│   │   │   ├── FeaturesSection.jsx # 6-feature grid
│   │   │   ├── StatsSection.jsx    # Animated counters
│   │   │   ├── HowItWorksSection.jsx
│   │   │   ├── TestimonialsSection.jsx
│   │   │   ├── LoanCalculatorSection.jsx # Live loan calculator
│   │   │   ├── MpesaSection.jsx    # M-PESA integration showcase
│   │   │   ├── FAQPreviewSection.jsx
│   │   │   └── PartnersBar.jsx     # Partner logos bar
│   │   └── dashboard/
│   │       ├── DashboardSidebar.jsx
│   │       ├── DashboardStats.jsx  # Balance cards + progress
│   │       └── TransactionList.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ProductsPage.jsx        # Loan products + eligibility checker
│   │   ├── HowItWorksPage.jsx
│   │   ├── CalculatorPage.jsx
│   │   ├── FAQsPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── DashboardPage.jsx
│   │   ├── LoginPage.jsx           # M-PESA OTP + email auth
│   │   ├── RegisterPage.jsx
│   │   ├── BlogPage.jsx
│   │   ├── TermsPage.jsx
│   │   └── PrivacyPage.jsx
│   ├── store/
│   │   ├── themeStore.js           # Zustand dark/light mode (persisted)
│   │   ├── authStore.js            # Zustand auth state (persisted)
│   │   └── loanStore.js            # Zustand loan + transaction state
│   ├── hooks/
│   │   ├── useScrolled.js          # Scroll position detection
│   │   ├── useCountUp.js           # Animated number counter
│   │   └── useInView.js            # Intersection Observer hook
│   ├── utils/
│   │   ├── formatters.js           # KES formatting, loan calculator
│   │   └── constants.js            # Loans, FAQs, nav links, blog posts
│   ├── App.jsx                     # Router + global layout
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Tailwind + global styles
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| **React 19** | UI framework |
| **Vite** | Build tool & dev server |
| **Tailwind CSS 3** | Utility-first styling |
| **Framer Motion** | Animations & transitions |
| **React Router v7** | Client-side routing |
| **Zustand** | Global state management |
| **React Hot Toast** | Toast notifications |
| **Lucide React** | Icon library |
| **Recharts** | Dashboard charts (ready to use) |

---

## 🎨 Design System

### Colors
- **Brand Green:** `#00C896` — Primary CTA, success states
- **Brand Blue:** `#1A6BF5` — Secondary accent
- **Navy:** `#0A1628` — Dark backgrounds, footer
- **Green Light:** `#E6FBF5` — Soft backgrounds, badges

### Typography
- **Display:** DM Serif Display (headings)
- **Body:** Plus Jakarta Sans (all UI text)

### Components
All components support **dark mode** via Tailwind's `dark:` prefix and the `useThemeStore` Zustand store.

---

## 📱 Pages

| Route | Page |
|-------|------|
| `/` | Home (Hero, Features, Stats, How It Works, Testimonials, M-PESA, Calculator, FAQs) |
| `/about` | About Saidika Loans |
| `/products` | Loan Products + Eligibility Checker |
| `/how-it-works` | 5-step process guide |
| `/calculator` | Interactive loan calculator |
| `/faqs` | Full FAQ page |
| `/contact` | Contact form + info |
| `/dashboard` | User dashboard UI |
| `/login` | Login (M-PESA OTP + email) |
| `/register` | Registration form |
| `/blog` | Financial Tips blog |
| `/terms` | Terms & Conditions |
| `/privacy` | Privacy Policy |

---

## 🔜 Next Steps (Backend Integration)

### 1. M-PESA Daraja API
```
POST /api/mpesa/stkpush     — Initiate STK Push payment
POST /api/mpesa/callback    — Handle Daraja callback
POST /api/mpesa/b2c         — Loan disbursement
```

### 2. Authentication
- Implement OTP via Africa's Talking SMS API
- JWT token auth with refresh tokens
- Phone number as primary identifier

### 3. Database Schema
See `docs/schema.sql` (create this next)

### 4. Credit Scoring
- Integrate M-PESA statement analysis
- CRB (TransUnion / Metropol) API for credit checks
- AI scoring model using transaction patterns

### 5. CBK Compliance
- Apply for Digital Credit Provider (DCP) license
- Register with Data Protection Commissioner
- Implement CRB reporting APIs

---

## 📄 License
Private — Saidika Financial Services Limited © 2025
