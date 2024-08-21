"use client"

import { searchExpert } from '@/lib/search/search';
import { Button, CardActions, CardContent, Collapse, Divider, FormControl, Grid, IconButton, IconButtonProps, InputLabel, MenuItem, Select, Stack, Typography, styled } from '@mui/material';
import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useFiltersStore from '@/store/filtersStore';

export interface AdvancedFilters {
  perLanguage: string;
  useLanguage: boolean;
  perArea: string;
  useArea: boolean;
  perSeniority: string;
  useSeniority: boolean;
}

interface AdvancedFiltersProps {
  setShowAlert: (showAlert: boolean) => void;
  filter: (filters: AdvancedFilters) => void;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export interface List {
  id: number;
  name: string;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function AdvancedSearch({setShowAlert, filter} : AdvancedFiltersProps): React.JSX.Element {
  const { language, area, seniority, expanded, setLanguage, setArea, setSeniority, setExpanded } = useFiltersStore();
  const { langList, areaList, seniorityList, setLangList, setAreaList, setSeniorityList } = useFiltersStore();

  // Get all languages, areas and seniorities
  React.useEffect(() => {
    
    searchExpert.getAllLanguages().then((data_lang) => {
      if (data_lang) {
        setLangList(data_lang);
      }
      else {
        setShowAlert(true);
      }
    });

    searchExpert.getAllAreas().then((data_area) => {
      if (data_area) {
        setAreaList(data_area);
      }
      else {
        setShowAlert(true);
      }
    });

    searchExpert.getAllSeniorities().then((data_seniority) => {
      if (data_seniority) {
        setSeniorityList(data_seniority);
      }
      else {
        setShowAlert(true);
      }
    });
    
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClickFilters = () => {
    const filters: AdvancedFilters = {
      perLanguage: language,
      perArea: area,
      perSeniority: seniority,
      useLanguage: !isEmpty(language),
      useArea: !isEmpty(area),
      useSeniority: !isEmpty(seniority)
    };
    filter(filters);
  }

  const isEmpty = (value: string) => {
    return value === '';
  }

  return (
    <>
        <CardActions sx={{justifyContent:'flex-end'}}>
          <Typography variant='h6'>Filtros Avançados</Typography>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" >
          <CardContent>
            <Divider style={{marginBottom: '15px'}} />    
            <Stack spacing={3}>
              <Typography variant='h5'>Filtros da Busca</Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="advanced-select-label-language">Idioma</InputLabel>
                    <Select
                      labelId="advanced-select-label-language"
                      id="select-label-language"
                      value={language}
                      label="Language"
                      onChange={(e) => setLanguage(e.target.value)}
                      
                    >
                      <MenuItem value="">
                        Todas
                      </MenuItem>
                      {langList?.map((lang) => (
                        <MenuItem key={lang.id} value={lang.name}>
                          {lang.name}
                        </MenuItem>))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="advanced-select-label-area">Área</InputLabel>
                    <Select
                      labelId="advanced-select-label-area"
                      id="select-label-area"
                      value={area}
                      label="Area"
                      onChange={(e) => setArea(e.target.value)}
                    >
                      <MenuItem value="">
                        Todas
                      </MenuItem>
                      {areaList?.map((area) => (
                        <MenuItem key={area.id} value={area.name}>
                          {area.name}
                        </MenuItem>))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="advanced-select-label-seniority">Senioridade</InputLabel>
                    <Select
                      labelId="advanced-select-label-seniority"
                      id="select-label-seniority"
                      value={seniority}
                      label="Seniority"
                      onChange={(e) => setSeniority(e.target.value)}
                    >
                      <MenuItem value="">
                        Todos
                      </MenuItem>
                      {seniorityList?.map((seniority) => (
                        <MenuItem key={seniority.id} value={seniority.name}>
                          {seniority.name}
                        </MenuItem>))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Stack>
          </CardContent>
          <CardActions sx={{justifyContent:'flex-end'}}>
            <Button variant='contained' onClick={handleClickFilters}>Aplicar Filtros</Button>
          </CardActions>
        </Collapse>
    </>
  );
}