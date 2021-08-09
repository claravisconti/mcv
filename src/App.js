// Components
import React from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import ItemListContainer from './components/ItemListContainer';
import Products from './components/Products';
import ItemCount from './components/ItemCount';
import Footer from './components/Footer';

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import ItemCountHook from './components/ItemCountHook';

function App() {
  return (
    <div>

      <Container fluid>
        <NavBar />
        {/* <Banner /> */}
        <ItemCountHook />
        {/* <Products /> */}
        {/* <Footer /> */}
      </Container>

    </div>
  );
}

export default App;
