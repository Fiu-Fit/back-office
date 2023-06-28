import { WorkoutDisplay, workoutListHeaders } from './displayedFields';
import { blockColor, blockTranslation } from './statusUtils';
import {
  Table,
  TableBadgeItem,
  TableDetailButton,
  TableHead,
  TableItem,
} from '@/components/Table';

export default function WorkoutTable({ data }: { data: WorkoutDisplay[] }) {
  return (
    <Table className='max-h-[600px]'>
      <TableHead headers={Object.keys(workoutListHeaders)} detailButtonHref />
      <tbody className='divide-y'>
        {data.map((workout: WorkoutDisplay) => (
          <tr key={workout._id}>
            {Object.values(workoutListHeaders).map(
              (attribute: keyof WorkoutDisplay) =>
                attribute !== 'isBlocked' ? (
                  <TableItem
                    value={workout[attribute] as string}
                    key={`${workout._id}-${attribute}`}
                  />
                ) : (
                  <TableBadgeItem
                    value={blockTranslation(workout.isBlocked)}
                    color={blockColor(workout.isBlocked)}
                    key={`${workout._id}-blocked`}
                  />
                )
            )}
            <TableDetailButton
              href='/workouts'
              id={workout._id as unknown as string}
            />
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
