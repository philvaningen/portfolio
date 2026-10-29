import Link from "next/link";
import { profile, timeline } from "@/lib/content";

export const metadata = { title: "About me", description: "Background, what I'm looking for, and how to reach Phil Van Ingen." };

export default function About() {
  return (
    <>
      <div className="page-head">
        <p className="label">About me</p>
        <h1>A product manager who builds</h1>
        <p className="lede">I&apos;ve spent 14 years in billing, payments and infrastructure, first in operations, then in product, then leading engineering teams. Today I do all three at once.</p>
      </div>

      <section style={{ paddingTop: 32 }}>
        <div className="prose">
          <p>I started at Rackspace running change management for a global hosting fleet. From there I moved into product management for the operating systems behind $1.3B in annual hosting revenue, then led automation teams in the US and India that saved $1.5M and cut alert tickets from 4.3 million a month to 195,000.</p>
          <p>At Affinipay I managed the engineering team behind a payments platform that processes $20B a year, and led the move of 65,000 merchants to a new backend.</p>
          <p>At Maxio I came back to product with a new set of tools. AI coding agents let a product manager carry an idea the whole way: customer discovery, the product brief, the implementation plan, the production code, the functional tests and the public API docs. I&apos;ve shipped code every month for 17 months, and I built the Claude Code plugins that help the rest of the team do the same.</p>

          <h2>What I&apos;m looking for</h2>
          <p>A senior technical product role where I own a product area end to end, from discovery to shipped code, especially in billing, payments, usage-based pricing, or developer and AI tooling. I&apos;m based in San Antonio and work remotely.</p>

          <h2>Outside work</h2>
          <p>I serve as Secretary on the Board of Directors of Good Hope 1910, where I ran the 2026 annual shareholder meeting and vote. I studied business administration at Trinity University in San Antonio.</p>
        </div>
      </section>

      <section id="log">
        <div className="sec-head">
          <p className="label">Career</p>
          <h2>14 years, one thread</h2>
          <p>Every role has involved getting complex billing, payments or infrastructure systems to run reliably.</p>
        </div>
        <ol className="log">
          {timeline.map((t) => (
            <li key={t.when}>
              <span className="when">{t.when}</span>
              <div>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <div className="two">
          <div className="panel">
            <h2>Get in touch</h2>
            <ul className="contact">
              <li><span className="label">Email</span> {profile.email}</li>
              <li><span className="label">LinkedIn</span> <a href={profile.linkedin}>linkedin.com/in/pvaninge</a></li>
              <li><span className="label">GitHub</span> <a href={profile.github}>github.com/philvaningen</a></li>
              <li><span className="label">Location</span> {profile.location} · Remote</li>
            </ul>
          </div>
          <div className="panel">
            <h2>Selected builds</h2>
            <ul className="contact">
              <li><a href="https://github.com/philvaningen/phils-skills/tree/main/job-search-copilot">job-search-copilot</a>: an open-source Claude skill</li>
              <li><a href="https://developers.maxio.com">Maxio developer docs</a>: the Wallets, Entitlements and Hybrid Pricing APIs</li>
              <li><Link href="/work/ai-workflows">AI workflows at Maxio</Link>: internal Claude Code plugins and skills</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
