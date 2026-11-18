const ROWS = [
  { y: 20, client: "Claude", sub: "any MCP client", entry: "/api/mcp", how: "MCP over HTTP", ai: true },
  { y: 110, client: "Scripts", sub: "other tools", entry: "/api/v1/*", how: "REST + API key" },
  { y: 200, client: "Browser", sub: "dashboard", entry: "Pages + actions", how: "Google sign-in" },
];
const H = 56;

function Box({ x, y, w, h, title, sub, strong }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill={strong ? "var(--accent-soft)" : "var(--surface)"} stroke={strong ? "var(--accent)" : "var(--rule)"} strokeWidth="1.5" />
      <text x={x + 12} y={y + 24} fontSize="14" fontWeight="600" fontFamily="var(--body)" fill="var(--ink)">{title}</text>
      {sub && <text x={x + 12} y={y + 42} fontSize="11.5" fontFamily="var(--mono)" fill="var(--muted)">{sub}</text>}
    </g>
  );
}

export default function ArchitectureDiagram() {
  return (
    <figure className="arch">
      <div className="arch-scroll">
        <svg viewBox="0 0 760 276" role="img" aria-labelledby="arch-title">
          <title id="arch-title">Claude, scripts and the browser each reach their own endpoint; all three endpoints call one service layer, the only code that touches the TiDB Cloud database.</title>
          <defs>
            <marker id="arr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0,0 L8,4 L0,8 z" fill="var(--muted)" />
            </marker>
          </defs>
          {ROWS.map((r) => (
            <g key={r.client}>
              <Box x={0} y={r.y} w={150} h={H} title={r.client} sub={r.sub} strong={r.ai} />
              <line x1={150} y1={r.y + H / 2} x2={196} y2={r.y + H / 2} stroke="var(--muted)" strokeWidth="1.5" markerEnd="url(#arr)" />
              <Box x={200} y={r.y} w={170} h={H} title={r.entry} sub={r.how} strong={r.ai} />
              <line x1={370} y1={r.y + H / 2} x2={426} y2={r.y + H / 2} stroke="var(--muted)" strokeWidth="1.5" markerEnd="url(#arr)" />
            </g>
          ))}
          <rect x={430} y={20} width={180} height={236} fill="var(--surface)" stroke="var(--ink)" strokeWidth="1.5" />
          <text x={444} y={46} fontSize="14" fontWeight="600" fontFamily="var(--body)" fill="var(--ink)">Service layer</text>
          <text x={444} y={64} fontSize="11.5" fontFamily="var(--mono)" fill="var(--muted)">lib/services.ts</text>
          {["follow-up rules", "status history", "activity log + source", "per-user scoping", "match by name"].map((t, i) => (
            <text key={t} x={444} y={100 + i * 26} fontSize="12.5" fontFamily="var(--body)" fill="var(--ink)">· {t}</text>
          ))}
          <line x1={610} y1={138} x2={646} y2={138} stroke="var(--muted)" strokeWidth="1.5" markerEnd="url(#arr)" />
          <Box x={650} y={110} w={110} h={H} title="TiDB Cloud" sub="serverless" />
        </svg>
      </div>
      <figcaption className="note">Three ways in, one set of rules. The service layer is the only code that touches the database, and every call carries the acting user and where the change came from.</figcaption>
    </figure>
  );
}
