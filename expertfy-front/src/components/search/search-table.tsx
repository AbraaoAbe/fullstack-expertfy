'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import type { User } from '@/types/user';
import { ColorScore } from '@/types/colorScore';
import { red, yellow, green } from '@mui/material/colors';
import ScoreTooltip from './tooltip-score';


function noop(): void {
  // do nothing
}

function dateToRealYear(date: Date): string {
  const today = new Date();
  const employmentStartDate = new Date(date);
  const years = today.getFullYear() - employmentStartDate.getFullYear();
  return `${years} anos`;
}

export interface Expert extends User{
  skillScore: number;
  colorScore: ColorScore;
}

interface SearchTableProps {
  count?: number;
  page?: number;
  rows?: Expert[];
  rowsPerPage?: number;
  setPage?: (page: number) => void;
  setRowsPerPage?: (rowsPerPage: number) => void;
}

export function SearchTable({
  count = 0,
  rows = [],
  page = 0,
  rowsPerPage = 0,
  setPage = noop,
  setRowsPerPage = noop,
}: SearchTableProps): React.JSX.Element {

  const router = useRouter();

  const handleRowClick = (user: Expert) => {
    router.push(`/search/account/?id=${user.id}`);
  }

  const setColorView = (score: number, colorScore: ColorScore) => {
    switch (colorScore) {
      case ColorScore.GREEN:
        return <Avatar sx={{ bgcolor: green[300] }}>{score}</Avatar>;
      case ColorScore.YELLOW:
        return <Avatar sx={{ bgcolor: yellow[300] }}>{score}</Avatar>;
      case ColorScore.RED:
        return <Avatar sx={{ bgcolor: red[300] }}>{score}</Avatar>;
      default:
        return <Avatar>{score}</Avatar>;
    }

  }

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

              <TableCell>Área</TableCell>
              <TableCell>Senioridade</TableCell>
              <TableCell>Tempo na Organização</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Score <ScoreTooltip/></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length === 0 && (
              <TableRow>
                <TableCell colSpan={7}>
                  <Typography variant="subtitle1" align="left">
                    Nenhum resultado encontrado
                  </Typography>
                </TableCell>
              </TableRow>
            )}
            {rows.map((row) => {
              return (
                <TableRow key={row.id} >
                  <TableCell>
                    <Stack sx={{alignItems: 'center',
                                cursor: 'pointer',
                                borderRadius: '20px',
                                '&:hover': {
                                  backgroundColor: 'lightgray',
                                }
                              }}
                    direction="row" spacing={2} onClick={() => {handleRowClick(row)}}>
                      <Avatar src={row.photo} />
                      <Typography variant="subtitle2">{row.name}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{row.email}</TableCell>

                  <TableCell>{row.area}</TableCell>
                  <TableCell>{row.seniority}</TableCell>
                  <TableCell>{dateToRealYear(row.employmentStartDate)}</TableCell>
                  <TableCell>{row.team}</TableCell>
                  <TableCell>{setColorView(row.skillScore, row.colorScore)}</TableCell>
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
        onPageChange={(e, newPage) => setPage(newPage)}
        onRowsPerPageChange={(e) => setRowsPerPage(parseInt(e.target.value, 10))}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
}
