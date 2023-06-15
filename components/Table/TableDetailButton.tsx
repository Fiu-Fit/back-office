import Link from 'next/link';

export default function TableDetailButton({
  href,
  id,
}: {
  href: string;
  id: string;
}) {
  return (
    <td className='px-6 py-4 flex justify-end'>
      <Link href={`${href}/${id}`} className='btn'>
        Detalles
      </Link>
    </td>
  );
}
