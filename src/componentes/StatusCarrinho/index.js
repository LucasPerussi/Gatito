import React from "react";
import { View, Text } from "react-native";
import estilos from "./estilo";
import Botao from "../Botao";

export default function StatusCarrinho({ total }) {
  return (
    <View style={estilos.conteudo}>
      <View style={estilos.total}>
        <Text style={estilos.descricao}>Total do carrinho: </Text>
        <Text style={estilos.valor}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(total)}
        </Text>
      </View>
      <View style={estilos.botao}>
        <Botao valor='Concluir Pedido' invertido/>
      </View>
    </View>
  );
}
