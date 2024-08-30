"use client"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { AccountDetailsForm } from '@/components/search/account/account-details-form';
import { AccountInfo } from '@/components/search/account/account-info';
import { User } from '@/types/user';
import { useSearchParams } from 'next/navigation'
import { accountInfo } from '@/lib/account/account';
import { ManifestTable } from '@/components/search/account/account-manifest-table';
import type { ManifestTableContent } from '@/components/search/account/account-manifest-table';
import AccountScorePanel from '@/components/search/account/account-score-panel';
import type { PanelTableScoreProps } from '@/components/search/account/account-score-panel';
import { Alert } from '@mui/material';
import useTableStore from '@/store/tableStore';

interface CountSkillScore{
  id: string;
  name: string;
  total: number;
  skillId: string;
}

export default function Page(): React.JSX.Element {

  const searchParams = useSearchParams();
  const userId = searchParams.get('id');
  const [user, setUser] = React.useState<User>({ id: '', photo: '', firstName: '', lastName: '', birthDate: new Date(), email: '', phone: '', linkedin: '', team: '', employmentStartDate: new Date(), language: '', seniority: '', area: '', office: ''});
  const [manifestCompetences, setManifestCompetences] = React.useState<ManifestTableContent[]>([]);
  const [scorePanel, setScorePanel] = React.useState<PanelTableScoreProps[]>([]);
  const [alertSuccess, setAlertSuccess] = React.useState(0);
  const {count, page, rowsPerPage, paginatedTasks, setCount , setPage, setRowsPerPage, setPaginatedTasks} = useTableStore();

  const disableAlertAfter2Seconds = () => {
    setTimeout(() => {
      setAlertSuccess(0);
    }, 2000);
  }

  React.useEffect(() => {
    if (!userId) {
      return;
    }
    else {
      accountInfo.getAccountInfo(userId).then((data) => {
        setUser(data);
      });



      accountInfo.getTotalScoreForAll().then((total: CountSkillScore[]) => {
        accountInfo.getCountScoreByUser(userId).then((data : CountSkillScore[]) => {
          accountInfo.getCountEndorsementByUser(userId).then((endors : CountSkillScore[]) => {

            setScorePanel(data.map((item) => {
              return {
                id: item.id,
                actual_value: item.total,
                total_value: total.find((element) => element.id === item.id)?.total ?? 0,
                name: item.name,
                endorsement: endors.find((element) => element.id === item.id)?.total ?? 0
              }

            }))
          })
          // console.log(data)
          // console.log(total)
        })
      })

      accountInfo.getTableListByUser(userId).then((data) => {
        // console.log(data)
        setManifestCompetences(data);
        setCount(data.length);
        setPaginatedTasks(applyPagination(data, page, rowsPerPage));
      })
    }

  }, [userId]);

   // Pagination control
  React.useEffect(() => {

    setPaginatedTasks(applyPagination(manifestCompetences, page, rowsPerPage));


  }, [page, rowsPerPage]);

  const createSkillEndorsement = (skilltypeId: string) => {
    //Mockado o usuário 999 como o criador do endorsement
    //Pois não teremos login no projeto
    // console.log(skilltypeId)
    // console.log(user)
    const personId = '999';
    var skillId = '999';

    accountInfo.getSkillIdByPersonAndSkillType(user.id, skilltypeId).then((data) => {
      skillId = data;
      // console.log(skillId, personId)
      accountInfo.createSkillEndorsement(skillId, personId).then((anotherData) => {
        if (anotherData)
          setAlertSuccess(1);
        else
          setAlertSuccess(2);
        disableAlertAfter2Seconds();
      })
    })



  }

  return (
    <Stack spacing={3}>
      <div>
        <Typography variant="h4">Conta</Typography>
      </div>
      <Grid container spacing={3}>
        <Grid xs={12} >
          <AccountInfo  {...user} />
        </Grid>

        <Grid xs={12} >
          <AccountDetailsForm {...user}/>
        </Grid>

        <Grid xs={12} >
          <Stack direction="row" spacing={3}>
            {/* competence table */}
            <Stack spacing={3} sx={{ flex: '1 1 auto' }}>
              <Typography variant="h4">Habilidades</Typography>
              { alertSuccess === 1 && <Alert severity="success">Habilidade Recomendada!</Alert>  }
              { alertSuccess === 2 && <Alert severity="error">Erro ao recomendar habilidade!</Alert> }
              <AccountScorePanel score={scorePanel} createSE={createSkillEndorsement}/>
              <Typography variant="h4">Tarefas</Typography>
              <ManifestTable
              rows={paginatedTasks}
              count={count}
              page={page}
              rowsPerPage={rowsPerPage}
              setPage={setPage}
              setRowsPerPage={setRowsPerPage}
              />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}

function applyPagination(rows: ManifestTableContent[], page: number, rowsPerPage: number): ManifestTableContent[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
