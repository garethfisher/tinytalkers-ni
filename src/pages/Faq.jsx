import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta.js";

const FAQS = [
  {
    q: "How do I know if my child needs speech and language therapy?",
    a: "Trust your instincts. If your child is slower to talk than others their age, hard to understand, frustrated when communicating, or you’ve been told to “wait and see” but still feel worried, a consultation is worthwhile. Early support makes a real difference, and the first chat is free.",
  },
  {
    q: "Do I need a referral from a GP or health visitor?",
    a: "No. You can contact me directly and book an assessment yourself. With your permission I’m happy to liaise with your GP, health visitor or school.",
  },
  {
    q: "How long are appointments and how often will we meet?",
    a: "Assessments take about an hour. Therapy sessions are usually 45 minutes. Frequency depends on your child’s needs — commonly weekly or fortnightly blocks, followed by a review and a break to consolidate progress at home.",
  },
  {
    q: "Can my child have private therapy while also seeing an NHS therapist?",
    a: "Yes. Many families do both. With your consent I’ll coordinate with the NHS team so goals and strategies are consistent rather than conflicting.",
  },
  {
    q: "Where do sessions take place?",
    a: "At the clinic in Killadeas, County Fermanagh, or at your home, nursery or school. Travel outside the local area is possible and charged separately based on distance.",
  },
  {
    q: "How much does it cost?",
    a: "Fees vary by service and include administration and materials. Contact me for a current price list. The initial consultation is free.",
  },
  {
    q: "Can I claim on private health insurance?",
    a: "Some policies cover speech and language therapy, often needing a GP or paediatrician referral first. Check with your insurer, and I can provide invoices and reports to support a claim.",
  },
  {
    q: "Will you work with my child’s school or nursery?",
    a: "Yes. School and nursery visits, observations, staff advice and written programmes are all part of what I offer, so support carries over into your child’s everyday settings.",
  },
];

export default function Faq() {
  usePageMeta(
    "FAQs — Tiny Talkers NI",
    "Common questions about private children's speech and language therapy: when to seek help, session frequency, working alongside the NHS, costs and insurance."
  );

  return (
    <>
      <section className="hero wrap">
        <div>
          <p className="eyebrow">FAQs</p>
          <h1>Questions parents often ask</h1>
          <p className="lede">If your question isn&rsquo;t answered here, get in touch &mdash; I&rsquo;m always happy to talk things through.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="faq">
            {/* Native <details>/<summary> — the open/close animation is pure
                CSS (see .faq__panel in main.css), no JS needed. */}
            {FAQS.map(({ q, a }) => (
              <details key={q}>
                <summary>
                  {q}
                  <span className="faq__icon" aria-hidden="true"></span>
                </summary>
                <div className="faq__panel">
                  <div className="faq__panel-inner">
                    <p>{a}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap">
        <div className="cta-band">
          <h2>Still have a question?</h2>
          <p>Send it over and I&rsquo;ll get back to you.</p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link className="btn btn--primary" to="/contact">Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
