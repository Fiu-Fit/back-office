import { Badge, BadgeColor } from '..';

export default function TableBadgeItem({
  value,
  color,
}: {
  value: string;
  color: BadgeColor;
}) {
  return (
    <td className='px-6 py-4'>
      <Badge text={value} color={color} />
    </td>
  );
}
