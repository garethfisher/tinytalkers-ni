import { asset } from "../lib/asset.js";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function Contact() {
  usePageMeta(
    "Get in touch — Tiny Talkers NI",
    "Contact Tiny Talkers NI for a free initial consultation. Phone 07779 619417, email info@tinytalkersni.com, or use the enquiry form. Clinic in Killadeas, County Fermanagh."
  );

  return (
    <>
      <section className="hero wrap">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h1>Let&rsquo;s talk about your child</h1>
          <p className="lede">The first consultation is free and there&rsquo;s no referral needed. Call or email and I&rsquo;ll get back to you within two working days.</p>
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap">
          <div className="contact-grid">
            <div>
              <h2>Contact details</h2>
              <ul className="contact-list">
                <li>
                  <span className="label">Phone</span>
                  <a href="tel:+447779619417">07779 619417</a>
                </li>
                <li>
                  <span className="label">Email</span>
                  <a href="mailto:info@tinytalkersni.com">info@tinytalkersni.com</a>
                </li>
                <li>
                  <span className="label">Clinic address</span>
                  16 Valley Road, Rossclare, Killadeas,<br />Irvinestown, County Fermanagh, BT94 1SF
                </li>
                <li>
                  <span className="label">Area covered</span>
                  Fermanagh and the wider Northern Ireland area, including home, nursery and school visits.
                </li>
              </ul>
            </div>

            <div className="directions">
              <h2>Finding the clinic</h2>
              <figure className="office-photo">
                <img src={asset("brand_assets/img-office.jpg")} alt="The children's therapy room at Tiny Talkers NI, with a play table, storage and toys" width="1200" height="783" loading="lazy" />
                <figcaption>Inside the therapy room &mdash; a calm, playful space for sessions.</figcaption>
              </figure>
              <div>
                <h3>From Enniskillen</h3>
                <p>Take the A32 towards Irvinestown / Kesh. After roughly 6 miles, turn right onto Valley Road at Killadeas. The clinic is on the right at number 16; parking is available on site.</p>
              </div>
              <div>
                <h3>From Kesh</h3>
                <p>Follow the B82 south towards Enniskillen through Rossclare. Turn left onto Valley Road at Killadeas and continue to number 16 on the right.</p>
              </div>
            </div>
          </div>
        </div>

        <figure className="map">
          <iframe
            src="https://maps.google.com/maps?q=16%20Valley%20Road%2C%20Killadeas%2C%20Irvinestown%2C%20BT94%201SF&z=13&output=embed"
            title="Map showing Tiny Talkers NI clinic at 16 Valley Road, Killadeas, County Fermanagh"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <a className="map__link wrap" href="https://www.google.com/maps/search/?api=1&query=16+Valley+Road+Killadeas+Irvinestown+BT94+1SF" target="_blank" rel="noopener">
            Open in Google Maps &rarr;
          </a>
        </figure>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="email-cta">
            <span className="icon-badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
            </span>
            <h2>Email me directly</h2>
            <p className="lede">The quickest way to reach me. I read every message myself and reply within two working days.</p>
            <a className="btn btn--primary" href="mailto:info@tinytalkersni.com">info@tinytalkersni.com</a>
          </div>
        </div>
      </section>
    </>
  );
}
