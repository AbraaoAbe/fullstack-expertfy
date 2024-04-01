'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';

import { useSelection } from '@/hooks/use-selection';

function noop(): void {
  // do nothing
}


export interface Expert {
  id: number;
  name: string;
  seniorityName: string;
  email: string;
  photo: string; //way for the image in backend
  team: string;
  competenceCount: number;
}

interface SearchTableProps {
  count?: number;
  page?: number;
  rows?: Expert[];
  rowsPerPage?: number;
}

export function SearchTable({
  count = 0,
  rows = [],
  page = 0,
  rowsPerPage = 0,
}: SearchTableProps): React.JSX.Element {
  const rowIds = React.useMemo(() => {
    return rows.map((customer) => customer.id);
  }, [rows]);


  return (
    <Card>
      <Box sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: '800px' }}>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Senioridade</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Nível de Conhecimento</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {

              return (
                <TableRow hover key={row.id} >
                  <TableCell>
                    <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
                      <Avatar src={row.photo} />
                      <Typography variant="subtitle2">{row.name}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>
                    {row.seniorityName}
                  </TableCell>
                  <TableCell>{row.team}</TableCell>
                  <TableCell>{row.competenceCount}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      <TablePagination
        component="div"
        count={count}
        onPageChange={noop}
        onRowsPerPageChange={noop}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[10, 25]}
      />
    </Card>
  );
}
