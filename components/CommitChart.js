import { commitsByMonth } from "@/lib/content";

const W = 400, H = 170, L = 28, R = 4, T = 8, B = 22, MAX = 250;
const LABELS = { "2025-06": "Jun ’25", "2026-01": "Jan ’26", "2026-10": "Oct ’26" };

export default function CommitChart() {
  const n = commitsByMonth.length;
  const step = (W - L - R) / n;
  const bw = step * 0.68;
  const y = (v) => T + (H - T - B) * (1 - v / MAX);
  const peak = Math.max(...commitsByMonth.map((d) => d[1]));

  return (
    <figure className="chart" aria-labelledby="chart-cap">
      <div className="cap">
        <span className="label" id="chart-cap">Commits per month at Maxio</span>
        <span className="label">peak {peak}</span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Bar chart of commits per month from May 2025 to October 2026, rising from 1 to a peak of 248 in October 2026">
        {[0, 100, 200].map((v) => (
          <g key={v}>
            <line x1={L} x2={W - R} y1={y(v)} y2={y(v)} stroke="var(--rule)" strokeWidth="1" />
            <text x={L - 6} y={y(v) + 3.5} textAnchor="end" fontSize="9.5" fontFamily="var(--mono)" fill="var(--muted)">{v}</text>
          </g>
        ))}
        {commitsByMonth.map(([month, count], i) => {
          const x = L + i * step + (step - bw) / 2;
          const top = y(count);
          const last = i === n - 1;
          const label = LABELS[month];
          return (
            <g key={month}>
              <rect className="bar" x={x.toFixed(1)} y={top.toFixed(1)} width={bw.toFixed(1)} height={Math.max(1, y(0) - top).toFixed(1)} fill={last ? "var(--mark)" : "var(--accent)"}>
                <title>{`${month}: ${count} commits`}</title>
              </rect>
              {label && (
                <text x={(last ? x + bw : x + bw / 2).toFixed(1)} y={H - 6} textAnchor={last ? "end" : "middle"} fontSize="9.5" fontFamily="var(--mono)" fill="var(--muted)">{label}</text>
              )}
            </g>
          );
        })}
      </svg>
      <figcaption className="note">From my git history across six repositories, all branches.</figcaption>
    </figure>
  );
}
