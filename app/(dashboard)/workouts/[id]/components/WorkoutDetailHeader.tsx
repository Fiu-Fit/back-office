'use client';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { Workout } from '../../interfaces/Workout';
import { GenericHeader } from '@/app/utils/GenericHeader';

export default function WorkoutDetailHeader({
  workout,
  deleteWorkout,
}: {
  workout: Workout;
  deleteWorkout: (id: number) => Promise<Workout>;
}) {
  const router = useRouter();

  const handleDelete = () => {
    Swal.fire({
      title:             'Estas seguro de eliminar esta rutina?',
      text:              'Esta accion no se puede revertir!',
      icon:              'warning',
      showCancelButton:  true,
      cancelButtonColor: '#d33',
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire('Eliminado!', 'La rutina fue eliminada.', 'success');
        deleteWorkout(workout.id);

        router.push('/users');
      }
    });
  };

  return (
    <GenericHeader>
      <div className='flex flex-row justify-between px-12 py-10'>
        <h1 className='text-2xl text-white text-bold'>
          {workout.name}
        </h1>
        <div className='flex flex-row justify-between gap-3'>
          <Button variant='contained' className='bg-blue-400'>
            <EditIcon />
            Editar
          </Button>
          <Button variant='contained' color='error' onClick={handleDelete}>
            <DeleteIcon />
            Eliminar
          </Button>
        </div>
      </div>
    </GenericHeader>
  );
}
