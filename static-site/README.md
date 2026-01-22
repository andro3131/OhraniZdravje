# 🌟 Ohrani Zdravje - Static Site

Moderna, hitra spletna stran za prodajo vodikovih izdelkov.

## ✨ Funkcionalnosti

- **Moderne UI komponente**: Glassmorphism, gradienti, animacije
- **Hitrost**: Static HTML - 10x hitrejše od WordPress
- **Responsive**: Optimizirano za desktop, tablet in mobilne naprave
- **SEO optimizirano**: Čisti HTML, meta tags, structured data
- **E-commerce ready**: Pripravljen za Snipcart integracijo

## 📁 Struktura projekta

```
static-site/
├── index.html              # Domača stran
├── css/
│   └── main.css           # Glavni stylesheet
├── js/
│   └── main.js            # JavaScript funkcionalnosti
├── images/                 # Lokalno shranjene slike
└── assets/                 # Ostali viri (fonti, ikone)
```

## 🚀 Kako testirati lokalno

### Možnost 1: Python SimpleHTTPServer
```bash
cd static-site
python3 -m http.server 8000
```
Odprete: `http://localhost:8000`

### Možnost 2: VS Code Live Server
1. Namestite "Live Server" extension
2. Desni klik na `index.html` → "Open with Live Server"

### Možnost 3: npm http-server
```bash
npx http-server static-site -p 8000
```

## 🎨 Dizajn Features

### Barvna paleta
- **Primarna**: #0EA5E9 (cyan - voda)
- **Sekundarna**: #8B5CF6 (vijoličasta - tehnologija)
- **Accent**: #10B981 (zelena - zdravje)

### Tipografija
- **Headings**: Manrope (700, 800)
- **Body**: Inter (300, 400, 600, 700)

### Komponente
- ✅ Glassmorphism CTA boksi
- ✅ Gradient hero sekcija
- ✅ 3D hover efekti
- ✅ Animirani gumbi
- ✅ Trust signals bar
- ✅ Newsletter box
- ✅ Scroll animacije (AOS)

## 🛒 E-commerce Integracija (Naslednji korak)

### Snipcart Setup
1. Registracija: https://snipcart.com
2. Pridobite API key
3. Dodajte v `index.html`:
```html
<script async src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"></script>
<link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css" />

<div hidden id="snipcart" data-api-key="YOUR_API_KEY"></div>
```

4. Dodajte izdelke:
```html
<button class="snipcart-add-item"
  data-item-id="vodikova-flaska"
  data-item-price="170.00"
  data-item-url="/izdelki/vodikova-flaska"
  data-item-description="Vodikova flaška 500ml"
  data-item-image="/images/vodikova-flaska.png"
  data-item-name="Vodikova Flaška">
  V košarico
</button>
```

### Stripe Payment Gateway
- Snipcart avtomatično integrira Stripe
- Nastavite v Snipcart dashboard

## 📊 Performance

### Optimizacije
- ✅ Lazy loading za slike
- ✅ Preconnect za Google Fonts
- ✅ Minifikacija CSS/JS (pred deploy)
- ✅ WebP slike
- ✅ Inline critical CSS (TODO)

### Pričakovani rezultati
- **PageSpeed Score**: 90-100
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Total Size**: < 500KB

## 🌐 Deployment

### Netlify (Priporočeno)
1. Povezite GitHub repo
2. Build settings:
   - Build command: (empty)
   - Publish directory: `static-site`
3. Deploy!

**Custom domain:**
```
ohranizdravje.si → Netlify
```

### Vercel
```bash
npm install -g vercel
cd static-site
vercel
```

### Cloudflare Pages
1. Povežite GitHub
2. Deploy iz `/static-site` folderja

## 📝 Naslednji koraki

### Faza 1: Trgovina (Prioriteta)
- [ ] Ustvariti single product strani
- [ ] Snipcart integracija
- [ ] Stripe payment setup
- [ ] Cart testing

### Faza 2: Ostale strani
- [ ] O nas stran
- [ ] Kontakt form (Formspree ali EmailJS)
- [ ] Novice/Blog
- [ ] Footer strani (GDPR, pogoji)

### Faza 3: Advanced
- [ ] Newsletter integracija (Mailchimp)
- [ ] Google Analytics
- [ ] Facebook Pixel
- [ ] Live chat (Tawk.to)
- [ ] Security headers (Netlify)

## 🔧 Orodja & Knjižnice

- **AOS**: Scroll animacije
- **Snipcart**: E-commerce
- **Inter & Manrope**: Fonti (Google Fonts)
- **Feather Icons**: SVG ikone (inline)

## 📞 Kontakt Info (v HTML-ju)

- **Naslov**: Vegova ulica 6, 8210 Trebnje
- **Telefon**: 051 203 016
- **Email**: info@ohranizdravje.si
- **Facebook**: https://www.facebook.com/profile.php?id=61570651654372
- **Instagram**: https://www.instagram.com/ohranizdravje/

## 📄 Licenca

© 2026 Ohrani Zdravje. Vse pravice pridržane.

---

**Ustvarjeno z ❤️ za boljše zdravje**
