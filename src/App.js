import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header  from "./components/header";
import Footer from "./components/Footer";
import Section_us from "./components/Sobre_nosotros_section";

function App () {
  return (
    <div>
      <Header />
      <Section_us />
      <Footer />
    </div>
  );
}

export default App;