import { User } from '@fiu-fit/common';
import * as displayedFields from './displayedFields';
import { blockColor, blockTranslation, federatedIdentityColor, federatedIdentityTranslation, roleColor, roleTranslation } from './statusUtils';
import {
  Table,
  TableBadgeItem,
  TableDetailButton,
  TableHead,
  TableItem,
} from '@/components/Table';
import { Role } from '@/interfaces';

const isBadgeAttribute = (attribute: keyof User) => {
  return attribute === 'blocked' || attribute === 'federatedIdentity' || attribute === 'role';
};

export default function UserTable({ data }: { data: User[] }) {
  return (
    <Table>
      <TableHead headers={Object.keys(displayedFields.userListHeaders)} detailButtonHref />
      <tbody className='divide-y'>
        {data.map((user: User) => (
          <tr key={user.id}>
            {Object.values(displayedFields.userListHeaders).map((attribute: keyof User) =>
              !isBadgeAttribute(attribute) ? (
                <TableItem
                  value={user[attribute] as string}
                  key={`${user.id}-${attribute}`}
                />
              ) : undefined
            )}
            <TableBadgeItem
              value={roleTranslation(user.role as Role)}
              color={roleColor(user.role as Role)}
              key={`${user.id}-role`}
            />
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
