import { Rating } from '@fiu-fit/common';
import { ratingCardFields } from './displayedFields.ts';
import api from '@/api/serverSideAxiosConfig';
import DetailCard from '@/components/DetailCard';
import DetailHeader from '@/components/DetailHeader';

async function getRating(id: string): Promise<Rating> {
  const { data: rating } = await api.get<Rating>(`/ratings/${id}`);

  return rating;
}

export default async function WorkoutDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const rating = await getRating(id);

  async function deleteRating(): Promise<Rating> {
    'use server';
    const { data: deletedRating } = await api.delete<Rating>(
      `/ratings/${id}`
    );

    return deletedRating;
  }

  return (
    <div className='w-full'>
      <div className='p-12 w-full gap-8'>
        <DetailHeader
          title={rating._id}
          onDelete={deleteRating}
          returnOnDelete
        />
        <DetailCard
            title='Detalles de la rutina'
            fields={ratingCardFields(rating)}
          />
      </div>
    </div>
  );
}
