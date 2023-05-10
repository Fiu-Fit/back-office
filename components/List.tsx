import Link from 'next/link';

export default function List({
  headers,
  className,
  values,
  detailButtonHref,
}: {
  headers: { [key: string]: string };
  className?: string;
  values: any[];
  detailButtonHref?: string;
}) {
  return (
    <div className={`rounded-md overflow-hidden flex flex-col ${className}`}>
      <div className='h-full flex-shrink dark:bg-gray-950 overflow-y-scroll'>
        <table className='w-full divide-y divide-gray-200 dark:divide-black'>
          <thead>
            <tr className='sticky top-0 bg-gray-50 dark:bg-zinc-900 z-40'>
              {Object.keys(headers).map(header => (
                <th
                  key={header}
                  className='px-6 py-3 text-left text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider'
                >
                  {header}
                </th>
              ))}
              {detailButtonHref && (
                <th className='px-10 py-3 text-right text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider'>
                  Acciones
                </th>
              )}
            </tr>
          </thead>
          <tbody className='bg-white dark:bg-zinc-950 divide-y divide-gray-700'>
            {values.map(value => (
              <tr key={value._id}>
                {Object.values(headers).map(attribute => (
                  <td className='px-6 py-4'> {value[attribute]} </td>
                ))}

                {detailButtonHref && (
                  <td className='px-6 py-4 flex justify-end'>
                    <Link
                      href={`${detailButtonHref}/${value[headers['ID']]}`}
                      className='btn'
                    >
                      Detalles
                    </Link>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='block bg-gray-50 dark:bg-zinc-900 px-4 py-3'>
        <div className='flex justify-between'>
          <button className='btn btn-primary'>Anterior</button>
          <button className='btn btn-primary'>Siguiente</button>
        </div>
      </div>
    </div>
  );
}
