import { BadgeVariant } from '.';

export default function TableBadgeItem({ value, variant }: { value: string, variant: BadgeVariant }) {
  return (<td className='px-6 py-4'>
    <div className={`badge badge-${variant}`}>
    {value}
    </div>
  </td>);
}
