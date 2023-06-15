import { User } from '@fiu-fit/common';
import { userListHeaders } from './displayedFields';
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
      <TableHead headers={Object.keys(userListHeaders)} detailButtonHref />
      <tbody className='divide-y'>
        {data.map((user: User) => (
          <tr key={user.id}>
            {Object.values(userListHeaders).map((attribute: keyof User) =>
              attribute !== 'blocked' && attribute !== 'federatedIdentity' ? (
                <TableItem
                  value={user[attribute] as string}
                  key={`${user.id}-${attribute}`}
                />
              ) : undefined
            )}
            <TableBadgeItem
              value={user.blocked ? 'Bloqueado' : 'Desbloqueado'}
              variant={user.blocked ? 'error' : 'success'}
              key={`${user.id}-blocked`}
            />
            <TableBadgeItem
              value={user.federatedIdentity ? 'Federado' : 'No federado'}
              variant={user.federatedIdentity ? 'secondary' : 'primary'}
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
