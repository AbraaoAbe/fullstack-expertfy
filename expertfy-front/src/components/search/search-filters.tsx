"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import { Stack } from '@mui/system';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { searchExpert } from '@/lib/search/search';
import type { Competence } from '@/lib/search/search';
import { InputAdornment } from '@mui/material';
import { MagnifyingGlass as MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';
import useSearchStore from '@/store/searchStore';

export interface SearchFiltersProps {
  selection: (selection: Competence | null) => void;
}

export function SearchFilters( {selection} : SearchFiltersProps ): React.JSX.Element {
  
  const [suggestions, setSuggestions] = React.useState<Competence[]>([]);

  const { competence, setCompetence } = useSearchStore();

  React.useEffect(() => {
    searchExpert.getAllSuggestions().then((data) => {
      setSuggestions(data);
    });
  }, []);

  const defaultProps = {
    options: suggestions,
    getOptionLabel: (option: Competence | null) => option?.name || '',
  };

  return (
    <Stack spacing={2}>
      {/* Input search */}
      <Card sx={{ p: 2 }}>
        <Autocomplete
          {...defaultProps}
          id="combo-box-demo"
          sx={{ maxWidth: '500px' }}
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
      </Card>
    </Stack>
  );
}
