// Components
import React from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>

      <Container fluid>
        <NavBar />
        <ItemListContainer />
        <Banner />
      </Container>

    </div>
  );
}

export default App;
