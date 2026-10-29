import Link from "next/link";
import CommitChart from "@/components/CommitChart";
import { profile, stats, caseStudies, moreWork, howIBuild } from "@/lib/content";

export default function Home() {
  return (
    <>
      <header className="hero">
        <div>
          <p className="label">{profile.title} · {profile.location}</p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.tagline}</p>
          <p className="lede">
            I have 14 years of experience in billing, payments and infrastructure. At Maxio I write the <strong>strategy, the specs and the code</strong> for metering, wallets, entitlements and pricing. I also built the <strong>Claude Code tooling</strong> that engineers there now use and extend.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href={profile.resumePdf}>Download my resume ↓</a>
            <Link className="btn" href="/about">About me</Link>
          </div>
        </div>
        <CommitChart />
      </header>

      <div className="stats" role="list">
        {stats.map((s) => (
          <div className="stat" role="listitem" key={s.label}>
            <b>{s.value}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      <section id="work">
        <div className="sec-head">
          <p className="label">Featured projects</p>
          <h2>Case studies</h2>
          <p>Three projects from Maxio, each taken from the problem to the shipped result.</p>
        </div>
        <div className="cards">
          {caseStudies.map((c) => (
            <Link className="card" href={`/work/${c.slug}`} key={c.slug}>
              <span className="tag">{c.tag}</span>
              <h3>{c.title}</h3>
              <p>{c.summary}</p>
              <span className="more">Read case study →</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="more">
        <div className="sec-head">
          <p className="label">More work</p>
          <h2>Across the product suite</h2>
        </div>
        <div className="grid">
          {moreWork.map((w) => (
            <div className="cell" key={w.title}>
              <span className="label">{w.label}</span>
              <h3>{w.title}</h3>
              <p>{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how">
        <div className="sec-head">
          <p className="label">How I build</p>
          <h2>Fast, with more review than usual</h2>
          <p>AI let me ship more, so I added more review around everything I shipped.</p>
        </div>
        <div className="how">
          {howIBuild.map((h) => (
            <div key={h.title}>
              <h3>{h.title}</h3>
              <p>{h.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
