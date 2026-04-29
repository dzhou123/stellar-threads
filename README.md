# The Flag Authority

International flags and bunting strings, built for the **2026 FIFA World Cup** in Houston.

Stocking all 25 qualifying nations as 3×5 ft flags plus full 25-nation bunting strings (8×12 in and 12×18 in sizes). Built with Next.js 14, Tailwind CSS, and Stripe.

## Features

- Two product categories: **Nation Flags** (3×5 ft, all 25 World Cup 2026 qualifiers) and **Bunting Strings** (25 flags per string, two sizes)
- Real flag imagery via [flagcdn.com](https://flagcdn.com)
- Persistent cart powered by Zustand
- Stripe checkout
- Admin dashboard at `/admin`
- Mobile-responsive throughout

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Payments**: Stripe
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- A Stripe account (test mode is fine for development)

### Installation

```bash
npm install
```

### Environment variables

Create a `.env.local` file:

```env
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Hosting target: Daniel's personal domain (TBD — to be wired up before launch).

Recommended path is Vercel:

1. `vercel` (first-time setup) or push to a Git repo connected to Vercel.
2. Add the same env vars in the Vercel project settings.
3. Set `NEXT_PUBLIC_BASE_URL` to the production domain.
4. Once Daniel's domain is ready, attach it under Vercel → Domains.

## Product Data

Products live in [src/data/products.json](src/data/products.json) — edit the file directly to add, remove, or change products. The admin page at `/admin` previews the data and shows the schema.

### Schema

```json
{
  "id": "flag-xx",
  "name": "Country 3×5 ft Flag",
  "slug": "country-3x5-flag",
  "description": "Short product description",
  "longDescription": "Full product description",
  "price": 14.99,
  "compareAtPrice": 19.99,           // optional, shows sale price
  "category": "flags",                // "flags" | "buntings"
  "subcategory": "americas",          // optional region tag
  "images": ["https://flagcdn.com/w1280/xx.png"],
  "inStock": true,
  "featured": true,
  "tags": ["world cup 2026", "country", "3x5"],
  "createdAt": "2026-04-01T00:00:00Z",
  "updatedAt": "2026-04-28T00:00:00Z"
}
```

### Country code mapping (flagcdn)

USA `us`, Argentina `ar`, Australia `au`, Belgium `be`, Brazil `br`,
Canada `ca`, Colombia `co`, Ecuador `ec`, France `fr`, Germany `de`,
Iran `ir`, Japan `jp`, Jordan `jo`, Mexico `mx`, Netherlands `nl`,
Norway `no`, Paraguay `py`, Portugal `pt`, Qatar `qa`, Saudi Arabia `sa`,
Scotland `gb-sct`, South Korea `kr`, Switzerland `ch`, Uruguay `uy`,
Uzbekistan `uz`.

## Wholesale Sourcing

Source pricing from supplier (Karl):

| Product | 50–100 | 101–300 | 301–500 | 501–1000 |
|---|---|---|---|---|
| 8×12 in bunting (25 flags, 9.5 m) | $6.40 | $6.20 | $5.90 | $5.60 |
| 12×18 in bunting (25 flags, 13 m) | $12.50 | $12.00 | $11.00 | $10.00 |
| 3×5 ft individual flag (10–50 pcs) | $3.50 | — | — | — |

All flags: 110g storm-flag polyester, digital print.

## Project Structure

```
the-flag-authority/
├── src/
│   ├── app/
│   │   ├── api/checkout/    # Stripe checkout API route
│   │   ├── admin/            # Admin dashboard
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── products/         # Catalog & detail pages
│   │   ├── about/
│   │   └── contact/
│   ├── components/
│   ├── data/products.json    # Product catalog
│   ├── lib/
│   └── types/
└── public/
```

## Scripts

```bash
npm run dev      # Development
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Lint
```

## License

Private and proprietary.
