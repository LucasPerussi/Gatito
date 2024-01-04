import React from "react";
// import Servicos from "./src/telas/Servicos";
import Rotas from "./src/Rotas";
import 'intl';
import 'intl/locale-data/jsonp/pt-BR'
import TelaPadrao from "./src/componentes/TelaPadrao";

import Reactotron from 'reactotron-react-native';

Reactotron.configure().useReactNative().connect();

export default function App() {
  Reactotron.log("lucas")
  return (
    <TelaPadrao>
      <Rotas/>
    </TelaPadrao>
  );
}

