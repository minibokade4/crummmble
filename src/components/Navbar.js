export default function Navbar() {
  return (
    <nav>
      <a href="#" className="nav-logo">
        Crumm<span>mble</span>
      </a>

      <ul className="nav-links">
        <li><a href="#products">Menu</a></li>
        <li><a href="#order">How to Order</a></li>
        <li><a href="#why">About</a></li>
        <li><a href="#reviews">Reviews</a></li>
      </ul>

      <a
        href="https://wa.me/919999999999"
        className="nav-cta"
        target="_blank"
      >
        Order on WhatsApp
      </a>
    </nav>
  );
}