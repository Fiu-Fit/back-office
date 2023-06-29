import Link from 'next/link';
import { UserDisplay } from '../interfaces';
import { verificationColor, verificationTranslation } from '../statusUtils';
import { Badge, DetailCardRow } from '@/components';

export default function VerificationInfoRow({
    user
}: {
    user: UserDisplay;
}) {
  return user.verification ? (
    <DetailCardRow
      header='Verificado'
      value={
        <Link href={`/requests/${user.verification.id}`} className='inline-block hover:scale-110 active:scale-90 transition-all duration-200'>
          <Badge
            color={verificationColor(user.verification)}
            text={verificationTranslation(user.verification)}
          />
        </Link>
      }
    />
  ) : (
    <DetailCardRow
      header='Verificado'
      value={
        <Badge
          color={verificationColor(user.verification)}
          text={verificationTranslation(user.verification)}
        />
      }
    />
  );
}
