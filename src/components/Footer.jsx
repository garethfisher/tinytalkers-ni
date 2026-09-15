import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <h2>Tiny Talkers NI</h2>
            <p>Independent speech and language therapy for children across Northern Ireland. Clinic based in County Fermanagh, with home, nursery and school visits available.</p>
          </div>
          <div>
            <h2>Contact</h2>
            <ul className="footer-nav">
              <li><a href="tel:+447779619417">07779 619417</a></li>
              <li><a href="mailto:info@tinytalkersni.com">info@tinytalkersni.com</a></li>
              <li>16 Valley Road, Rossclare,<br />Killadeas, Irvinestown,<br />Co. Fermanagh, BT94 1SF</li>
            </ul>
          </div>
          <div>
            <h2>Pages</h2>
            <ul className="footer-nav">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
              <li><Link to="/contact">Get in touch</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Tiny Talkers. Registered with the RCSLT and HCPC.</p>
        </div>
      </div>
    </footer>
  );
}
