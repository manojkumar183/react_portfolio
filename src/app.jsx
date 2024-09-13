import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ThemeProvider from './context/ThemeContext';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import theme from './theme';

// Lazy load components
const Home = lazy(() => import('./components/Home'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <ThemeProvider>
      <MUIThemeProvider theme={theme('light')}>
        <Router>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </Router>
      </MUIThemeProvider>
    </ThemeProvider>
  );
}

export default App;
