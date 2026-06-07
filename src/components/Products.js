export default function Products() {
  return (
    <section id="products">

      <p className="section-eyebrow fade-up">
        Our menu
      </p>

      <h2 className="section-title fade-up">
        Two things.
        <br />
        Made perfectly.
      </h2>

      <div className="products-grid">

        <div className="product-card fade-up">

          <div className="product-visual v1">
            <span className="product-tag healthy">
              Healthy
            </span>
          </div>

          <div className="product-info">

            <h3 className="product-name">
              Millet Peanut Butter Cookies
            </h3>

            <p className="product-desc">
              Guilt-free cookies made with bajra & jowar millet.
            </p>

            <div className="product-footer">

              <div className="product-price">
                ₹180 <span>/ 12 cookies</span>
              </div>

              <a
                href="https://wa.me/919999999999"
                className="order-btn"
              >
                Pre-order →
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}