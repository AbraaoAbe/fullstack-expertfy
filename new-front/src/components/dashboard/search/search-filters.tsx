"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import { Box, Stack } from '@mui/system';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { searchExpert } from '@/lib/search/search';
import type { Competence } from '@/lib/search/search';
import { InputAdornment } from '@mui/material';
import { MagnifyingGlass as MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';

export interface SearchFiltersProps {
  selection: (selection: Competence) => void;
}

export function SearchFilters( {selection} : SearchFiltersProps ): React.JSX.Element {
  
  const [value, setValue] = React.useState<Competence | null>(null);
  const [suggestions, setSuggestions] = React.useState<Competence[]>([]);

  React.useEffect(() => {
    searchExpert.getAllSuggestions().then((data) => {
      setSuggestions(data);
    });
  }, []);

  const defaultProps = {
    options: suggestions,
    getOptionLabel: (option: Competence) => option.name,
  };
  
  const emptyValue: Competence = {id: 0, name: '', description: ''};

  return (
    <Stack spacing={2}>
      {/* Input search */}
      <Card sx={{ p: 2 }}>
        <Autocomplete
          {...defaultProps}
          id="combo-box-demo"
          sx={{ maxWidth: '500px' }}
          value={value}
            onChange={(event: any, newValue: Competence | null) => {
              setValue(newValue);
              // Pass the selected value to the parent component
              if (newValue !== null) {
                selection(newValue);
              }
              else {
                selection(emptyValue);
              }
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
