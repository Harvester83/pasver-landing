import React, { useState } from 'react';
import Cover from './components/Cover/Cover';
import Info from './components/Info/Info';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import { ThemeProvider } from 'styled-components';
import { customConf } from './custom-config';
import './App.scss';

function App() {
  const [show, setShow] = useState(false);

  return (
    <ThemeProvider theme={{ awesomegrid: customConf }}>
      <div className="App">
        <Cover setShow={setShow} />
        <Info />
        <Banner />
        <Footer />
        <Modal show={show} setShow={setShow} />
      </div>
    </ThemeProvider>
  );
}

export default App;
