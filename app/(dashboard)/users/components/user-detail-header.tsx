'use client';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { User } from '@/app/(dashboard)/users/interfaces/User';
import { GenericHeader } from '@/app/utils/GenericHeader';

export default function UserDetailHeader({
  user,
  deleteUser,
}: {
  user: User;
  deleteUser: (id: number) => Promise<User>;
}) {
  const router = useRouter();

  const handleDelete = () => {
    Swal.fire({
      title:              'Estas seguro de eliminar este usuario?',
      text:               'Esta accion no se puede revertir!',
      icon:               'warning',
      showCancelButton:   true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor:  '#d33',
      confirmButtonText:  'Eliminar',
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire('Eliminado!', 'El usuario fue eliminado.', 'success');
        deleteUser(user.id);

        router.push('/users');
      }
    });
  };

  return (
    <GenericHeader>
      <div className='flex flex-row justify-between px-12 py-10'>
        <h1 className='text-2xl text-white text-bold'>
          {user.firstName} {user.lastName}
        </h1>
        <div className='flex flex-row justify-between gap-3'>
          <Button variant='contained' style={{ backgroundColor: '#90caf9' }}>
            <EditIcon />
            Editar
          </Button>
          <Button
            variant='contained'
            color='warning'
            style={{ backgroundColor: 'red' }}
            onClick={handleDelete}
          >
            <DeleteIcon />
            Eliminar
          </Button>
        </div>
      </div>
    </GenericHeader>
  );
}
