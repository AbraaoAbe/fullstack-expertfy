"use client"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { SearchFilters } from '@/components/search/search-filters';
import { Expert, SearchTable } from '@/components/search/search-table';
import type { Competence } from '@/lib/search/search';
import { searchExpert } from '@/lib/search/search';
import useSearchStore from '@/store/searchStore';
import useTableStore from '@/store/tableStore';
import type { AdvancedFilters } from '@/components/search/advanced-search';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { ColorScore } from '@/types/colorScore';
import { Alert } from '@mui/material';
import ModalWelcomeTutorial from '@/components/search/modal-welcome-tutorial';




export default function Page(): React.JSX.Element {

  interface CountScore {
    personId: string;
    count: number;
  }

  const { experts, filteredExperts, setExperts, setFilteredExperts } = useSearchStore();
  const { count,  page, rowsPerPage, paginatedExperts, setCount, setPage, setRowsPerPage, setPaginatedExperts } = useTableStore();

  const [showAlertWarningEmptyExperts, setShowAlertWarningEmptyExperts] = React.useState<boolean>(false);

  const ajustAndReorder = (data: Expert[], listPerson: CountScore[]) => {
    //Pre tratamento pra inserir o score na lista de experts
    for (let i = 0; i < data.length; i++) {
      data[i].skillScore = 0;
      for (let j = 0; j < listPerson.length; j++) {
        if (data[i].id === listPerson[j].personId) {
          data[i].skillScore = listPerson[j].count;
          break;
        }
      }
    }

    //Reordena a lista de experts de acordo com o score
    data.sort((a, b) => b.skillScore - a.skillScore);

    return data;
  }
  // Get the selected Competence and apply the filter
  const handleFilterSelect = (selection: Competence | null) => {
    if (selection !== null) {
      const scoreCountPerson = searchExpert.getCountScore(selection);
      scoreCountPerson.then((listPerson: CountScore[]) => {
        // console.log(listPerson)

        const expert_list_pr = searchExpert.getExpertList(selection);
        expert_list_pr.then((data: Expert[]) => {
          ajustAndReorder(data, listPerson)
          //initial experts list
          calculateAndSetColorScale(data)
          setExperts(data);
          setFilteredExperts(data);
          setCount(data.length);
          setPaginatedExperts(applyPagination(data, page, rowsPerPage));
          setShowAlertWarningEmptyExperts(false);
          console.log(data)
        });
      });
    }
  }

  // Get the filters values for the advanced search and apply the filter
  const handleAdvancedFilters = (filters: AdvancedFilters) => {
    // Check if the expert list is empty
    console.log(filters)
    if(experts.length === 0) {
      setShowAlertWarningEmptyExperts(true);
      return;
    }
    let filteredExpertsLocal: Expert[] = experts;
    // if (filteredExperts.length !== 0) {
    //   filteredExpertsLocal = filteredExperts;
    //   console.log(filteredExpertsLocal)
    // }
    // else {
    //   filteredExpertsLocal = experts;
    //   console.log(filteredExpertsLocal)
    // }



    // Default: none filter
    if (!filters.useArea && !filters.useLanguage && !filters.useSeniority) {
      setPaginatedExperts(applyPagination(experts, page, rowsPerPage));
      setFilteredExperts(experts);
      setCount(experts.length);

    }
    // Some filter was selected
    else {
      if(filters.useLanguage) {
        filteredExpertsLocal = filteredExpertsLocal.filter((e) => {
          const languagesArray = e.languages.split(",").map((language) => language.trim());
          return languagesArray.includes(filters.perLanguage);
        });
      }
      if(filters.useArea) {
        filteredExpertsLocal = filteredExpertsLocal.filter((e) => e.area === filters.perArea);
      }
      if(filters.useSeniority) {
        filteredExpertsLocal = filteredExpertsLocal.filter((e) => e.seniority === filters.perSeniority);
      }
      // Update the filtered experts list
      setPaginatedExperts(applyPagination(filteredExpertsLocal, page, rowsPerPage));
      setFilteredExperts(filteredExpertsLocal);
      setCount(filteredExpertsLocal.length);
    }
     // Reset the page to 0 when the filters are applied
    setPage(0);
  }

  // Pagination control
  React.useEffect(() => {

    setPaginatedExperts(applyPagination(filteredExperts, page, rowsPerPage));


  }, [page, rowsPerPage]);


  const calculateAndSetColorScale = (experts_local: Expert[]) => {
    const TENPERCENT = Math.ceil(experts_local.length/10);
    const FOURYPERCENT = Math.ceil(experts_local.length * (4/10));
    var count = 1;
    experts_local.forEach(e => {
      if (count <= TENPERCENT){
        e.colorScore = ColorScore.GREEN;
      }
      else if(count <= FOURYPERCENT){
        e.colorScore = ColorScore.YELLOW;
      }
      else {
        e.colorScore = ColorScore.RED;
      }
      count++;
    });

  }

  return (
    <Stack spacing={3}>
      <SearchFilters selection={handleFilterSelect} filter={handleAdvancedFilters} />
      {showAlertWarningEmptyExperts && <Alert severity="warning">Busque por uma habilidade antes de utilizar os filtros avançados</Alert>}
      {experts.length > 0 && (
        <SearchTable
          count={count}
          page={page}
          rows={paginatedExperts}
          rowsPerPage={rowsPerPage}
          setPage={setPage}
          setRowsPerPage={setRowsPerPage}
        />
      )}
      <ModalWelcomeTutorial />
    </Stack>
  );
}

function applyPagination(rows: Expert[], page: number, rowsPerPage: number): Expert[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
