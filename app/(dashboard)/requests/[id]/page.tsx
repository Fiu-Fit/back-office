import { Verification } from '@fiu-fit/common';
import Image from 'next/image';
import Link from 'next/link';
import { RequestStatus } from '../interfaces/RequestStatus';
import { statusColor, statusTranslation } from '../statusUtils';
import { verificationCardFields } from './displayedFields';
import api from '@/api/serverSideAxiosConfig';
import { Badge } from '@/components';
import DecisionHeader from '@/components/DecisionHeader';
import DetailCard from '@/components/DetailCard';

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
        <div className='flex relative gap-8 max-h-[80vh]'>
          <Link href={verificationRequest.resourceId} className='w-2/3'>
            <Image
              src={verificationRequest.resourceId}
              alt='verification'
              className='object-cover w-full h-full'
              height={100}
              width={100}
            />
          </Link>
          <DetailCard
            className='w-1/3'
            title='Detalle de usuario'
            fields={verificationCardFields(verificationRequest)}
          />
        </div>
      </div>
    </div>
  );
}
