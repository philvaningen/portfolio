import Link from "next/link";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import { caseStudies, getCaseStudy } from "@/lib/content";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const c = getCaseStudy(params.slug);
  if (!c) return {};
  return { title: c.title, description: c.summary };
}

export default function CaseStudyPage({ params }) {
  const c = getCaseStudy(params.slug);
  if (!c) notFound();
  const i = caseStudies.indexOf(c);
  const next = caseStudies[(i + 1) % caseStudies.length];

  return (
    <>
      <div className="page-head">
        <p className="label">Case study · {c.tag}</p>
        <h1>{c.title}</h1>
        <p className="lede">{c.summary}</p>
      </div>

      <section style={{ paddingTop: 32 }}>
        <div className="prose">
          <h2>The problem</h2>
          <p>{c.problem}</p>
          <h2>How I approached it</h2>
          <p>{c.approach}</p>
          <h2>What I delivered</h2>
        </div>
      </section>

      <div style={{ marginTop: 20 }}>
        <CaseStudy c={c} showHeader={false} />
      </div>

      <p>
        <Link className="back" href="/#work">← All case studies</Link>
        {"   "}·{"   "}
        <Link className="back" href={`/work/${next.slug}`}>Next: {next.title} →</Link>
      </p>
    </>
  );
}
