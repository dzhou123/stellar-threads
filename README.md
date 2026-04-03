# Stellar Threads - E-Commerce Website

Premium American flag merchandise store built with Next.js, Tailwind CSS, and Stripe.

![Stellar Threads](https://via.placeholder.com/1200x400/0A1128/B22222?text=Stellar+Threads)

## Features

- **Responsive Design**: Fully mobile-responsive with Tailwind CSS
- **Product Catalog**: Category filtering (Flags, Apparel, Accessories)
- **Shopping Cart**: Persistent cart with quantity management (powered by Zustand)
- **Stripe Payments**: Secure checkout with Stripe integration
- **Admin Dashboard**: Product management interface at `/admin`
- **SEO Optimized**: Built-in Next.js metadata and OpenGraph support

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Payments**: Stripe
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Montserrat, Lato)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Stripe account (for payment processing)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/dzhou123/stellar-threads.git
cd stellar-threads
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# Stripe Keys (required for payments)
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

**How to get Stripe keys:**
1. Sign up at [Stripe](https://stripe.com)
2. Go to Developers > API keys
3. Copy your test keys (prefixed with `sk_test_` and `pk_test_`)

4. **Run the development server**

```bash
npm run dev
```

5. **Open the site**

Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment to Vercel

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dzhou123/stellar-threads)

### Option 2: Manual Deploy

1. **Install Vercel CLI**

```bash
npm install -g vercel
```

2. **Login to Vercel**

```bash
vercel login
```

3. **Deploy**

```bash
vercel
```

4. **Set environment variables in Vercel dashboard**

Go to your project settings > Environment Variables and add:
- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `NEXT_PUBLIC_BASE_URL` (set to your production URL)

5. **Deploy to production**

```bash
vercel --prod
```

## Managing Products

Products are stored in `src/data/products.json`. To add, edit, or remove products, simply modify this JSON file.

### Product Schema

```json
{
  "id": "unique-product-id",
  "name": "Product Name",
  "slug": "product-url-slug",
  "description": "Short product description (for listings)",
  "longDescription": "Full product description (for detail page)",
  "price": 29.99,
  "compareAtPrice": 39.99,  // Optional - shows sale price
  "category": "flags|apparel|accessories",
  "subcategory": "optional-subcategory",
  "images": ["https://image-url-1.jpg", "https://image-url-2.jpg"],
  "sizes": ["S", "M", "L", "XL"],  // Optional - for apparel
  "inStock": true,
  "featured": true,
  "tags": ["tag1", "tag2", "tag3"],
  "createdAt": "2024-01-01T00:00:00Z",
  "updatedAt": "2024-01-01T00:00:00Z"
}
```

### Adding Images

You can use any image hosting service. For placeholder images during development, we recommend:
- [Picsum Photos](https://picsum.photos) - Random placeholder images
- [Unsplash](https://unsplash.com) - High-quality stock photos

### Admin Dashboard

Access the admin dashboard at `/admin` to view product statistics and see the JSON schema documentation.

## Stripe Setup for Production

1. **Enable test mode** while developing (use test keys)
2. **Switch to live mode** when ready for production
3. **Configure Stripe Webhooks** (optional for this demo):
   - Go to Stripe Dashboard > Webhooks
   - Add endpoint: `https://your-domain.com/api/webhooks/stripe`
   - Select events: `checkout.session.completed`

## Project Structure

```
stellar-threads/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes
│   │   │   └── checkout/      # Stripe checkout API
│   │   ├── admin/             # Admin dashboard
│   │   ├── cart/              # Shopping cart page
│   │   ├── checkout/          # Checkout & success pages
│   │   ├── products/          # Product catalog & detail pages
│   │   ├── about/             # About page
│   │   └── contact/           # Contact page
│   ├── components/            # React components
│   │   ├── layout/           # Header, Footer, Layout
│   │   └── product/          # ProductCard, etc.
│   ├── data/
│   │   └── products.json     # Product data (edit this!)
│   ├── lib/
│   │   ├── cart.ts           # Cart state management
│   │   ├── products.ts       # Product utilities
│   │   ├── stripe.ts         # Stripe configuration
│   │   └── utils.ts          # Helper functions
│   ├── types/
│   │   └── index.ts           # TypeScript interfaces
│   └── app/
│       ├── globals.css       # Global styles
│       └── layout.tsx        # Root layout
├── public/                   # Static assets
├── package.json
├── tailwind.config.ts
└── next.config.mjs
```

## Available Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint
npm run lint
```

## Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  navy: {
    DEFAULT: "#0A1128",  // Primary color
    // ... other shades
  },
  crimson: {
    DEFAULT: "#B22222",  // Accent color
    // ... other shades
  },
  silver: {
    DEFAULT: "#C0C0C0",  // Secondary color
    // ... other shades
  },
}
```

### Typography

The site uses Montserrat for headings and Lato for body text. Change fonts in `src/app/layout.tsx`.

## License

This project is private and proprietary. All rights reserved.

## Support

For questions or issues, please contact support@stellarthreads.com
