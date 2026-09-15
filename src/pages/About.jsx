import { Link } from "react-router-dom";
import { asset } from "../lib/asset.js";
import { usePageMeta } from "../hooks/usePageMeta.js";

const CREDENTIALS = [
  "BSc (Hons) Speech and Language Therapy",
  "HCPC registered & RCSLT member (MRCSLT)",
  "ASLTIP member (MASLTIP)",
  "Makaton trained",
  "Hanen Programme (It Takes Two to Talk / More Than Words)",
  "PECS & TEACCH approaches",
  "Autism-specific assessment & intervention training",
];

export default function About() {
  usePageMeta(
    "About — Tiny Talkers NI",
    "Shirley-Ann Dickey is a paediatric speech and language therapist with NHS experience since 2004 and an independent practice since 2012, serving children across Northern Ireland."
  );

  return (
    <>
      <section className="hero wrap">
        <div className="hero__grid">
          <div>
            <p className="eyebrow">About</p>
            <h1>Hi, I&rsquo;m Shirley-Ann Dickey</h1>
            <p className="lede">Paediatric speech and language therapist &mdash; BSc (Hons), MRCSLT, MASLTIP. Working with children and families in the NHS since 2004, and running Tiny Talkers as an independent practice since 2012.</p>
            <div className="btn-row">
              <Link className="btn btn--primary" to="/contact">Book a free consultation</Link>
            </div>
          </div>
          <img className="profile__img" src={asset("brand_assets/img-sa.jpg")} alt="Shirley-Ann Dickey, paediatric speech and language therapist" width="600" height="600" />
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap prose-split">
          <div className="section__head">
            <p className="eyebrow">My approach</p>
            <h2>Warm, practical and built around your family</h2>
          </div>
          <div className="stack stack--prose">
            <p>Every child is different, so every plan is too. I take time to get to know your child through play, work out exactly where they need support, and set goals that are realistic and meaningful for your day-to-day life.</p>
            <p>Parents and carers are part of the team. I&rsquo;ll show you activities to weave into everyday routines &mdash; mealtimes, the school run, bath time &mdash; because that&rsquo;s where the real progress happens.</p>
            <p>Where it helps, I liaise with your child&rsquo;s nursery, school, health visitor or NHS therapist so support is joined up. You can have private therapy alongside NHS input.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="profile">
            <div>
              <p className="eyebrow">Qualifications &amp; training</p>
              <h2>Registered and specialist-trained</h2>
              <p>I&rsquo;m registered with the Health and Care Professions Council (HCPC) and a member of the Royal College of Speech and Language Therapists (MRCSLT) and the Association of Speech and Language Therapists in Independent Practice (ASLTIP).</p>
            </div>
            <ul className="cred-list">
              {CREDENTIALS.map((item) => (
                <li key={item}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="wrap cta-section">
        <div className="cta-band">
          <h2>Think I might be able to help?</h2>
          <p>Start with a free, no-obligation chat. No referral needed.</p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link className="btn btn--primary" to="/contact">Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
