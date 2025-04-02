# 🚀 Bildungsrebellen - Website Architecture

## 🛠️ Technologies
| Component  | Choice               | Notes                                        |
|------------|----------------------|----------------------------------------------|
| Framework  | Next.js 14           | App Router, RSC optimized                    |
| Styling    | Tailwind CSS         | With `shadcn/ui` components                  |
| Animations | GSAP + Framer Motion | GSAP for hero, Framer for micro-interactions |
| Comments   | Giscus               | GitHub-based auth                            |
| Auth       | Better-Auth          | Only if needed for comments                  |
| Database   | MongoDB + Prisma     | For merch mock data/blogs                    |
| Deployment | Vercel               | Automatic CI/CD                              |

## 🌐 Page Structure

### 🧭 Navigation Bar
- **Left**: Party logo + "Bildungsrebellen" in bold font
- **Right**:
  - `Über uns` (About)
  - `Vision` (Blogs)
  - `Shop` (Merch)
  - `Kontakt` 
- **Mobile**: Hamburger menu with same links

### 🦶 Footer
- Quick links (repeat nav)
- Legal disclaimer ("Satirisches Schulprojekt")
- Social media icons (mock)
- Copyright notice

## 🏠 Homepage (`/`)
### Hero Section
- GSAP-animated logo reveal
- Striking gradient background (party colors)
- Tagline: *"Schule ist die Zukunft – wir machen sie revolutionär"*
- Two CTA buttons:
  1. `Unsere Vision →` (links to blogs)
  2. `Shop jetzt entdecken` (fake merch)

### Key Features Grid
1. **Digitalisierung** (Tablet icon)  
   "Laptops für alle Schüler"
2. **Gerechtigkeit** (Scale icon)  
   "Gleiche Chancen bundesweit"
3. **Praxis** (Tool icon)  
   "Weniger Bücher, mehr Skills"

## 📖 About Page (`/about`)
- Party origin story (3 paragraphs max)
- "Meet the Rebels" - Avatar grid of fictional team
- Interactive timeline of "milestones" (GSAP scroll-triggered)

## 📚 Vision Page (`/vision`)
### Layout
1. **Header**: "Empfohlen: Unsere Kernreformen"
2. **Featured Blogs** (4 cards in grid)
3. **Search Bar** (Filters by tags/titles)
4. **All Blogs Grid** (Paginated)

### Blog Card Component
```jsx
<BlogCard>
  <Image src={cover} alt={title} />
  <TagBadge>Bildungspolitik</TagBadge>
  <h3>{title}</h3>
  <p>{excerpt.slice(0, 10)}...</p>
  <Button>Mehr lesen</Button>
</BlogCard>
```

### Blog Post Page (`/vision/[slug]`)
- Hero image (full-bleed)
- Table of Contents (floating sidebar)
- Content sections with:
    - Embedded graphs (Chart.js)
    - Image galleries
- Giscus comments at bottom
- Related posts carousel

## 🛍️ Merch Page (`/shop`)
### Layout
1. **Featured Products** (3 items, full-width carousel)
2. **Search/Filter Bar**
    - Price range
    - Category tags
3. **Product Grid**

### Product Card
```jsx
<ProductCard>
  <Image src={product.image} />
  <h3>{product.name}</h3>
  <p>{product.desc.slice(0, 15)}...</p>
  <span>€{product.price}</span>
  <Button>Zum Warenkorb</Button>
</ProductCard>
```

### Product Detail Page (`/shop/[id]`)
- Image gallery (3+ angles)
- Price + "Fake" stock counter ("Nur 2 left!")
- Description tabs:
    1. Details
    2. Größen (if apparel)
    3. Fake reviews
- CTA: `Jetzt kaufen` (modal: "Danke fürs Interesse!")

## ✉️ Contact Page
- Form with:
    - Name
    - Email
    - Message
- Fake "Submit" button (shows toast)
- Donation section:
    - QR code to joke PayPal
    - "Spenden Sie für längere Pausen!"

## 🎨 Design System
### Colors
| Role      | Hex              |
|-----------|------------------|
| Primary   | `#3B82F6` (Blue) |
| Secondary | `#10B981` (Teal) |
| Alert     | `#EF4444` (Red)  |

### Typography
- **Headings**: `Barlow Condensed` (Bold)
- **Body**: `Inter` (Clean readability)