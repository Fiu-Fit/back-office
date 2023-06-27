import { Verification } from '@fiu-fit/common';
import { requestListHeaders } from './displayedFields';
import { statusColor, statusTranslation } from './statusUtils';
import {
  Table,
  TableBadgeItem,
  TableDetailButton,
  TableHead,
  TableItem,
} from '@/components/Table';

export default function RequestTable({ data }: { data: Verification[] }) {
  return (
    <Table>
      <TableHead headers={Object.keys(requestListHeaders)} detailButtonHref />
      <tbody className='divide-y'>
        {data.map((verificationRequest: Verification) => (
          <tr key={verificationRequest.id}>
            {Object.values(requestListHeaders).map(
              (attribute: keyof Verification) =>
                attribute !== 'status' ? (
                  <TableItem
                    value={verificationRequest[attribute] as string}
                    key={`${verificationRequest.id}-${attribute}`}
                  />
                ) : (
                  <TableBadgeItem
                    value={statusTranslation(verificationRequest.status)}
                    color={statusColor(verificationRequest.status)}
                    key={`${verificationRequest.id}-status`}
                  />
                )
            )}
            <TableDetailButton
              href='/requests'
              id={verificationRequest.id as unknown as string}
            />
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
