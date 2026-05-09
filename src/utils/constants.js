export const LOAN_PRODUCTS = [
  {
    id: 'instant',
    name: 'Saidika Instant',
    icon: '⚡',
    color: 'green',
    range: 'KES 500 – 10,000',
    minAmount: 500,
    maxAmount: 10000,
    features: [
      'Disbursed in under 60 seconds',
      '7 – 30 day repayment period',
      'Flat processing fee from 8%',
      'No documents required',
      'Available 24/7 including weekends',
    ],
  },
  {
    id: 'personal',
    name: 'Saidika Personal',
    icon: '📈',
    color: 'blue',
    range: 'KES 10,001 – 100,000',
    minAmount: 10001,
    maxAmount: 100000,
    features: [
      'Flexible 1 – 6 month terms',
      'Interest from 12% p.a.',
      'Reducing balance method',
      'Automatic M-PESA integration',
      'Credit limit grows with each loan',
    ],
  },
  {
    id: 'business',
    name: 'Saidika Business',
    icon: '🏢',
    color: 'purple',
    range: 'KES 100,001 – 500,000',
    minAmount: 100001,
    maxAmount: 500000,
    features: [
      'Up to 12 month repayment',
      'Competitive rates from 15% p.a.',
      'Business M-PESA paybill option',
      'Dedicated relationship manager',
      'Renewal discounts available',
    ],
  },
]

export const NAV_LINKS = [
  { label: 'Home',         path: '/' },
  { label: 'Loan Products', path: '/products' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Calculator',   path: '/calculator' },
  { label: 'Tips',         path: '/blog' },
  { label: 'Contact',      path: '/contact' },
]

export const STATS = [
  { value: 500, suffix: 'K+', label: 'Active Borrowers' },
  { value: 8,   suffix: 'B+', label: 'KES Disbursed',   prefix: 'KES ' },
  { value: 47,  suffix: '',   label: 'Counties Covered' },
  { value: 98,  suffix: '%',  label: 'Satisfaction Rate' },
]

export const TESTIMONIALS = [
  {
    name: 'Wanjiku Njoroge',
    location: 'Nairobi, Mama Mboga',
    avatar: 'WN',
    rating: 5,
    text: 'Saidika saved my business! When my stock ran out before a big holiday, I got KES 30,000 in my M-PESA within minutes. Paid it back in 30 days. No stress at all.',
  },
  {
    name: 'Joseph Otieno',
    location: 'Kisumu, Boda Boda Rider',
    avatar: 'JO',
    rating: 5,
    text: 'As a boda boda operator, I needed quick cash for repairs. Saidika gave me KES 15,000 without asking for anything complicated. My limit has grown to KES 80,000 now!',
  },
  {
    name: 'Fatuma Mohamed',
    location: 'Mombasa, Teacher',
    avatar: 'FM',
    rating: 5,
    text: 'I used Saidika to pay my daughter\'s school fees when I was short. The interest was fair, the process was simple, and customer support was actually helpful.',
  },
]

export const FAQS = [
  { q: 'Who is eligible for a Saidika Loan?', a: 'Any Kenyan citizen aged 18+ with an active Safaricom M-PESA line (minimum 3 months) and a valid national ID is eligible. We use your M-PESA history and credit profile to determine your limit.' },
  { q: 'How quickly do I receive my loan?', a: 'Approved loans are disbursed to your M-PESA wallet within 3 minutes. First-time borrowers may experience slightly longer processing for verification.' },
  { q: 'What interest rates does Saidika charge?', a: 'Rates start from 12% per annum depending on your credit profile and loan type. All rates are displayed clearly before you accept — no hidden fees ever.' },
  { q: 'Can I repay my loan early?', a: 'Yes! Early repayment is completely free of penalties and can increase your credit limit faster. You only pay interest for the days the loan was active.' },
  { q: 'What happens if I miss a repayment?', a: 'We\'ll send you SMS and push notification reminders 3 days before and on the due date. Missing a payment incurs a daily penalty and may affect your credit score and limit.' },
  { q: 'How do I repay my Saidika loan?', a: 'You can repay via: M-PESA Pay Bill (Paybill: 384384, Account: Your ID Number), USSD by dialing *384#, or through the Saidika app. All methods are instant.' },
  { q: 'How is my loan limit determined?', a: 'Your limit is calculated by our AI engine using your M-PESA transaction history, repayment behavior, and other data points. It grows with every successful repayment.' },
  { q: 'Is Saidika Loans regulated?', a: 'Yes. Saidika Loans Kenya is licensed and regulated by the Central Bank of Kenya under the Digital Credit Providers Regulations, 2022.' },
]

export const BLOG_POSTS = [
  { id: 1, tag: 'Budgeting',   emoji: '💰', bg: 'green',  title: 'The 50/30/20 Rule: How Kenyans Can Budget with M-PESA',            excerpt: 'Learn how to allocate your income using the proven 50/30/20 rule — adapted for Kenya\'s M-PESA economy.',          readTime: 5, date: 'Feb 14, 2025' },
  { id: 2, tag: 'Credit Score', emoji: '📈', bg: 'blue',   title: 'How to Build a Great Credit Score in Kenya from Scratch',          excerpt: 'Your credit score affects every loan you\'ll ever take. Here\'s the definitive guide to building excellent credit.',  readTime: 7, date: 'Feb 10, 2025' },
  { id: 3, tag: 'Business',    emoji: '🏪', bg: 'yellow', title: '5 Ways to Use a Business Loan to Grow Your Hustle in 2025',        excerpt: 'Smart Kenyans are using microloans to build sustainable small businesses. Here\'s how to do it right.',              readTime: 6, date: 'Feb 05, 2025' },
  { id: 4, tag: 'Savings',     emoji: '🎯', bg: 'green',  title: 'Emergency Fund: Why Every Kenyan Needs One and How to Start',      excerpt: 'An emergency fund is your financial safety net. Learn how to build one from KES 0 using M-PESA savings.',          readTime: 4, date: 'Jan 28, 2025' },
  { id: 5, tag: 'Loans',       emoji: '💳', bg: 'blue',   title: 'When Should You Take a Loan? A Guide for Kenyan Borrowers',       excerpt: 'Not all loans are equal, and not all situations call for borrowing. This guide helps you decide wisely.',           readTime: 5, date: 'Jan 22, 2025' },
  { id: 6, tag: 'Investment',  emoji: '🏠', bg: 'yellow', title: 'Land vs Stocks vs MMF: Where Should Kenyans Invest in 2025?',     excerpt: 'We break down Kenya\'s top investment options — land, stocks, and money market funds — comparing returns and risks.', readTime: 8, date: 'Jan 15, 2025' },
]
