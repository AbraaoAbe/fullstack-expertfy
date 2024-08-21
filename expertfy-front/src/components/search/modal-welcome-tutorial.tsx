import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import useModalStore from '@/store/modalStore';

export default function ModalWelcomeTutorial() : React.JSX.Element {
  const {open, setOpen} = useModalStore()
  const handleClose = () => setOpen(false);
  // console.log(open)
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle>Bem-vindo ao ExpertFY!</DialogTitle>
      <DialogContent>
        <Typography variant="body1" gutterBottom>
          Sua ferramenta de apoio à identificação de especialistas.
        </Typography>
        <Typography variant="body2">
          Aqui está um guia rápido para começar:
        </Typography>

          <ul>
            <li>Selecione um tópico de busca para começar sua busca por um especialista.</li>
            <li>Na lista de especialistas, clique em uma foto ou nome para acessar o perfil.</li>
            <li>No perfil você encontra o painel de Habilidades e a lista de tarefas exercidas.</li>
            <li>Analise o perfil e entre em contato com o especialista.</li>
            <li>Depois é só recomendar a habilidade dele(a) no painel de Habilidades </li>
          </ul>

      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
