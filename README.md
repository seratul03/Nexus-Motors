# Nexus Motors - Brand Showcase Website# Veyra Motors - Brand Showcase



A premium, editorial-style brand showcase website for Nexus Motors, an innovative electric vehicle manufacturer. Built with Flask, Tailwind CSS, and vanilla JavaScript.An immersive, editorial-style brand showcase for a fictional premium electric vehicle brand. This is **not an e-commerce site** - it's a magazine-like experience highlighting the brand's range, philosophy, and design language.



## 🚀 Overview## Tech Stack & Constraints



Nexus Motors is a modern electric mobility company focused on performance, sustainability, and cutting-edge technology. This website serves as the digital face of the brand, showcasing our vehicle lineup, engineering philosophy, and commitment to environmental responsibility.- **Backend:** Python 3.10+ with Flask

- **Templates:** Jinja2

## ✨ Features- **Styling:** Tailwind CSS via CDN only (no CLI, no build step)

- **JavaScript:** Vanilla JS (no React, no TypeScript, no frameworks)

- **Premium Design**: Dark-themed editorial layout with glassmorphic elements and smooth animations- **Images:** Placeholder images with varied aspect ratios

- **Brand Showcase**: Comprehensive vehicle model presentations with detailed specifications- **Design:** Dark-mode first with `prefers-color-scheme`, editorial layout

- **Technology Page**: Deep dive into powertrain, battery systems, software, and safety features- **No E-Commerce:** No prices, no cart, no checkout - pure brand storytelling

- **Sustainability**: Transparent reporting on environmental commitments and circular economy practices

- **About Page**: Company story, leadership team, and performance metrics## Project Structure

- **Responsive**: Fully optimized for desktop, tablet, and mobile devices

- **Accessible**: Built with semantic HTML and WCAG guidelines in mind```

- **Performance**: Optimized images, lazy loading, and efficient asset deliveryproduct-page/

├── public/

## 🛠️ Technology Stack│   └── index.html                 # Static entry with redirect

├── src/

### Backend│   ├── app.py                     # Flask application & routes

- **Flask 3.0.3** - Python web framework│   ├── templates/

- **Jinja2** - Template engine│   │   ├── base.html              # Base layout with header/footer

- **Python 3.10+** - Programming language│   │   ├── products.html          # Brand showcase page (main)

│   │   └── partial_model_teaser.html  # Model teaser card partial

### Frontend│   ├── static/

- **Tailwind CSS** - Utility-first CSS framework (via CDN)│   │   ├── css/

- **Vanilla JavaScript** - No dependencies, pure ES6+│   │   │   └── globals.css        # Custom utilities & masonry

- **HTML5** - Semantic markup│   │   └── js/

│   │       └── main.js            # Lightbox, scroll effects, helpers

### Data Management│   ├── data/

- **JSON** - Static data files for content management│   │   └── models.json            # Vehicle model catalog

  - `models.json` - Vehicle catalog│   └── types/

  - `technology.json` - Technical specifications│       └── product.py             # Model dataclass schema

  - `sustainability.json` - Environmental data├── requirements.txt

└── README.md

## 📁 Project Structure```



```## How to Run

product-page/product-page/

├── src/### Setup

│   ├── app.py                 # Flask application entry point

│   ├── data/                  # JSON data files```bash

│   │   ├── models.json# Navigate to project directory

│   │   ├── products.jsoncd product-page/product-page

│   │   ├── technology.json

│   │   └── sustainability.json# Create virtual environment

│   ├── static/                # Static assetspython -m venv .venv

│   │   ├── css/

│   │   │   └── globals.css    # Custom styles# Activate virtual environment

│   │   ├── js/# On Windows (PowerShell):

│   │   │   └── main.js        # JavaScript functionality.venv\Scripts\activate

│   │   ├── images/            # Vehicle images# On Windows (CMD):

│   │   ├── employee images/   # Team photos.venv\Scripts\activate.bat

│   │   └── technology img/    # Technology section images# On macOS/Linux:

│   └── templates/             # Jinja2 templatessource .venv/bin/activate

│       ├── base.html          # Base layout

│       ├── products.html      # Models showcase# Install dependencies

│       ├── about.html         # Company informationpip install -r requirements.txt

│       ├── technology.html    # Engineering details```

│       ├── sustainability.html # Environmental commitments

│       ├── 404.html           # Error page### Run Development Server

│       └── 500.html           # Server error page

├── .venv/                     # Virtual environment```bash

├── requirements.txt           # Python dependencies# Set Flask app (Windows PowerShell)

└── README.md                  # This file$env:FLASK_APP = "src/app.py"

```

# Set Flask app (Windows CMD)

## 🚦 Getting Startedset FLASK_APP=src/app.py



### Prerequisites# Set Flask app (macOS/Linux)

export FLASK_APP=src/app.py

- Python 3.10 or higher

- pip (Python package manager)# Run with debug mode

- Virtual environment (recommended)flask run --debug

```

### Installation

The application will be available at `http://127.0.0.1:5000`

1. **Clone the repository**

   ```bash## Routes

   cd product-page/product-page

   ```- `GET /` → redirects to `/products`

- `GET /products` → brand showcase page (single long-form editorial page)

2. **Create and activate virtual environment**- In-page anchors: `#model-<slug>` for smooth scrolling to model sections

   

   **Windows (PowerShell):**## Data Editing

   ```powershell

   python -m venv .venvEdit `src/data/models.json` to add or modify vehicle models. Each model requires:

   .venv\Scripts\Activate.ps1

   ``````json

   {

   **macOS/Linux:**  "slug": "veyra-arc",

   ```bash  "name": "Veyra Arc",

   python3 -m venv .venv  "tagline": "Pure electric gran turismo.",

   source .venv/bin/activate  "blurb": "Experience the future of electric mobility...",  

   ```  "hero_image": "https://picsum.photos/seed/arc/1600/900",

  "gallery": ["url1", "url2", "url3"],

3. **Install dependencies**  "specs": {

   ```bash    "powertrain": "Dual-motor AWD",

   pip install -r requirements.txt    "range_wltp": "600 km",

   ```    "acceleration_0_100": "3.2 s"

  },

### Running the Application  "pillars": ["Design", "Performance", "Sustainability"]

}

1. **Start the Flask development server**```

   ```bash

   python src/app.py**Note:** No prices, no inventory status - this is brand storytelling only.

   ```

   ## Features

   Or:

   ```bash### Design

   flask --app src/app.py run --debug- **Dark-mode first** with light mode support via `prefers-color-scheme`

   ```- **Editorial layout** with alternating image/text sections

- **Asymmetric masonry** for gallery and teasers

2. **Open your browser**- **Premium aesthetic** with rounded corners, soft shadows, and gradients

   ```- **Responsive** across all device sizes

   http://127.0.0.1:5000- **Reduced motion** support for accessibility

   ```

### Functionality

3. **Navigate the site**- **Image lightbox** for gallery (vanilla JS)

   - Home (About): `http://127.0.0.1:5000/`- **Smooth anchor scrolling** to model sections

   - Models: `http://127.0.0.1:5000/products`- **Scroll-reveal animations** with reduced-motion respect

   - Technology: `http://127.0.0.1:5000/technology`- **In-page navigation** for seamless storytelling

   - Sustainability: `http://127.0.0.1:5000/sustainability`- **No e-commerce** - pure brand experience

   - About: `http://127.0.0.1:5000/about`

### Accessibility

## 📄 Pages Overview- Semantic HTML5 elements

- ARIA labels and roles

### 1. About Page (Landing)- Keyboard navigation support

- Company overview and mission statement- Focus-visible outlines

- Key statistics (vehicles delivered, markets, satisfaction)- Sufficient color contrast

- Sales performance data- Alt text on images

- Leadership team with photos- Screen reader friendly

- Core values and company culture

- Call-to-action for careers## Performance Optimizations



### 2. Models/Products- Deferred JavaScript loading

- Hero section with brand introduction- Lazy loading images with `loading="lazy"`

- Vehicle catalog with specifications- Proper `width` and `height` attributes on images

- Individual model showcases- Minimal external dependencies

- Technology highlights- Product data cached at startup

- Design philosophy

- Sustainability features## Browser Support

- Press and awards

- Image galleryModern browsers with ES6+ support:

- Chrome/Edge 90+

### 3. Technology- Firefox 88+

- Engineering philosophy- Safari 14+

- Powertrain stack (Dual-Motor AWD, Silicon-Carbide Inverters, Active Torque Vectoring, Liquid Thermal Circuit)

- Battery & charging systems## License

- Software & OTA updates

- Safety & driver assistanceMIT

- Materials & NVH

- Innovation statistics## Notes



### 4. Sustainability  
- Environmental commitments- Replace placeholder images with actual vehicle photography

- Circular materials usage- This is a **brand showcase**, not an e-commerce site - intentionally no prices or cart

- Clean manufacturing practices- No external JavaScript libraries used (pure vanilla JS)

- Lifecycle thinking- Tailwind loaded via CDN (no compilation step required)

- Battery second life & recycling- Focus on editorial storytelling and brand immersion

- Ethical sourcing
- Roadmap & targets
- Transparency & accountability

## 🎨 Design Features

- **Dark Theme**: Slate-950 background with subtle gradients
- **Glassmorphism**: Frosted glass effect on cards and overlays
- **Rounded Corners**: Consistent 1.25rem (rounded-2xl) border radius
- **Soft Shadows**: Subtle depth with shadow-soft utility
- **Scroll Reveal**: Intersection Observer-based animations
- **Lightbox**: Full-screen image viewer for galleries
- **Smooth Scrolling**: Enhanced navigation experience
- **Reduced Motion**: Respects user accessibility preferences

## 🔧 Configuration

### Flask Settings
Located in `src/app.py`:
```python
app.config['SECRET_KEY'] = 'dev-secret-key-nexus-motors'
```

### Tailwind Configuration
Inline in `templates/base.html`:
```javascript
tailwind.config = {
  darkMode: 'media',
  theme: {
    extend: {
      colors: { brand: { DEFAULT: '#7c3aed' } },
      boxShadow: { soft: '0 10px 30px rgba(0,0,0,0.12)' },
      borderRadius: { '2xl': '1.25rem' }
    }
  }
}
```

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Content Management

Update content by editing JSON files in `src/data/`:

- **Models**: Edit `models.json` and `products.json`
- **Technology**: Edit `technology.json`
- **Sustainability**: Edit `sustainability.json`

Images can be added to respective folders in `src/static/`.

## 🚀 Deployment

### Production Considerations

1. **Use a production WSGI server** (Gunicorn, uWSGI)
   ```bash
   pip install gunicorn
   gunicorn -w 4 -b 0.0.0.0:8000 src.app:app
   ```

2. **Set environment variables**
   ```bash
   export FLASK_ENV=production
   export SECRET_KEY=your-secure-secret-key
   ```

3. **Enable HTTPS**
   - Use reverse proxy (Nginx, Apache)
   - Configure SSL certificates

4. **Optimize assets**
   - Compress images
   - Minify CSS/JS (if not using CDN)
   - Enable caching headers

## 🤝 Contributing

This is a brand showcase project for Nexus Motors. For internal contributions:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit for review

## 📜 License

© 2025 Nexus Motors. All rights reserved.

## 🏢 About Nexus Motors

Founded in 2022, Nexus Motors is an electric vehicle manufacturer committed to:
- **Performance**: Instant torque, advanced AWD systems, precision handling
- **Technology**: Silicon-carbide inverters, OTA updates, autonomous features
- **Sustainability**: Circular materials, clean manufacturing, ethical sourcing
- **Innovation**: 500+ patents, continuous R&D, future-proof design

### Our Mission
To accelerate the transition to sustainable transportation through innovative design, cutting-edge technology, and unwavering commitment to environmental responsibility.

### Contact
- Website: http://nexusmotors.com
- Email: info@nexusmotors.com
- Support: 24/7 connected vehicle support

---

**Built with ⚡ by the Nexus Motors Digital Team**


