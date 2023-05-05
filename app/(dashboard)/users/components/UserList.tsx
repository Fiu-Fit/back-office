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
import { User } from '@/app/(dashboard)/users/interfaces/User';
import { Page } from '@/app/utils/interfaces';

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

export const UsersList = ({ page }: { page: Page<User> }) => {
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
              <StyledTableCell align='right'>Apellido</StyledTableCell>
              <StyledTableCell align='right'>E-mail</StyledTableCell>
              <StyledTableCell align='right'>Rol</StyledTableCell>
              <StyledTableCell align='right'>Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {page?.rows?.map(row => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component='th' scope='row'>
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align='right'>{row.firstName}</StyledTableCell>
                <StyledTableCell align='right'>{row.lastName}</StyledTableCell>
                <StyledTableCell align='right'>{row.email}</StyledTableCell>
                <StyledTableCell align='right'>
                  {row.role}
                </StyledTableCell>
                <StyledTableCell align='right'>
                  <Button href={`users/${row.id}`}>Detalle</Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
