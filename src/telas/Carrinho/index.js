import React from "react";
import { FlatList } from "react-native";
import Item from "./Item";
import TelaPadrao from "../../componentes/TelaPadrao";
import StatusCarrinho from "../../componentes/StatusCarrinho";

const servicos = [
  {
    id: 1,
    nome: "Banho",
    quantidade: 2,
    preco: 1.99,
    descricao: "NAO DE BANHO NO SEU GATO",
  },
  {
    id: 2,
    nome: "Tosa",
    quantidade: 3,
    preco: 2.99,
    descricao: "GATO ARRRANHAAAH",
  },
  {
    id: 3,
    nome: "Banho & Tosa",
    quantidade: 4,
    preco: 4.99,
    descricao: "NAO DE BANHO NO SEU GATO",
  },
  {
    id: 4,
    nome: "Vacina V4",
    quantidade: 5,
    preco: 54.99,
    descricao: "Não morra gato.",
  },
  {
    id: 5,
    nome: "Vacina V4",
    quantidade: 1,
    preco: 54.99,
    descricao: "Não morra gato.",
  },
  {
    id: 6,
    nome: "Vacina V4",
    quantidade: 2,
    preco: 54.99,
    descricao: "Não morra gato.",
  },
  {
    id: 7,
    nome: "Vacina V4",
    quantidade: 2,
    preco: 54.99,
    descricao: "Não morra gato.",
  },
];

export default function Carrinho() {
    const total = servicos.reduce((soma, { preco, quantidade }) => {
      return soma + preco * quantidade;
    }, 0);
  
    return (
      <>
      {/* <TelaPadrao> */}
        <StatusCarrinho total={total} />
        <FlatList
          data={servicos}
          renderItem={({ item }) => <Item {...item} />}
          keyExtractor={({ id }) => String(id)}
        />
      {/* </TelaPadrao> */}
      </>
    );
  }