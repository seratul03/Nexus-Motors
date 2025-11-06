let currentLightboxImage = null;

function openLightbox(imageSrc, alt = '') {
  const overlay = document.getElementById('lightbox-overlay');
  const img = document.getElementById('lightbox-image');
  
  if (overlay && img) {
    img.src = imageSrc;
    img.alt = alt;
    currentLightboxImage = imageSrc;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const overlay = document.getElementById('lightbox-overlay');
  
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    currentLightboxImage = null;
  }
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href === '#') return;
      
      e.preventDefault();
      
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: prefersReducedMotion() ? 'auto' : 'smooth'
        });
      }
    });
  });
}

function initScrollReveal() {
  if (prefersReducedMotion()) return;
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
}

function initBackToTop() {
  const button = document.getElementById('back-to-top');
  
  if (!button) return;
  
  function checkScroll() {
    if (window.scrollY > 500) {
      button.classList.add('visible');
    } else {
      button.classList.remove('visible');
    }
  }
  
  window.addEventListener('scroll', throttle(checkScroll, 200));
  checkScroll();
  
  button.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth'
    });
  });
}

function initGallery() {
  const galleryImages = document.querySelectorAll('.gallery-image');
  
  galleryImages.forEach(img => {
    img.addEventListener('click', function() {
      openLightbox(this.src, this.alt);
    });
    
    img.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(this.src, this.alt);
      }
    });
  });
}

function initSearch() {
  const searchInput = document.getElementById('search-input');
  
  if (!searchInput) return;
  
  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const query = this.value.trim();
      
      if (query) {
        console.log('Search query:', query);
      }
    }
  });
}

function initMobileMenu() {
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (!menuButton || !mobileMenu) return;
  
  menuButton.addEventListener('click', function() {
    const isOpen = mobileMenu.classList.contains('active');
    
    if (isOpen) {
      mobileMenu.classList.remove('active');
      this.setAttribute('aria-expanded', 'false');
    } else {
      mobileMenu.classList.add('active');
      this.setAttribute('aria-expanded', 'true');
    }
  });
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('✨ Nexus Motors brand showcase initialized');
  
  initSmoothScroll();
  initScrollReveal();
  initBackToTop();
  initGallery();
  initSearch();
  initMobileMenu();
  
  const lightboxOverlay = document.getElementById('lightbox-overlay');
  const lightboxClose = document.getElementById('lightbox-close');
  
  if (lightboxOverlay) {
    lightboxOverlay.addEventListener('click', function(e) {
      if (e.target === this) {
        closeLightbox();
      }
    });
  }
  
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && currentLightboxImage) {
      closeLightbox();
    }
  });
  
  if (prefersReducedMotion()) {
    console.log('⚡ Reduced motion mode enabled');
  }
});

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

