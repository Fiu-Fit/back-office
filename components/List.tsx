import { Table, TableDetailButton, TableHead, TableItem } from './Table';

export default function List({
  headers,
  className,
  values,
  detailButtonHref,
  pagination = false
}: {
  headers: { [key: string]: string };
  className?: string;
  values: any[];
  detailButtonHref?: string;
  pagination?: boolean
}) {
  return (
    <Table className={className} pagination={pagination}>
      <TableHead
        detailButtonHref={!!detailButtonHref}
        headers={Object.keys(headers)}
      />
      <tbody className='divide-y'>
        {values.map(value => (
          <tr key={value[headers['ID']]}>
            {Object.values(headers).map(attribute => (
              <TableItem
                value={value[attribute]}
                key={`${headers['ID']}-${attribute}`}
              />
            ))}

            {detailButtonHref && (
              <TableDetailButton
                href={detailButtonHref}
                id={value[headers['ID']]}
              />
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
