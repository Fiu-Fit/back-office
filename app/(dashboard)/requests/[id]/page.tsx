import { Verification } from '@fiu-fit/common';
import Link from 'next/link';
import { statusColor, statusTranslation } from '../statusUtils';
import { verificationCardFields } from './displayedFields';
import api from '@/api/serverSideAxiosConfig';
import { Badge } from '@/components';
import DecisionHeader from '@/components/DecisionHeader';
import DetailCard from '@/components/DetailCard/DetailCard';
import { RequestStatus } from '@/interfaces/RequestStatus';

async function getVerificationRequest(id: number): Promise<Verification> {
  const { data: verificationRequest } = await api.get<Verification>(
    `/verifications/${id}`
  );

  return verificationRequest;
}

export default async function RequestDetail({
  params: { id },
}: {
  params: { id: number };
}) {
  const verificationRequest = await getVerificationRequest(id);
  const { status } = verificationRequest;

  const handleApprove = async (): Promise<Verification> => {
    'use server';
    const { data: updatedVerificationRequest } = await api.put(
      `/verifications/${id}`,
      { status: RequestStatus.Approved }
    );

    return updatedVerificationRequest;
  };

  const handleDecline = async (): Promise<Verification> => {
    'use server';
    const { data: updatedVerificationRequest } = await api.put(
      `/verifications/${id}`,
      { status: RequestStatus.Declined }
    );

    return updatedVerificationRequest;
  };

  return (
    <div className='w-full h-full'>
      <div className='p-12 w-full'>
        <DecisionHeader
          title='Solicitud de verificación'
          onAccept={
            status !== RequestStatus.Approved ? handleApprove : undefined
          }
          onDecline={
            status !== RequestStatus.Declined ? handleDecline : undefined
          }
        >
          <Badge color={statusColor(status)} text={statusTranslation(status)} />
        </DecisionHeader>
        <DetailCard
          className='w-1/3 mb-4'
          title='Detalle de usuario'
          fields={verificationCardFields(verificationRequest)}
        >
        <div className='py-5 text-sm leading-5 flex justify-between'>
          <a
            className='btn btn-primary'
            href={verificationRequest.resourceId}
            target='_blank'
          >
            Abrir recurso
          </a>
          <Link
            href={`/users/${verificationRequest.userId}`}
            className='btn btn-secondary'
          >
            Ver usuario
          </Link>
        </div>
        </DetailCard>
      </div>
    </div>
  );
}
