'use client';
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from '@mui/material';
import { Workout } from '@/app/(dashboard)/workouts/interfaces/Workout';
import { CategoryEnumToName } from '@/app/utils/interfaces';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color:           theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const WorkoutList = ({ workoutList }: { workoutList: Workout[] }) => {
  return (
    <div>
      <TableContainer
        component={Paper}
        className='border border-transparent rounded-md'
      >
        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align='right'>Nombre</StyledTableCell>
              <StyledTableCell align='right'>Descripción</StyledTableCell>
              <StyledTableCell align='right'>Duración</StyledTableCell>
              <StyledTableCell align='right'>Dificultad</StyledTableCell>
              <StyledTableCell align='right'>Categoría</StyledTableCell>
              <StyledTableCell align='right'>Ejercicios</StyledTableCell>
              <StyledTableCell align='right'>Atletas</StyledTableCell>
              <StyledTableCell align='right'>ID Autor</StyledTableCell>
              <StyledTableCell align='right'>Última act.</StyledTableCell>
              <StyledTableCell align='right'>Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workoutList?.map(row => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component='th' scope='row'>
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align='right'>{row.name}</StyledTableCell>
                <StyledTableCell align='right'>{row.description}</StyledTableCell>
                <StyledTableCell align='right'>{row.duration}</StyledTableCell>
                <StyledTableCell align='right'>{row.difficulty}</StyledTableCell>
                <StyledTableCell align='right'>{CategoryEnumToName[row.category]}</StyledTableCell>
                <StyledTableCell align='right'>{row.exercises.length}</StyledTableCell>
                <StyledTableCell align='right'>{row.athleteIds.length}</StyledTableCell>
                <StyledTableCell align='right'>{row.authorId}</StyledTableCell>
                <StyledTableCell align='right'>{row.updatedAt}</StyledTableCell>
                <StyledTableCell align='right'>
                  <Button href={`workouts/${row.id}`}>Detalle</Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
