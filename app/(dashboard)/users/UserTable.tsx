import { User } from '@fiu-fit/common';
import * as displayedFields from './displayedFields';
import { blockColor, blockTranslation, federatedIdentityColor, federatedIdentityTranslation } from './statusUtils';
import {
  Table,
  TableBadgeItem,
  TableDetailButton,
  TableHead,
  TableItem,
} from '@/components/Table';

export default function UserTable({ data }: { data: User[] }) {
  return (
    <Table>
      <TableHead headers={Object.keys(displayedFields.userListHeaders)} detailButtonHref />
      <tbody className='divide-y'>
        {data.map((user: User) => (
          <tr key={user.id}>
            {Object.values(displayedFields.userListHeaders).map((attribute: keyof User) =>
              attribute !== 'blocked' && attribute !== 'federatedIdentity' ? (
                <TableItem
                  value={user[attribute] as string}
                  key={`${user.id}-${attribute}`}
                />
              ) : undefined
            )}
            <TableBadgeItem
              value={blockTranslation(user.blocked)}
              color={blockColor(user.blocked)}
              key={`${user.id}-blocked`}
            />
            <TableBadgeItem
              value={federatedIdentityTranslation(user.federatedIdentity)}
              color={federatedIdentityColor(user.federatedIdentity)}
              key={`${user.id}-federatedIdentity`}
            />
            <TableDetailButton
              href='/users'
              id={user.id as unknown as string}
            />
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
