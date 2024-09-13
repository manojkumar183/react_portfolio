import React from 'react';
import { Typography, Container } from '@mui/material';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div className="main-content">

    <Container>
      <Helmet>
        <title>Home - My React Portfolio</title>
        <meta name="description" content="Welcome to my React.js portfolio." />
      </Helmet>
      <Typography variant="h2" component="h1" gutterBottom>
        Hello, I'm a React Developer
      </Typography>
      <Typography variant="body1">
        I create modern, performant, and beautiful web applications using React and other
        cutting-edge technologies.
      </Typography>
    </Container>
    </div>

  );
};

export default Home;
