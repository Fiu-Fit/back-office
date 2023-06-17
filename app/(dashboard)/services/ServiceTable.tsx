import { serviceListHeaders } from './displayedFields';
import { statusColor, statusTranslation } from './statusUtils';
import {
  Table,
  TableBadgeItem,
  TableDetailButton,
  TableHead,
  TableItem,
} from '@/components/Table';
import { Service } from '@/interfaces/service';

export default function ServiceTable({ data }: { data: Service[] }) {
  return (
    <Table>
      <TableHead headers={Object.keys(serviceListHeaders)} detailButtonHref />
      <tbody className='divide-y'>
        {data.map((service: Service) => (
          <tr key={service.id}>
            {Object.values(serviceListHeaders).map((attribute: keyof Service) =>
              attribute === 'status' ? (
                <TableBadgeItem
                  value={statusTranslation(service.status)}
                  color={statusColor(service.status)}
                  key={`${service.id}-${attribute}`}
                />
              ) : (
                <TableItem
                  value={service[attribute] as string}
                  key={`${service.id}-${attribute}`}
                />
              )
            )}
            <TableDetailButton
              href='/services'
              id={service.id as unknown as string}
            />
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
