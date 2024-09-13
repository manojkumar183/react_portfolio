import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <AppBar position="static" color={theme === 'light' ? 'primary' : 'secondary'}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button component={Link} to="/skills" color="inherit">Skills</Button>
        <Button component={Link} to="/projects" color="inherit">Projects</Button>
        <Button component={Link} to="/contact" color="inherit">Contact</Button>
        <Button onClick={toggleTheme} color="inherit">
          Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
