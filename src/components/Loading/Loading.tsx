import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import ButtonCustom from '~/components/Button/Button';
import { useformContext } from '~/store/FormContext';
import Select from '@mui/material/Select';
import SelectCustom from '~/components/Select/Select';

export default function Loading({ id }) {
  const [open, setOpen] = React.useState(false);
  const { step, handleStep } = useformContext();
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
    handleStep(step <= 3 ? step + 1 : 1);
  };

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
      <Button onClick={handleOpen}>
        {id === 1 ? (
          <ButtonCustom title={'entrar'} />
        ) : id === 2 ? (
          <ButtonCustom id={id} title={'enviar link'} />
        ) : id === 3 ? (
          <ButtonCustom title={'voltar para o login'} />
        ) : id === 4 ? (
          <SelectCustom />
        ) : null}
      </Button>
    </div>
  );
}