import React from 'react';
import { Container, Typography } from '@mui/material';
import Timeline from './components/Timeline';

function App() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Forum Timeline
      </Typography>
      <Timeline />
    </Container>
  );
}

export default App;
