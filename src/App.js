import React from "react";
import SadrzajZaglavlje from "./Zaglavlje";
import logo from "./logo.svg";
import TablicaArtikla from "./TrgovinaLista";


function App() {
    return (
      <>
      <SadrzajZaglavlje logo={logo} naslov="Electro Trgovina"/>
      <TablicaArtikla/>
      </>
    );
}

export default App;
