// Components
import React from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import ItemListContainer from './views/ItemListContainer';
import ItemDetailContainer from './views/ItemDetailContainer';
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
        <ItemDetailContainer />
        <Footer />
      </Container>

    </div>
  );
}

export default App;
