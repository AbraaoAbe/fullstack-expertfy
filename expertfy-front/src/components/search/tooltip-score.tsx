import * as React from 'react';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import Tooltip from '@mui/material/Tooltip';

export default function ScoreTooltip() {
  return (
    <Tooltip sx={{fontSize: "1rem"}} title="Os elementos destacados em verde estão no P10 (percentil 10). Em amarelo, estão os que se encontram no P40. Já em vermelho, estão os que estão fora do P40.">
      <HelpRoundedIcon/>
    </Tooltip>
  );
}
