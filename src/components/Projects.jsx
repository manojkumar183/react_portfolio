import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';
import { Helmet } from 'react-helmet';

const projects = [
  { title: 'Portfolio Website', description: 'A personal portfolio built with React.' },
  { title: 'E-commerce Store', description: 'An online store with full checkout system.' },
  { title: 'Weather App', description: 'A simple app displaying weather data using APIs.' },
];

const Projects = () => {
  return (
    <Container>
      <Helmet>
        <title>Projects - My React Portfolio</title>
        <meta name="description" content="A showcase of my web development projects built using React.js." />
      </Helmet>
      <Typography variant="h4" gutterBottom>Projects</Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5">{project.title}</Typography>
                <Typography variant="body2">{project.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
