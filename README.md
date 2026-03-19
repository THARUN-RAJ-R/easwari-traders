# Easwari Traders - Premium Mosquito Nets E-Commerce Website

A modern, premium e-commerce website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Premium UI Design** with glassmorphism effects and smooth animations
- **Fully Responsive** mobile-first design
- **Dark Mode** toggle with persistent state
- **Product Catalog** with search and filter functionality
- **Shopping Cart** with sliding sidebar and state management
- **Wishlist** functionality
- **Product Detail Pages** with image zoom and quantity selector
- **Contact Form** with Google Maps integration
- **Smooth Animations** using Framer Motion
- **Floating Elements** and gradient backgrounds

## 📦 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router DOM** - Client-side routing
- **Lucide React** - Icon library

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

The development server will start at `http://localhost:5173`

## 📁 Project Structure

```
easwari-traders/
├── src/
│   ├── components/         # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Cart.jsx
│   │   └── ProductCard.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── context/            # Context providers
│   │   ├── CartContext.jsx
│   │   └── DarkModeContext.jsx
│   ├── data/               # Data files
│   │   └── products.js
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🎨 Key Features Breakdown

### Hero Section
- Large heading with gradient text
- Floating mosquito net image with vertical animation
- Call-to-action buttons with hover effects
- Animated background with floating shapes

### Products Section
- Grid layout with responsive cards
- Hover effects (scale + shadow + image zoom)
- "Best Seller" badge on featured products
- Quick actions: view details, add to cart, wishlist

### Product Details Page
- Large product image with zoom on click
- Quantity selector with +/- buttons
- Add to cart functionality
- Related products section
- Feature list with checkmarks

### Shopping Cart
- Sliding sidebar from right
- Add/remove items
- Update quantities
- Show total price
- Smooth animations with Framer Motion

### Search & Filter
- Search bar to filter products by name/description
- Category filter buttons
- Results count display

### Dark Mode
- Toggle between light and dark themes
- Persistent state (saved to localStorage)
- Smooth transitions

### Animations
- Page load animations
- Scroll-triggered animations
- Hover effects on all interactive elements
- Floating elements in hero section
- Product card animations on scroll

## 📞 Contact Information

**Owner:** Nishant Raj R  
**Phone:** +91 733 968 7868  
**Email:** nishantrajr@gmail.com  
**Location:** Karur, Tamil Nadu

## 🌐 Pages

1. **Home** - Hero section, features, featured products
2. **Products** - All products with search and filter
3. **Product Details** - Individual product page with full details
4. **About** - Company story, mission, vision, values
5. **Contact** - Contact form, map, and contact information

## 🎯 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: { /* green shades */ },
  secondary: { /* blue shades */ }
}
```

### Products
Edit `src/data/products.js` to add/modify products

### Contact Info
Update contact information in:
- `src/pages/Contact.jsx`
- `src/components/Footer.jsx`

## 📝 License

This project is created for Easwari Traders.

## 🤝 Support

For any queries or support, please contact:
- Email: nishantrajr@gmail.com
- Phone: +91 733 968 7868
