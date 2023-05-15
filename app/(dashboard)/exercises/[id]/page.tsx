import { Exercise, categoryToString } from '@fiu-fit/common';
import api from '@/api/serverSideAxiosConfig';
import DetailCard from '@/components/DetailCard';
import DetailHeader from '@/components/DetailHeader';

async function getExercise(id: string): Promise<Exercise> {
  const { data: exercise } = await api.get<Exercise>(`/exercises/${id}`);

  return exercise;
}

export default async function exerciseDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const exercise = await getExercise(id);

  async function deleteExercise(): Promise<Exercise> {
    'use server';
    const { data: deletedExercise } = await api.delete<Exercise>(
      `/exercises/${exercise._id}`
    );

    return deletedExercise;
  }

  return (
    <div className='w-full h-full'>
      <div className='p-12 w-full gap-8 '>
      <DetailHeader title={exercise.name} onDelete={deleteExercise}  afterDeleteRoute='/exercises'/>
        <DetailCard
          title='Detalles del ejercicio'
          fields={{
            ID:          exercise._id,
            Nombre:      exercise.name,
            Descripción: exercise.description,
            Categoria:   categoryToString(exercise.category),
          }}
        />
      </div>
    </div>
  );
}
