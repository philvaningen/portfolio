export default function Screenshots({ items }) {
  return (
    <div className="shots">
      {items.map((s) => (
        <figure key={s.src}>
          <a href={s.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size screenshot: ${s.caption}`}>
            <img src={s.src} alt={s.alt} width={s.width} height={s.height} loading="lazy" decoding="async" />
          </a>
          <figcaption>{s.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
