import React from 'react';
import { Typography, Container, List, ListItem, ListItemText } from '@mui/material';
import { Helmet } from 'react-helmet';

const skills = ['React', 'JavaScript', 'HTML/CSS', 'Node.js', 'Git', 'Material-UI'];

const Skills = () => {
  return (
    <Container>
      <Helmet>
        <title>Skills - My React Portfolio</title>
        <meta name="description" content="List of technical skills in React.js and other web technologies." />
      </Helmet>
      <Typography variant="h4" gutterBottom>Skills</Typography>
      <List>
        {skills.map((skill, index) => (
          <ListItem key={index}>
            <ListItemText primary={skill} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Skills;
