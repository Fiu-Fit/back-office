import { Workout, categoryToString } from '@fiu-fit/common';
import WorkoutCardRow from './WorkoutCardRow';

export default function WorkoutCard({ workout, className }: { workout: Workout, className?: string }) {
  return (
    <div className={`bg-zinc-900 shadow overflow-hidden rounded-md ${className}`}>
      <div className='py-5 px-6'>
        <h2 className='font-medium text-lg'>Detalle de la rutina</h2>
      </div>
      <div className='p-0 flex flex-col justify-around'>
        <WorkoutCardRow title='ID' text={workout._id} />
        <WorkoutCardRow title='Nombre' text={workout.name} />
        <WorkoutCardRow title='Descripcion' text={workout.description} />
        <WorkoutCardRow title='Duracion' text={workout.duration} />
        <WorkoutCardRow title='Difficultad' text={workout.difficulty} />
        <WorkoutCardRow title='Categoria' text={categoryToString(workout.category)} />
        {/* <WorkoutCardRow title='Actualizado' text={workout.updatedAt} /> */}
      </div>
    </div>
  );
}
// FALTA: Exercises y athletes
