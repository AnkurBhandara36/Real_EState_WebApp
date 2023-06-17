import React from 'react';
import './App.css';
import Header from './components/Headers/Header.js';
import Hero from './components/Hero/Hero';
import Company from './components/compony/Company';
import Res from '../src/components/Residencies/Res'
import Value from './components/value/Value';
import Contact from './components/contact/Contact';
import Started from './components/started/Started';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Company/>
      <Res/>
      <Value/>
      <Contact/>
      <Started/>
      <Footer/>
    </div>
  );
}

export default App;
