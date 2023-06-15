import { BadgeVariant, BadgeVariantToClass } from '.';

export default function TableBadgeItem({ value, variant }: { value: string, variant: BadgeVariant }) {
  const variantClass = BadgeVariantToClass[variant];

  return (<td className='px-6 py-4'>
    <div className={`badge ${variantClass}`}>
    {value}
    </div>
  </td>);
}
