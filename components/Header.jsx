
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const Header = () => {
  return (
    <AppBar position="static" className="bg-primary">
      <Container>
        <Toolbar>
          <Typography variant="h6" className="flex-grow text-secondary">
            E-Learning Platform
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
