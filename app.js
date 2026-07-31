/* =========================================================
   NORTH GATE — SPA Router
   Loads service pages into #app, keeps header & footer.
   ========================================================= */

// ---- Route registry ----
const ROUTES = {
    "/": { page: "index", title: "North Gate | Industrial Services & Solutions" },
    "/energy-solutions": { file: "energy-solutions.html", title: "Energy Solutions | North Gate" },
    "/export-import": { file: "export-import.html", title: "Export & Import | North Gate" },
    "/general-contracting": { file: "general-contracting.html", title: "General Contracting | North Gate" },
    "/general-trading": { file: "general-trading.html", title: "General Trading | North Gate" },
    "/logistics": { file: "logistics-2.html", title: "Logistics | North Gate" },
    "/oil-gas": { file: "oil-gas-services.html", title: "Oil & Gas Services | North Gate" },
    "/about": { page: "about", title: "About Us | North Gate" },
    "/contact": { page: "contact", title: "Contact Us | North Gate" },
};

const app = document.getElementById("app");

/* ---------- HOME PAGE (index) ---------- */
function renderHome() {
    const services = [
        {
            route: "/energy-solutions",
            img: "img/lots-solar-panels-field-generating-electricity-1024x576.jpg",
            title: "Energy Solutions",
            desc: "Innovative and sustainable solar panel installation, inverters, and renewable energy services to power industries and communities.",
        },
        {
            route: "/export-import",
            img: "img/logistics-transportation-container-cargo-ship-cargo-plane-with-working-crane-bridge-shipyard-sunrise-logistic-import-export-transport-industry-background-ai-generative-1-1536x1024.jpg",
            title: "Export & Import",
            desc: "End-to-end global trade solutions — market access, customs clearance, freight forwarding, and supply chain integration.",
        },
        {
            route: "/general-contracting",
            img: "img/6181711-1536x1536.jpg",
            title: "General Contracting",
            desc: "Top-tier contracting services across residential, commercial, and industrial sectors with uncompromising quality.",
        },
        {
            route: "/general-trading",
            img: "img/logistics-transportation-container-cargo-ship-cargo-plane-with-working-crane-bridge-shipyard-sunrise-logistic-import-export-transport-industry-background-ai-generative-1-1536x1024.jpg",
            title: "General Trading",
            desc: "Globally-oriented trading solutions connecting clients to high-quality products and reliable services worldwide.",
        },
        {
            route: "/logistics",
            img: "img/logistics-transportation-container-cargo-ship-cargo-plane-with-working-crane-bridge-shipyard-sunrise-logistic-import-export-transport-industry-background-ai-generative-1-1536x1024.jpg",
            title: "Logistics",
            desc: "Transportation management, warehousing, supply chain, and last-mile delivery built for reliability and precision.",
        },
        {
            route: "/oil-gas",
            img: "img/pipes.jpg",
            title: "Oil & Gas Services",
            desc: "Exploration, production, logistics, and environmental solutions for the evolving energy sector.",
        },
    ];

    const cards = services
        .map(
            (s) => `
      <article class="service-card" data-route="${s.route}">
        <div class="service-card-img">
          <img src="${s.img}" alt="${s.title}" loading="lazy" />
        </div>
        <div class="service-card-body">
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
          <span class="service-card-link">Explore Service <i class="fas fa-arrow-right"></i></span>
        </div>
      </article>`
        )
        .join("");

    return `
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
      <div class="container">
        <div class="hero-content">
          <span class="hero-eyebrow">Diversified Industrial Group</span>
          <h1>Building Solutions for <span>Global Industries</span></h1>
          <p>
            From energy and oil &amp; gas to trading, logistics, and general
            contracting — North Gate delivers integrated, sustainable, and
            reliable services that power economies and communities worldwide.
          </p>
          <div class="hero-actions">
            <button class="btn btn-primary" data-route="/contact">Get a Quote</button>
            <button class="btn btn-outline" data-route="/energy-solutions">Our Services</button>
          </div>
        </div>
      </div>
      <div class="hero-scroll">Scroll to explore</div>
    </section>

    <!-- STATS -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat"><strong>7+</strong><span>Years Experience</span></div>
          <div class="stat"><strong>120+</strong><span>Projects Delivered</span></div>
          <div class="stat"><strong>98%</strong><span>Happy Clients</span></div>
          <div class="stat"><strong>15+</strong><span>Countries Served</span></div>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section class="services-section" id="services">
      <div class="container">
        <div class="section-head">
          <span class="section-eyebrow">What We Do</span>
          <h2>Our Core Services</h2>
          <p>
            A complete portfolio of industrial services designed to meet the
            evolving needs of global markets.
          </p>
        </div>
        <div class="services-grid">${cards}</div>
      </div>
    </section>

    <!-- ABOUT / CTA -->
    <section class="about-section" id="about">
      <div class="container">
        <div class="about-grid">
          <div class="about-text">
            <span class="section-eyebrow">Who We Are</span>
            <h2>Your Trusted Partner in Industrial Excellence</h2>
            <p>
              North Gate operates as a diversified industrial group with deep
              expertise across six core domains. We combine local knowledge with
              global reach to deliver solutions that are efficient, compliant,
              and built to last.
            </p>
            <ul class="about-list">
              <li>Comprehensive, end-to-end service delivery</li>
              <li>Commitment to safety, quality &amp; sustainability</li>
              <li>Global network of suppliers and partners</li>
              <li>Client-focused approach on every project</li>
            </ul>
          </div>
          <aside class="about-cta">
            <h3>Ready to start your project?</h3>
            <p>
              Talk to our team about how North Gate can support your next
              venture across energy, trade, logistics, or contracting.
            </p>
            <button class="btn btn-primary" data-route="/contact">Contact Us Today</button>
          </aside>
        </div>
      </div>
    </section>`;
}

/* ---------- ABOUT PAGE ---------- */
function renderAbout() {
    return `
    <section class="about-section">
      <div class="container">
        <div class="about-text" style="text-align:center; max-width:780px; margin:0 auto;">
          <span class="section-eyebrow">Who We Are</span>
          <h2 style="font-size:2.8rem;">About North Gate</h2>
          <p>
            North Gate is a diversified industrial services group delivering
            comprehensive solutions across six core domains — energy solutions,
            export &amp; import, general contracting, general trading, logistics,
            and oil &amp; gas services.
          </p>
        </div>
      </div>
    </section>

    <section class="services-section">
      <div class="container">
        <div class="section-head">
          <span class="section-eyebrow">Our Values</span>
          <h2>What Drives Us</h2>
        </div>
        <div class="services-grid">
          <article class="service-card">
            <div class="service-card-body">
              <h3><i class="fas fa-award" style="color:#b32024;"></i> Excellence</h3>
              <p>We never compromise on quality, delivering projects on time and within budget.</p>
            </div>
          </article>
          <article class="service-card">
            <div class="service-card-body">
              <h3><i class="fas fa-leaf" style="color:#b32024;"></i> Sustainability</h3>
              <p>Eco-friendly practices embedded across energy, logistics, and operations.</p>
            </div>
          </article>
          <article class="service-card">
            <div class="service-card-body">
              <h3><i class="fas fa-handshake" style="color:#b32024;"></i> Integrity</h3>
              <p>Transparent, client-focused partnerships built on trust and reliability.</p>
            </div>
          </article>
        </div>
      </div>
    </section>`;
}

/* ---------- CONTACT PAGE ---------- */
function renderContact() {
    return `
    <section class="about-section">
      <div class="container">
        <div class="section-head">
          <span class="section-eyebrow">Get in Touch</span>
          <h2>Contact North Gate</h2>
          <p>
            Have a project in mind? Reach out to our team and we&apos;ll get back
            to you within 24 hours.
          </p>
        </div>
        <div class="about-grid">
          <div class="about-text">
            <form id="contactForm" class="contact-form" style="display:grid; gap:1rem;">
              <div>
                <label style="font-weight:600; margin-bottom:.35rem; display:block;">Full Name</label>
                <input type="text" name="name" required placeholder="Your name" style="width:100%; padding:.85rem 1rem; border:1px solid #d1d5db; border-radius:8px; font-size:.95rem;" />
              </div>
              <div>
                <label style="font-weight:600; margin-bottom:.35rem; display:block;">Email</label>
                <input type="email" name="email" required placeholder="you@email.com" style="width:100%; padding:.85rem 1rem; border:1px solid #d1d5db; border-radius:8px; font-size:.95rem;" />
              </div>
              <div>
                <label style="font-weight:600; margin-bottom:.35rem; display:block;">Message</label>
                <textarea name="message" rows="5" required placeholder="Tell us about your project..." style="width:100%; padding:.85rem 1rem; border:1px solid #d1d5db; border-radius:8px; font-size:.95rem; resize:vertical;"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
          </div>
          <aside class="about-cta">
            <h3>Contact Details</h3>
            <p>
              <strong style="display:block; margin-bottom:.5rem;"><i class="fas fa-map-marker-alt"></i> Head Office</strong>
              North Gate Group, Industrial District, Lahore, Pakistan
            </p>
            <p>
              <strong style="display:block; margin-bottom:.5rem;"><i class="fas fa-phone"></i> Phone</strong>
              +92 300 000 0000
            </p>
            <p>
              <strong style="display:block; margin-bottom:.5rem;"><i class="fas fa-envelope"></i> Email</strong>
              info@northgate.com
            </p>
          </aside>
        </div>
      </div>
    </section>`;
}

/* ---------- Cleanup for previous page ---------- */
let _cleanupResize = null;

/* ---------- Load external HTML page into #app ---------- */
function loadExternalPage(file, title) {
  // Remove resize handler from previous page (if any)
  if (typeof _cleanupResize === "function") {
    _cleanupResize();
    _cleanupResize = null;
  }

  // Show loader
  app.innerHTML = `
    <div class="page-loader">
      <div class="spinner"></div>
      <p>Loading, please wait...</p>
    </div>`;

  // Build the integrated shell: breadcrumb bar + isolated iframe.
  // The iframe keeps each service page's own CSS & JS fully isolated,
  // so its animations (IntersectionObserver steps, counters) run natively
  // and no styles leak into the shared header/footer.
  const buildShell = () => {
    const label = (title || "Service").replace(/\s*[|]\s*North Gate.*$/i, "");
    app.innerHTML = `
      <div class="page-shell">
        <div class="page-breadcrumb">
          <div class="container">
            <a href="#" data-route="/"><i class="fas fa-home"></i> Home</a>
            <span class="sep">/</span>
            <span class="current">${label}</span>
          </div>
        </div>
        <div class="page-frame-wrap">
          <iframe
            class="page-frame"
            title="${title || label}"
            src="${file}"></iframe>
        </div>
      </div>`;
    attachRouteHandlers();
  };

  // Auto-resize the iframe to the height of its content
  const resizeFrame = (iframe) => {
    try {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      if (!doc) return;
      const body = doc.body;
      const html = doc.documentElement;
      const height = Math.max(
        body ? body.scrollHeight : 0,
        html ? html.scrollHeight : 0,
        400
      );
      iframe.style.height = height + "px";
    } catch (e) {
      /* ignore cross-origin / not-ready */
    }
  };

  // Wait a tick so the loader paints, then swap in the iframe
  setTimeout(() => {
    buildShell();
    const iframe = app.querySelector(".page-frame");
    if (!iframe) return;

    // On load + shortly after (images) + on window resize -> re-measure
    iframe.addEventListener("load", () => resizeFrame(iframe));
    const onWinResize = () => resizeFrame(iframe);
    window.addEventListener("resize", onWinResize);
    _cleanupResize = () => window.removeEventListener("resize", onWinResize);

    setTimeout(() => resizeFrame(iframe), 500);
    setTimeout(() => resizeFrame(iframe), 1200);
  }, 200);
}

/* ---------- Router ---------- */
async function router() {
    const path = window.location.hash.replace(/^#/, "") || "/";
    const route = ROUTES[path] || ROUTES["/"];

    document.title = route.title;

    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: "auto" });

    // Update active nav link
    document.querySelectorAll(".main-nav a[data-route]").forEach((a) => {
        a.classList.toggle("active", a.dataset.route === path);
    });

    // Close mobile nav
    document.getElementById("mainNav").classList.remove("open");

    if (route.file) {
        await loadExternalPage(route.file, route.title);
    } else if (route.page === "index") {
        app.innerHTML = renderHome();
    } else if (route.page === "about") {
        app.innerHTML = renderAbout();
    } else if (route.page === "contact") {
        app.innerHTML = renderContact();
    }

    attachRouteHandlers();
}

/* ---------- Attach click handlers to [data-route] ---------- */
function attachRouteHandlers() {
    document.querySelectorAll("[data-route]").forEach((el) => {
        el.removeEventListener("click", handleRouteClick);
        el.addEventListener("click", handleRouteClick);
    });
}

function handleRouteClick(e) {
    e.preventDefault();
    const route = this.getAttribute("data-route");
    if (window.location.hash === `#${route}`) {
        // Re-run route if same hash (allows re-click)
        router();
    } else {
        window.location.hash = route;
    }
}

/* ---------- Mobile nav toggle ---------- */
document.getElementById("navToggle").addEventListener("click", () => {
    document.getElementById("mainNav").classList.toggle("open");
});

/* ---------- Dropdown support on mobile ---------- */
document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
        e.preventDefault();
        toggle.parentElement.classList.toggle("open");
    });
});

/* ---------- Contact form (delegated) ---------- */
document.addEventListener("submit", (e) => {
    if (e.target && e.target.id === "contactForm") {
        e.preventDefault();
        const form = e.target;
        const btn = form.querySelector("button[type='submit']");
        btn.textContent = "Sending...";
        btn.disabled = true;
        setTimeout(() => {
            form.innerHTML = `
        <div style="text-align:center; padding:2rem; background:#f0fdf4; border:1px solid #86efac; border-radius:12px;">
          <h3 style="color:#16a34a; margin-bottom:.5rem;">✓ Message Sent!</h3>
          <p style="color:#4b5563;">Thank you for contacting North Gate. We'll reply within 24 hours.</p>
        </div>`;
        }, 1000);
    }
});

/* ---------- Init ---------- */
window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);

