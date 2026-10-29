export const profile = {
  name: "Phil Van Ingen",
  title: "Senior Technical Product Manager",
  tagline: "Product manager who ships: from product brief to merged pull request.",
  location: "San Antonio, TX",
  email: "philvaningen@gmail.com",
  linkedin: "https://www.linkedin.com/in/pvaninge/",
  github: "https://github.com/philvaningen",
  resumePdf: "/Phil-Van-Ingen-Resume.pdf",
};

export const stats = [
  { value: "14", label: "years in billing, payments and infrastructure" },
  { value: "110+", label: "production pull requests in the last 12 months" },
  { value: "1,800+", label: "commits at Maxio" },
  { value: "17", label: "straight months shipping code" },
  { value: "6", label: "apps covered by the AI setup tooling I built" },
];

// Commits per month from my git history at Maxio, all repositories and branches.
export const commitsByMonth = [
  ["2025-05", 1], ["2025-06", 13], ["2025-07", 57], ["2025-08", 120],
  ["2025-09", 48], ["2025-10", 98], ["2025-11", 61], ["2025-12", 20],
  ["2026-01", 24], ["2026-02", 67], ["2026-03", 203], ["2026-04", 127],
  ["2026-05", 78], ["2026-06", 136], ["2026-07", 115], ["2026-08", 239],
  ["2026-09", 150], ["2026-10", 248],
];

export const caseStudies = [
  {
    slug: "segment-level-custom-pricing",
    tag: "Metering · Pricing engine",
    title: "Segment-level custom pricing",
    summary:
      "Metered customers wanted to override usage rates on a single subscription, per pricing segment, without forking their catalog. I took it from the first deep-dive to production in about three months.",
    meta: [
      ["Period", "Jul – Oct 2026"],
      ["Role", "PM, planner and implementer"],
      ["Stack", "Rails · React · OpenAPI"],
      ["Shipped", "7 pull requests"],
    ],
    problem:
      "Maxio Metering prices usage by segment: a region, a tier, a customer attribute. Every subscription on a price point paid the same segment rates. Customers needed a way to give one account a different rate for one segment without cloning the whole price point and losing the link to the catalog.",
    approach:
      "I wrote the deep-dive myself: the product goals, the architecture, and the open questions for product and engineering to settle. Once those were resolved, I split the epic into five milestones that could each ship on their own, and wrote an implementation plan for each one. Every plan was reviewed like code before anyone wrote code against it. Then I built the pricing logic and validation myself.",
    milestones: [
      ["M1", "Segment rates resolved in pricing brackets and carried forward on renewal"],
      ["M2", "Public API docs and validation on every entry point"],
      ["M3", "Editing segment rates on the subscription's Custom Pricing page"],
      ["M4", "Effective-dated rate changes that split a billing period's usage"],
      ["M5", "A selector for when a rate change takes effect"],
    ],
    lines: [
      ["Deep-dive", "Wrote the product and architecture deep-dive, got the open product questions answered, and split the epic into five milestones that could each ship on their own."],
      ["Milestone plans", "Wrote a reviewed implementation plan for each milestone: file-level changes, stub tests, and a decision log recording which option was chosen and why."],
      ["Pricing engine", "Applied segment-level rates when pricing tiers are worked out, priced inherited segments in the site's currency, and split a period's usage when a rate changes mid-cycle."],
      ["Guardrails", "Validated segments on signup previews and price-point endpoints, rejected them on paths that couldn't support them yet, and logged an audit entry for every change made through the API."],
      ["Plan vs. reality", "Kept a changelog of every place the build differed from the plan, such as overrides taking effect immediately instead of at renewal, and fed it back into the plan."],
    ],
    result:
      "Per-subscription segment pricing for metered customers, from the first deep-dive to production in about three months, with a written record of every design decision.",
  },
  {
    slug: "wallets-and-prepaid",
    tag: "Wallets · Prepaid · Entitlements",
    title: "Wallets and prepaid usage",
    summary:
      "I scoped the Wallet & Entitlements MVP, a board-level bet on AI-platform billing. Then I built the prepaid rollover and expiration controls, fixed the issues found at launch, and wrote the public API docs.",
    meta: [
      ["Period", "Jun – Oct 2026"],
      ["Role", "PM and lead implementer"],
      ["Stack", "Rails · React · OpenAPI"],
      ["Largest PR", "59 commits"],
    ],
    problem:
      "AI platforms bill their customers through credits: buy up front, draw down as you go. Maxio needed to compete with Stripe, Orb and Metronome for that business. A full rebuild of prepaid billing would have taken too long.",
    approach:
      "I wrote the MVP brief and scoped it to wallets at the subscription level, so the foundation could ship quickly alongside the existing prepaid billing instead of replacing it. Then I worked through the prepaid gaps customers ran into: how units roll over, when they expire, and what the usage screens show.",
    lines: [
      ["MVP brief", "Scoped the Wallet & Entitlements MVP to subscription-level wallets, so the base for AI-platform billing could ship without replacing prepaid billing."],
      ["Custom rollover and expiration", "Let customers choose how prepaid units roll over and when they expire, with dates that stay correct through trials, billing-date changes and renewals. It went through a dozen review rounds, combining automated review, independent review and hands-on testing."],
      ["Expiration UX", "Replaced a confusing set of radio buttons with one date field and presets, and added a warning when someone picks a term-end expiration for a subscription that has no term."],
      ["Usage widget and ledger", "Fixed the display of fractional units, marked fully consumed purchases as Used, reported one-time and recurring draws separately, and made the purchase drawer default to the right type."],
      ["Wallet data", "Returned the applied rate and metering window on wallet transactions, used the site's time zone, counted grants that expire one after another, and added clear failure codes for purchases at signup."],
      ["Developer docs", "Wrote the public Wallets, Entitlements and Hybrid Pricing API docs on developers.maxio.com: wallet products, purchases, meter pairing and posted balances."],
    ],
    result:
      "A prepaid and wallets product that customers can configure and trust, launched quickly enough to compete for AI-platform billing, with docs that integrators can build against.",
  },
  {
    slug: "ai-workflows",
    tag: "AI tooling · Developer experience",
    title: "AI workflows for a product org",
    summary:
      "I treated the team's AI setup as a product. I packaged our conventions into Claude Code plugins and skills, so any engineer or PM gets the same rules, setup help and path from ticket to PR in one install.",
    meta: [
      ["Period", "Apr – Oct 2026"],
      ["Role", "Builder and maintainer"],
      ["Stack", "Claude Code · MCP · Bash · Python"],
      ["Merged PRs", "30+"],
    ],
    problem:
      "As more of Maxio started building with AI coding agents, each person's setup was different. Getting six apps running locally meant asking around, PR conventions depended on who opened the PR, and non-engineers who wanted to build had no clear place to start.",
    approach:
      "I built the internal plugins and skills as products in their own right, versioned and reviewed, with install steps a PM could follow. I used them myself every day, so each rough edge I hit became the next fix.",
    lines: [
      ["Team rules plugin", "An org-wide plugin that enforces draft-only PRs, meaningful branch names and complete PR descriptions in every Claude session."],
      ["Ticket to PR", "A skill that finds the ticket from the branch name, fills in the repository's PR template, and opens a draft PR from one sentence."],
      ["Local setup for 6 apps", "A plugin that walks engineers and PMs through running six products locally, syncing data between two of them, and diagnosing CI failures."],
      ["Functional-test skill", "Tests any Maxio feature end to end through the API and a real browser. It deploys the branch to a dev environment, refuses to run against production, and publishes a test report on the PR."],
      ["Always-current skills", "A skill that sends each request to the latest version of the right skill, pulled live from GitHub, so non-engineers never have to reinstall anything."],
      ["Planning pipeline", "Wrote deep-dives and milestone plans for four epics in an AI-assisted pipeline that runs from discovery to delivery. Agents research and draft, and people make the decisions in PR review."],
    ],
    result:
      "Setup that used to mean asking around became a single install. The plugins are now used and extended by Maxio's engineers.",
  },
];

export const moreWork = [
  { label: "~30 tickets · 2026", title: "Plans without products", body: "Rolled out Plan and Product terminology behind a feature flag across settings, signup pages, invoices, activity and validation copy, so a subscription no longer needs a product." },
  { label: "2025 – 2026", title: "Metering UI", body: "Redesigned the meter field modal, the event stream pages, the schema preview and the usage warnings, and fixed the formula meter editor." },
  { label: "2026", title: "Customizable dashboard", body: "Restyled the main dashboard and added widgets that customers can customize." },
  { label: "Discovery", title: "Customer feedback to releases", body: "Ran customer feedback sessions and turned the findings into prioritized work and fast-follow releases, including monthly accruals for metering and clearer zero-usage invoice lines." },
  { label: "Revenue product", title: "Revenue and contracts features", body: "Added international date formats to CSV imports, contract numbers on statements, notes carried over to renewals, partial months in pricing formulas, and new VAT countries." },
  { label: "Go-to-market", title: "Billing best practices", body: "Wrote a billing best-practices article that became a five-day marketing campaign." },
];

export const howIBuild = [
  { title: "Write it down first", body: "Bigger features start as a deep-dive and a plan for each milestone, reviewed like code, so each decision is made once and written down." },
  { title: "Parallel work, kept separate", body: "I run several Claude Code sessions, each in its own git worktree with one ticket, so independent fixes move forward at the same time without colliding." },
  { title: "Review before anyone else looks", body: "Automated AI review, a second review by a different model, and hands-on functional testing all happen before I ask a teammate to look." },
  { title: "Small PRs that are easy to read", body: "Each PR carries one change, a clear title, the ticket, and how I tested it." },
];

export const timeline = [
  { when: "2012 – 2015", title: "Rackspace · Technical Change Management Advisor", body: "Ran the weekly change advisory board and cut change-related incidents by 20% a year." },
  { when: "2015 – 2018", title: "Rackspace · Product Manager, Managed Hosting OS", body: "Owned the operating system portfolio for a hosting fleet with $1.3B in annual revenue, and created the company's first end-of-life process." },
  { when: "2019 – 2022", title: "Rackspace · Software Development Manager", body: "Led automation teams in the US and India. Cut monthly alert tickets from 4.3M to 195K and saved $1.5M." },
  { when: "2022 – 2024", title: "Affinipay · Software Engineering Manager", body: "Led the team behind a payments platform processing $20B a year, and moved 65K merchants to a new backend." },
  { when: "2025 – now", title: "Maxio · Product Manager & Builder", body: "Own metering, wallets, entitlements and pricing, from the brief to the code to the public docs." },
];

export function getCaseStudy(slug) {
  return caseStudies.find((c) => c.slug === slug);
}
