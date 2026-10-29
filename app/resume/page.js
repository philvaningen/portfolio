import { profile } from "@/lib/content";

export const metadata = { title: "Resume", description: "Resume of Phil Van Ingen, Senior Technical Product Manager." };

const jobs = [
  {
    co: "Maxio (Remote)", when: "May 2025 – Present", role: "Product Manager & Builder, Event-Based Billing",
    summary: "Own metering, wallets, entitlements and pricing for a B2B SaaS billing and revenue platform, end to end: customer discovery → product brief → implementation plan → production code → functional testing → public API docs.",
    bullets: [
      "Discovery: Ran customer feedback sessions and turned the findings into prioritized Jira work and fast-follow releases, including Monthly Accruals for Metering and clearer zero-usage invoice lines.",
      "Product brief: Scoped the Wallet & Entitlements MVP to subscription-level wallets so the foundation for AI-platform billing could ship quickly without replacing existing prepaid billing.",
      "Implementation plans: Wrote engineering deep-dives and milestone plans, including segment-level custom pricing for Maxio Metering.",
      "Code: Shipped across Rails (Advanced Billing) and Django (Maxio Core), including prepaid rollover and expiration, wallet balances and expirations, entitlements, invoicing fixes, and a customizable dashboard.",
      "Functional testing: Tested each feature end to end through the API and the UI on a dev deployment before release, backed by regression tests; caught and fixed bugs in prepaid expiration overrides before customers saw them.",
      "API docs: Wrote the public Wallets, Entitlements, and Hybrid Pricing API documentation on developers.maxio.com.",
      "Go-to-market: Wrote a billing best-practices article that became a 5-day marketing campaign.",
    ],
  },
  {
    co: "Affinipay, Austin, TX (Remote)", when: "2022 – 2024", role: "Software Engineering Manager",
    summary: "Led the software engineering team overseeing seven critical applications on AWS for core payment processing in an event-based architecture. The primary application was a platform handling $20B in transactions annually.",
    bullets: [
      "Directed the migration of 65K merchants to a new payment processing backend, improving system scalability and supporting $20B in annual transactions.",
      "Delivered $870K in monthly savings through interchange rate optimization features.",
      "Hired 2 key full-time engineers and promoted two high performers.",
      "Led development of a new Usage application to replace the legacy system with zero downtime.",
    ],
  },
  {
    co: "Rackspace Technology, San Antonio, TX", when: "2019 – 2022", role: "Software Development Manager",
    summary: "Directed global automation and application engineering teams for a technical support organization across the US and India, reporting automation KPIs to C-level executives quarterly.",
    bullets: [
      "Aligned CRM, Support, Legal, Marketing, and Training organizations to integrate an AIOps engine, reducing operational costs by $1.5M.",
      "Reduced monthly alert ticket volume from 4.3M to 195K through alert automation and tooling optimizations.",
      "Saved 323,245 Racker hours annually by driving diagnostics and remediation automation across six support teams.",
      "Managed a portfolio of 11 production applications serving 1,200+ employees in Global Technical Support.",
    ],
  },
  {
    co: "Rackspace Technology, San Antonio, TX", when: "2015 – 2018", role: "Product Manager – Managed Hosting Operating Systems",
    summary: "Led cross-functional Linux and Windows engineering teams building and maintaining automated operating system fleets, and negotiated long-term vendor and licensing contracts.",
    bullets: [
      "Passed through $1.1M in annual Microsoft licensing costs, informing 6.5K customers of the change.",
      "Migrated 20K+ devices to a new patching infrastructure, saving $1.2M.",
      "Rolled out seven new operating systems over three years (Ubuntu 14.04, 16.04, 18.04; RHEL 7; CentOS 7; Oracle Linux 7; Windows 2016).",
      "Created the company's first product end-of-life process, reducing the legacy OS fleet by 15% annually; later adopted company-wide.",
    ],
  },
  {
    co: "Rackspace Technology, San Antonio, TX", when: "2012 – 2015", role: "Technical Change Management Advisor",
    summary: "Ran the weekly Change Advisory Board, presenting high-risk changes to Directors and VPs.",
    bullets: [
      "Reduced change-related incidents by 20% annually.",
      "Developed and trained 40+ change sponsors.",
      "Led ~40 root cause analyses a year using Fishbone and 5-Why methods.",
    ],
  },
];

export default function Resume() {
  return (
    <>
      <div className="page-head">
        <p className="label">Resume</p>
        <h1>{profile.title}</h1>
        <p className="lede">Product manager with 14 years in billing, payments, and infrastructure. At Maxio, I write the strategy, the specs, and the code, with 110+ production pull requests in the last 12 months. Previously led engineering teams and automation programs that saved $1.5M.</p>
        <div className="hero-actions">
          <a className="btn primary" href={profile.resumePdf}>Download PDF ↓</a>
          <a className="btn" href={profile.linkedin}>LinkedIn</a>
        </div>
      </div>

      <section style={{ paddingTop: 32 }}>
        <div className="resume">
          <div>
            <h2>Skills</h2>
            <div className="skills">
              <div><b>Product</b><span>Strategy, discovery, usage-based billing, API design</span></div>
              <div><b>Building</b><span>Ruby on Rails, Python/Django, Claude Code, MCP, GitHub Actions, functional and end-to-end testing</span></div>
              <div><b>Leadership</b><span>Agile/SAFe, cross-functional delivery, team development</span></div>
            </div>
          </div>

          <div>
            <h2>Experience</h2>
            {jobs.map((j) => (
              <div className="job" key={j.co + j.when}>
                <div className="job-head">
                  <h3>{j.role}</h3>
                  <span className="when">{j.when}</span>
                </div>
                <span className="co">{j.co}</span>
                <p>{j.summary}</p>
                <ul>{j.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              </div>
            ))}
          </div>

          <div>
            <h2>Education &amp; certifications</h2>
            <ul className="plain">
              <li>Bachelor of Arts in Business Administration, Trinity University, San Antonio, TX</li>
              <li>SAFe 5 Agilist · Prosci Change Management (ADKAR) · ITIL v3 Foundations</li>
              <li>MVP of the Rackspace Emerging Leadership Program, 2015</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
