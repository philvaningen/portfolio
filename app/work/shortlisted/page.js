import Link from "next/link";
import CaseStudy from "@/components/CaseStudy";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import Screenshots from "@/components/Screenshots";
import ClaudeExample from "@/components/ClaudeExample";
import { sideProject as c } from "@/lib/content";

export const metadata = { title: c.title, description: c.summary };

export default function ShortlistedPage() {
  return (
    <>
      <div className="page-head">
        <p className="label">Built on my own · {c.tag}</p>
        <h1>{c.title}</h1>
        <p className="lede">{c.summary}</p>
      </div>

      <section style={{ paddingTop: 32 }}>
        <div className="prose">
          <h2>The problem</h2>
          <p>{c.problem}</p>
          <h2>How I approached it</h2>
          <p>{c.approach}</p>
        </div>

        <div className="sp-block">
          <h2>How it fits together</h2>
          <ArchitectureDiagram />
        </div>

        <div className="sp-block">
          <h2>What it looks like</h2>
          <p className="label">Screenshots of the real app, running on made-up demo data</p>
          <Screenshots items={c.screenshots} />
        </div>

        <div className="sp-block">
          <h2>Claude in action</h2>
          <ClaudeExample example={c.example} />
        </div>

        <div className="prose" style={{ marginTop: 36 }}>
          <h2>What I delivered</h2>
        </div>
      </section>

      <div style={{ marginTop: 20 }}>
        <CaseStudy c={c} showHeader={false} />
      </div>

      <p>
        <Link className="back" href="/#built">← Back to home</Link>
      </p>
    </>
  );
}
