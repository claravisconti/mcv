// Components
import React from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import ItemListContainer from './components/ItemListContainer';
import VistaProducto from './views/VistaProducto';
import Footer from './components/Footer';

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>

      <Container fluid>
        <NavBar />
        <ItemListContainer />
        {/* <Footer /> */}
      </Container>

    </div>
  );
}

export default App;
