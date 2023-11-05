import React, { FC } from 'react';
import Dialog from '@mui/material/Dialog';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Info from './info';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { point } from '../data/point';

/* const CloseIcon = () => (
  <span className="DeMo" style={{ color: '#cd0119', fontSize: '2rem' }}>
    K
  </span>
); */
const Detail: FC<{
  props: point;
  open: boolean;
  closeModal: () => void;
}> = ({ props, open, closeModal }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Dialog
      PaperProps={{
        sx: {
          width: fullScreen ? '100%' : '60%',
          maxHeight: fullScreen ? '100%' : '80vh',
        },
      }}
      open={open}
      onClose={closeModal}
      fullWidth
      maxWidth={'md'}
      fullScreen={fullScreen}
    >
      <Info pt={props} />

      {fullScreen && (
        <>
          <div style={{ marginBottom: '24px' }}></div>
          <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation onChange={closeModal}>
              <BottomNavigationAction icon={<CloseRoundedIcon />} />
            </BottomNavigation>
          </Paper>
        </>
      )}
    </Dialog>
  );
};

export default Detail;
