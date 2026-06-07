export default function Hero() {
  return (
    <section id="hero">

      <div className="hero-bg-circle c1"></div>
      <div className="hero-bg-circle c2"></div>

      <div className="hero-text">

        <div className="hero-badge">
          Pre-orders open every week
        </div>

        <h1 className="hero-title">
          Baked with
          <br />
          <em>love</em> & millets.
        </h1>

        <p className="hero-subtitle">
          Small-batch, healthy cookies and cookie dough —
          made fresh in your society, delivered to your door.
        </p>

        <div className="hero-actions">

          <a
            href="https://wa.me/919999999999"
            className="btn-primary"
            target="_blank"
          >
            Order on WhatsApp
          </a>

          <a href="#products" className="btn-secondary">
            See the menu →
          </a>

        </div>

      </div>

      <div className="hero-visual">

        <svg
          className="cookie-spin"
          width="340"
          height="340"
          viewBox="0 0 340 340"
        >
          <circle
            cx="170"
            cy="170"
            r="130"
            fill="#D4956A"
          />

          <circle
            cx="170"
            cy="170"
            r="122"
            fill="#CB8A5A"
          />

          <ellipse
            cx="138"
            cy="138"
            rx="18"
            ry="14"
            fill="#5C2E0A"
          />

          <ellipse
            cx="200"
            cy="128"
            rx="15"
            ry="12"
            fill="#6B3510"
          />
        </svg>

      </div>

    </section>
  );
}