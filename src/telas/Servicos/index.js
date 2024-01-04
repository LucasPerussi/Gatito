import React from "react";
import {
  FlatList,
} from "react-native";
import Item from "./Item";
import TelaPadrao from "../../componentes/TelaPadrao";

const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 1.99,
    descricao: "NAO DE BANHO NO SEU GATO",
  },
  {
    id: 2,
    nome: "Tosa",
    preco: 2.99,
    descricao: "GATO ARRRANHAAAH",
  },
  {
    id: 3,
    nome: "Banho & Tosa",
    preco: 4.99,
    descricao: "NAO DE BANHO NO SEU GATO",
  },
  {
    id: 4,
    nome: "Vacina V4",
    preco: 54.99,
    descricao: "Não morra gato.",
  },
];

export default function Servicos() {
  return (<>
    {/* <TelaPadrao> */}
      <FlatList
        data={servicos}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    {/* </TelaPadrao> */}
    </>
  );
}
