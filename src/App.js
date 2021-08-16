// Components
import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Router from './router/Router';

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>

      <Container fluid>
        <NavBar />
        <Router />
        <Footer />
      </Container>

    </div>
  );
}

export default App;
