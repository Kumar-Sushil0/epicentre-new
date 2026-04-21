import { estateImageMap } from "../content";

export function CardGrid({
  cards,
  cols = "",
}: {
  cards: readonly (readonly [string, string])[];
  cols?: string;
}) {
  return (
    <div className={`cards ${cols}`}>
      {cards.map(([name, desc]) => (
        <div className="card" key={name}>
          <div className="card-img">
            {estateImageMap[name] ? (
              <img src={estateImageMap[name]} alt={name} />
            ) : (
              <div className="card-img-placeholder">{name}</div>
            )}
          </div>
          <div className="card-body">
            <div className="card-name">{name}</div>
            <div className="card-desc">{desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
