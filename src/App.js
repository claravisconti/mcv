// Components
import React from 'react';
import NavBar from './components/NavBar';
// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Container fluid>
      <NavBar />
     </Container>
    </div>
  );
}

export default App;
