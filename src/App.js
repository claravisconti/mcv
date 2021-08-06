// Components
import React from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import ItemListContainer from './components/ItemListContainer';
import CardStyle from './components/CardStyle';
import ItemCount from './components/ItemCount';
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
        <ItemCount />
        <CardStyle />
        {/* <Banner /> */}
        <Footer />
      </Container>

    </div>
  );
}

export default App;
