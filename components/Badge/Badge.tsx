import { BadgeColor, BadgeColorToClass } from '.';

export default function Badge({
  text,
  color,
}: {
  text: string;
  color: BadgeColor;
}) {
  const colorClass = BadgeColorToClass[color];

  return <span className={`badge ${colorClass} align-middle`}>{text}</span>;
}
