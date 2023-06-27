import { requestListHeaders } from './displayedFields';
import { VerificationDisplay } from './interfaces';
import { statusColor, statusTranslation } from './statusUtils';
import {
  Table,
  TableBadgeItem,
  TableDetailButton,
  TableHead,
  TableItem,
} from '@/components/Table';

export default function RequestTable({ data }: { data: VerificationDisplay[] }) {
  return (
    <Table>
      <TableHead headers={Object.keys(requestListHeaders)} detailButtonHref />
      <tbody className='divide-y'>
        {data.map((verificationRequest: VerificationDisplay) => (
          <tr key={verificationRequest.id}>
            {Object.values(requestListHeaders).map(
              (attribute: keyof VerificationDisplay) =>
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
