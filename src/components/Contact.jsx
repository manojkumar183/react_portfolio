import React from 'react';
import { Container, Typography, Link } from '@mui/material';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <Container>
      <Helmet>
        <title>Contact - My React Portfolio</title>
        <meta name="description" content="Get in touch with me for job opportunities or collaborations." />
      </Helmet>
      <Typography variant="h4" gutterBottom>Contact Me</Typography>
      <Typography variant="body1">
        Feel free to <Link href="mailto:your-email@example.com">email me</Link> or connect via LinkedIn.
      </Typography>
    </Container>
  );
};

export default Contact;
