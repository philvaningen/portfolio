export default function ClaudeExample({ example }) {
  return (
    <figure className="claude-ex">
      <div className="turn">
        <span className="label">Me, in Claude</span>
        <p>{example.prompt}</p>
      </div>
      <ol className="calls" aria-label="Tool calls Claude makes">
        {example.calls.map(([tool, args, effect]) => (
          <li key={tool}>
            <code><b>{tool}</b> {args}</code>
            <span>→ {effect}</span>
          </li>
        ))}
      </ol>
      <div className="turn">
        <span className="label">Claude</span>
        <p>{example.reply}</p>
      </div>
      <figcaption className="note">Illustrative exchange using the demo data. The tool calls are the real ones behind the Changes screenshot above.</figcaption>
    </figure>
  );
}
