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
    <div
      className={`rounded-box overflow-hidden flex flex-col border-base-content/5 border ${className}`}
    >
      <div className='h-full flex-shrink overflow-y-scroll'>
        <table className='w-full table table-zebra'>
          <thead>
            <tr className='sticky top-0 z-40'>
              {Object.keys(headers).map(header => (
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
          <tbody className='divide-y'>
            {values.map(value => (
              <tr key={value[headers['ID']]}>
                {Object.values(headers).map(attribute => (
                  <td
                    key={`${headers['ID']}-${attribute}`}
                    className='px-6 py-4'
                  >
                    {value[attribute]}
                  </td>
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
      <div className='block px-4 py-3 border-base-content/5 border-t bg-neutral'>
        <div className='flex justify-between'>
          <button className='btn btn-primary'>Anterior</button>
          <button className='btn btn-primary'>Siguiente</button>
        </div>
      </div>
    </div>
  );
}
