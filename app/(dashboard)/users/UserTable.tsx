import * as displayedFields from './displayedFields';
import { UserDisplay } from './interfaces';
import { blockColor, blockTranslation, federatedIdentityColor, federatedIdentityTranslation, roleColor, roleTranslation, verificationColor } from './statusUtils';
import {
  Table,
  TableBadgeItem,
  TableDetailButton,
  TableHead,
  TableItem,
} from '@/components/Table';
import { Role } from '@/interfaces';

const isBadgeAttribute = (attribute: keyof UserDisplay) => {
  return attribute === 'blocked' || attribute === 'federatedIdentity' || attribute === 'role' || attribute === 'verification';
};

export default function UserTable({ data }: { data: UserDisplay[] }) {
  return (
    <Table className='max-h-[600px]'>
      <TableHead headers={Object.keys(displayedFields.userListHeaders)} detailButtonHref />
      <tbody className='divide-y'>
        {data.map((user: UserDisplay) => (
          <tr key={user.id}>
            {Object.values(displayedFields.userListHeaders).map((attribute: keyof UserDisplay) =>
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
            <TableBadgeItem
              color={verificationColor(user.verification)}
              key={`${user.id}-verification`}
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
