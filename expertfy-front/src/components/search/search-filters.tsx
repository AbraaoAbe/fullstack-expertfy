"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import { Stack } from '@mui/system';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { searchExpert } from '@/lib/search/search';
import type { Competence } from '@/lib/search/search';
import { Alert, CardContent, CardMedia, InputAdornment } from '@mui/material';
import { MagnifyingGlass as MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';
import useSearchStore from '@/store/searchStore';
import { AdvancedSearch } from './advanced-search';
import type { AdvancedFilters } from '@/components/search/advanced-search';



export interface SearchFiltersProps {
  selection: (selection: Competence | null) => void;
  filter: (filters: AdvancedFilters) => void;
}

export function SearchFilters( {selection, filter} : SearchFiltersProps ): React.JSX.Element {
  
  // Suggestions for the search input field
  const {suggestions, setSuggestions} = useSearchStore();
  // Keep the selected competence in the store
  const {competence, setCompetence } = useSearchStore();
  const [showAlertServerError, setShowAlertServerError] = React.useState<boolean>(false);


  React.useEffect(() => {
    // Get the suggestions only once
    if (suggestions.length === 0) {
      searchExpert.getAllSuggestions().then((data) => {
        if (data) {
          setSuggestions(data);
        }
        else {
          setShowAlertServerError(true);
        }
      });
    }
  }, []);

  

  const defaultProps = {
    options: suggestions,
    getOptionLabel: (option: Competence | null) => option?.name || '',
  };



  return (
    <Stack spacing={2}>
      {/* Input search */}
      <Card sx={{ p: 2 }}>
        <CardMedia
          sx={{ width: '200px', margin: 'auto', borderRadius: '15px'}}
          component="img"
          src='/logo.png'
          title="expertfy logo"
        />
        <CardContent>
          <Autocomplete
            {...defaultProps}
            id="combo-box-demo"
            sx={{margin: 'auto'}}
            value={competence}
            onChange={(event: React.SyntheticEvent, newValue: Competence | null ) => {
              // Pass the selected value to the parent component
              setCompetence(newValue);
              selection(newValue);
              
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Digite Sua Busca"
                variant="standard"
                sx={{ width: '100%' }}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <MagnifyingGlassIcon fontSize="var(--icon-fontSize-md)" />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </CardContent>
        <AdvancedSearch setShowAlert={setShowAlertServerError} filter={filter}/>
      </Card>
      {/* Alert */}
      {showAlertServerError && <Alert severity="error">Erro ao carregar as sugestões de busca</Alert>}
    </Stack>
  );
}
