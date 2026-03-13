# Haggiga Organic - Agribusiness Website

A professional website for Haggiga Organic, an agribusiness company producing high-quality organic oils.

## Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Modern UI with organic green color scheme
- ✅ All sections: Home, About, Products, Process, Sustainability, Benefits, Contact
- ✅ Contact form with order inquiry
- ✅ Smooth navigation
- ✅ SEO optimized

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
haggiga-organic/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation
│   ├── Hero.tsx         # Hero section
│   ├── VisionMission.tsx
│   ├── About.tsx
│   ├── Products.tsx
│   ├── Process.tsx
│   ├── Sustainability.tsx
│   ├── Benefits.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── tailwind.config.ts   # Tailwind configuration
```

## Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: "#2d5016",    // Dark green
  secondary: "#6b8e23",  // Olive green
  accent: "#8fbc4b",     // Light green
}
```

### Contact Information

Update contact details in `components/Contact.tsx`:
- Phone number
- Email address
- Location

### Products

Modify products in `components/Products.tsx` to match your actual offerings.

## Deployment

Deploy easily on [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

## License

© 2026 Haggiga Organic. All rights reserved.
