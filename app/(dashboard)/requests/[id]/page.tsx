import { Verification } from '@fiu-fit/common';
import Link from 'next/link';
import { statusColor, statusTranslation } from '../statusUtils';
import { verificationCardFields } from './displayedFields';
import api from '@/api/serverSideAxiosConfig';
import { Badge, DetailCard, VideoPlayer } from '@/components';
import DecisionHeader from '@/components/DecisionHeader';
import { RequestStatus } from '@/interfaces';

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
        <div className='grid grid-cols-3 gap-4'>
          <VideoPlayer
            src={verificationRequest.resourceId}
            type='video/mp4'
            className='col-span-2 w-full inline-block rounded max-h-[600px] bg-base-300'
          />
          <DetailCard
            title='Detalle de usuario'
            fields={verificationCardFields(verificationRequest)}
          >
            <div className='py-5 text-sm leading-5 flex justify-between'>
              <Link
                href={`/users/${verificationRequest.userId}`}
                className='btn btn-secondary w-full'
              >
                Ver usuario
              </Link>
            </div>
          </DetailCard>
        </div>
      </div>
    </div>
  );
}
