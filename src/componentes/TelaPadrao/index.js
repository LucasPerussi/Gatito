import React from "react";
import {SafeAreaView, KeyboardAvoidingView, Platform, StatusBar } from "react-native";
import estilosGlobal from "../../telas/Carrinho/estilos";
import { cores } from "../estilos";
import estilos from "./estilos";

// statusbar reconhece as cores e ajusta o horario no celular, alem de antena e bateria

export default function TelaPadrao({ children }) {
  return <><SafeAreaView style={estilos.ajusteTela}>
    <StatusBar backgroundColor={cores.roxo} />  
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={estilosGlobal.preencher}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
    <SafeAreaView style={estilos.ajusteTelaBaixo} />   
    </>
}
