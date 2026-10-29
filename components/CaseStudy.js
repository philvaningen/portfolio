export default function CaseStudy({ c, showHeader = true }) {
  return (
    <article className="case">
      <div className="case-top">
        <div>
          <span className="tag">{c.tag}</span>
          {showHeader && <h3>{c.title}</h3>}
          {showHeader && <p className="summary">{c.summary}</p>}
        </div>
        <dl className="meta">
          {c.meta.map(([k, v]) => (
            <div key={k} style={{ display: "contents" }}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
      {c.milestones && (
        <div className="milestones" aria-label="Milestone plan">
          {c.milestones.map(([id, text]) => (
            <div className="ms" key={id}>
              <span className="label">{id}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      )}
      <div className="lines">
        <table>
          <thead>
            <tr><th scope="col">Line item</th><th scope="col">Detail</th></tr>
          </thead>
          <tbody>
            {c.lines.map(([k, v]) => (
              <tr key={k}><td>{k}</td><td>{v}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="case-foot">
        <span><b>Result</b>{c.result}</span>
      </div>
    </article>
  );
}
