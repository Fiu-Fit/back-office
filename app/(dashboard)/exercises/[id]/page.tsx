import { Exercise, categoryToString } from '@fiu-fit/common';
import api from '@/api/serverSideAxiosConfig';
import DetailCard from '@/components/DetailCard';

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

  return (
    <div className='w-full h-full'>
      <div className='p-12 w-full gap-8 '>
      <h1 className='text-2xl font-medium mb-4'>{exercise.name}</h1>
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
