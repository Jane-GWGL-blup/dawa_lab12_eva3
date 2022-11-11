import * as React from 'react';
import {AppBar, Box, Toolbar, Container}from '@mui/material';
/*
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
*/
const Header = () => {


  return (
    <header>
      <AppBar class="nav" position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img class="logo-image" src="img/logo/deadful_tomatoes.png"/><br/>
            <input type="text" placeholder="Search.."/><i class="fa fa-search"/>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}
export default Header;