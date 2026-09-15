import { Link } from "react-router-dom";
import { asset } from "../lib/asset.js";
import { usePageMeta } from "../hooks/usePageMeta.js";
import { useInView } from "../hooks/useInView.js";

export default function Home() {
  usePageMeta(
    "Tiny Talkers NI — Children's speech & language therapy",
    "Independent speech and language therapy for pre-school and school-aged children across Northern Ireland. Free initial consultation with Shirley-Ann Dickey, paediatric speech and language therapist."
  );

  const [chatRef, chatInView] = useInView({ threshold: 0.4 });

  return (
    <>
      {/* Hero banner */}
      <section className="hero-banner">
        <div className="hero-banner__media">
          <img className="hero-banner__img" src={asset("brand_assets/banner.jpg")} alt="A toddler exploring a colourful picture book at home" loading="eager" />
        </div>
      </section>

      {/* Hero */}
      <section className="hero wrap">
        <div className="hero__grid">
          <div>
            <p className="eyebrow">Independent speech &amp; language therapy</p>
            <h1>Helping every child find their voice</h1>
            <p className="lede">Friendly, one-to-one speech and language therapy for pre-school and school-aged children across Northern Ireland — with a free initial chat to talk things through, no referral needed.</p>
            <div className="btn-row">
              <Link className="btn btn--primary" to="/contact">Book a free consultation</Link>
              <Link className="btn btn--secondary" to="/services">See how it works</Link>
            </div>
            <p className="hero__contact">Prefer to talk now? Call <a href="tel:+447779619417">07779 619417</a></p>
          </div>
          <div className={"chat" + (chatInView ? " is-visible" : "")} aria-hidden="true" ref={chatRef}>
            <span className="bubble bubble--them">Is my little one a late talker?</span>
            <span className="bubble bubble--me">Let&rsquo;s have a chat and find out together.</span>
            <span className="bubble bubble--them">Where do we start?</span>
            <span className="bubble bubble--me">A relaxed assessment, then a plan that fits your family.</span>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="section section--tint">
        <div className="wrap">
          <div className="section__head">
            <p className="eyebrow">Areas I can help with</p>
            <h2>Support for a wide range of communication needs</h2>
            <p>If something about your child&rsquo;s talking or understanding is worrying you, it&rsquo;s worth a conversation. I regularly work with children who have:</p>
          </div>
          <ul className="pill-list">
            <li>Late talking</li>
            <li>Language delay &amp; disorder</li>
            <li>Speech sound difficulties</li>
            <li>Verbal dyspraxia</li>
            <li>Developmental language disorder</li>
            <li>Global developmental delay</li>
            <li>Attention &amp; listening</li>
            <li>Autism-related communication</li>
            <li>Stammering</li>
          </ul>
        </div>
      </section>

      {/* Services preview */}
      <section className="section">
        <div className="wrap">
          <div className="section__head">
            <p className="eyebrow">Services</p>
            <h2>Ways we can work together</h2>
          </div>
          <div className="card-grid card-grid--3">
            <Link className="card card--link" to="/services">
              <span className="card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
              </span>
              <h3>Free initial consultation</h3>
              <p>A no-obligation phone or video chat to talk through your concerns and decide if an assessment would help.</p>
              <span className="card__more">Learn more &rarr;</span>
            </Link>
            <Link className="card card--link" to="/services">
              <span className="card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
              </span>
              <h3>Assessment &amp; report</h3>
              <p>A thorough, play-based assessment (around an hour) with clear feedback and an optional written diagnostic report.</p>
              <span className="card__more">Learn more &rarr;</span>
            </Link>
            <Link className="card card--link" to="/services">
              <span className="card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </span>
              <h3>Therapy sessions</h3>
              <p>Regular one-to-one or small-group sessions at home, at nursery or school — playful, practical and paced to suit your child.</p>
              <span className="card__more">Learn more &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section--tint">
        <div className="wrap">
          <div className="section__head">
            <p className="eyebrow">What to expect</p>
            <h2>Getting started is simple</h2>
          </div>
          <ol className="steps">
            <li className="step">
              <span className="step__num" aria-hidden="true"></span>
              <div>
                <h3>Get in touch</h3>
                <p>Call, email or use the contact form. We&rsquo;ll arrange a free consultation at a time that works for you.</p>
              </div>
            </li>
            <li className="step">
              <span className="step__num" aria-hidden="true"></span>
              <div>
                <h3>Assessment</h3>
                <p>A relaxed, play-based session to understand your child&rsquo;s strengths and where they need support.</p>
              </div>
            </li>
            <li className="step">
              <span className="step__num" aria-hidden="true"></span>
              <div>
                <h3>A plan that fits</h3>
                <p>You&rsquo;ll get clear feedback, realistic goals and a therapy plan built around your family&rsquo;s routine.</p>
              </div>
            </li>
            <li className="step">
              <span className="step__num" aria-hidden="true"></span>
              <div>
                <h3>Therapy &amp; review</h3>
                <p>Regular sessions with activities to try at home, plus review appointments to track progress together.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* About preview */}
      <section className="section">
        <div className="wrap">
          <div className="profile">
            <img className="profile__img" src={asset("brand_assets/img-sa.jpg")} alt="Shirley-Ann Dickey, paediatric speech and language therapist" width="600" height="600" />
            <div>
              <p className="eyebrow">About the therapist</p>
              <h2>Hi, I&rsquo;m Shirley-Ann Dickey</h2>
              <p>I&rsquo;m a paediatric speech and language therapist with NHS experience since 2004 and my own independent practice since 2012. I&rsquo;m registered with the Royal College of Speech and Language Therapists (MRCSLT) and HCPC, and trained in Makaton, the Hanen Programme, PECS and TEACCH.</p>
              <p>My approach is warm, practical and family-centred. I take time to get to know each child, work closely with parents and carers, and liaise with nurseries, schools and other professionals so everyone is pulling in the same direction.</p>
              <Link className="btn btn--secondary" to="/about">More about me</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="wrap" style={{ marginBottom: "var(--space-9)" }}>
        <div className="cta-band">
          <h2>Worried about your child&rsquo;s communication?</h2>
          <p>The first conversation is free and there&rsquo;s no referral needed. Let&rsquo;s talk it through.</p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link className="btn btn--primary" to="/contact">Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
