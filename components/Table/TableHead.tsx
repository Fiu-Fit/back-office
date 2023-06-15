export default function TableHead({
  headers,
  detailButtonHref,
}: {
  headers: string[];
  detailButtonHref?: boolean;
}) {
  return (
    <thead>
      <tr className='sticky top-0 z-10'>
        {headers.map(header => (
          <th
            key={header}
            className='px-6 py-3 text-left text-xs uppercase tracking-wider'
          >
            {header}
          </th>
        ))}
        {detailButtonHref && (
          <th className='px-10 py-3 text-right text-xs uppercase tracking-wider'>
            Acciones
          </th>
        )}
      </tr>
    </thead>
  );
}
