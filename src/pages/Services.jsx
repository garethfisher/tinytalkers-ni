import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta.js";

const SERVICES = [
  {
    title: "1. Free initial consultation",
    body: "A relaxed phone or video call to hear your concerns, answer questions and agree whether a formal assessment is the right next step. No cost, no obligation.",
  },
  {
    title: "2. Initial assessment",
    body: "A play-based assessment lasting around an hour, looking at your child’s understanding, spoken language, speech sounds and interaction. You’ll get verbal feedback and clear recommendations on the day.",
  },
  {
    title: "3. Written diagnostic report",
    body: "An optional detailed report summarising assessment findings, diagnosis and recommendations — useful for schools, NHS services and funding applications. Arranged and paid for in advance.",
  },
  {
    title: "4. One-to-one therapy sessions",
    body: "Regular 45-minute sessions tailored to your child’s goals, with practical activities and resources to continue at home between visits.",
  },
  {
    title: "5. Small-group therapy",
    body: "Where it suits the child’s goals, sessions with one or two others — helpful for social communication, turn-taking and confidence.",
  },
  {
    title: "6. Review appointments",
    body: "Follow-up sessions to re-check progress, update goals and adjust the plan as your child develops.",
  },
  {
    title: "7. Nursery & school visits",
    body: "Observation and support in your child’s early-years setting or classroom, with advice for staff and joined-up planning.",
  },
  {
    title: "8. Training & home / school programmes",
    body: "Training for families, nurseries, schools and agencies, plus written home and school programmes so everyone supporting your child is using the same strategies.",
  },
];

export default function Services() {
  usePageMeta(
    "Services — Tiny Talkers NI",
    "Free consultations, play-based assessments, written reports, one-to-one and group therapy, nursery and school visits, staff training and home programmes for children in Northern Ireland."
  );

  return (
    <>
      <section className="hero wrap">
        <div>
          <p className="eyebrow">Services</p>
          <h1>Ways we can work together</h1>
          <p className="lede">Every child starts with a free consultation. From there, we choose the mix of assessment, therapy and support that suits your child and your family.</p>
        </div>
      </section>

      <section className="section section--tint services-list">
        <div className="wrap">
          <div className="card-grid">
            {SERVICES.map((s) => (
              <article className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>

          <div className="card" style={{ marginTop: "2rem", maxWidth: "52rem" }}>
            <h3>Fees</h3>
            <p>Fees are available on request and depend on the service. Assessment and session fees include administration time and materials. Travel to your home, nursery or school is calculated separately based on distance. Get in touch for a full price list.</p>
          </div>
        </div>
      </section>

      <section className="wrap">
        <div className="cta-band">
          <h2>Not sure which service you need?</h2>
          <p>That&rsquo;s exactly what the free consultation is for. We&rsquo;ll work it out together.</p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link className="btn btn--primary" to="/contact">Book a free consultation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
