import ControlHeader from './components/ControlHeader';
import { Category } from './interfaces/Category';
import { WorkoutList } from '@/app/(dashboard)/workouts/components/WorkoutList';
import { Workout } from '@/app/(dashboard)/workouts/interfaces/Workout';

async function getWorkouts(): Promise<Workout[]> {
  // const { data: workoutList } = await api.get<Workout[]>('/workouts');

  const workoutList: Workout[] = await new Promise(resolve => {
    setTimeout(() => {
      resolve([{
        id:   123,
        name: 'Crossfit',
        description:
          'Ideal para perder peso',
        authorId:   1,
        duration:   1,
        category:   Category.CARDIO,
        difficulty: 1,
        updatedAt:  new Date().toDateString(),
        athleteIds: [1, 2, 3],
        exercises:  [],
      }, 
      {
        id:   124,
        name: 'Brazos',
        description:
          'Solo apto para avanzados',
        authorId:   2,
        duration:   20,
        category:   Category.ARMS,
        difficulty: 3,
        updatedAt:  new Date().toDateString(),
        athleteIds: [1, 2, 3],
        exercises:  [],
      }]);
    }, 1000);
  });

  return workoutList;
}

export default async function WorkoutsPage() {
  const workoutList = await getWorkouts();

  return (
    <div className='m-12'>
      <ControlHeader />
      <WorkoutList workoutList={workoutList} />
    </div>
  );
}
