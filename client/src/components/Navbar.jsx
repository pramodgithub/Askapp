import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Box,
  InputBase,
} from '@mui/material';
import React from 'react';

import BeachAccessIcon from '@mui/icons-material/BeachAccess';

const SearchBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          ExpertTalk
        </Typography>
        <BeachAccessIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
        <SearchBox>
          <InputBase placeholder="Search..." />
        </SearchBox>
        <Icons>Icons</Icons>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
