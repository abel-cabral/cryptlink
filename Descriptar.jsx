import React, { useState } from "react";
import {
  View,
  Platform,
  Button,
  StyleSheet,
  Linking,
  Clipboard,
} from "react-native";
import styled from "styled-components/native";
import axios from "axios";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #090909b3;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
`;

const Moldura = styled.View`
  width: 120px;
  height: 40px;
  border-radius: 4px;
`;

const InputContainer = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

const StyledInput = styled.TextInput`
  width: 300px;
  height: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});

const Descriptar = () => {
  const api = "https://cryptlink-api.abelcode.dev";
  const path = window.location.pathname;
  const [link_publico, setUrl] = useState(path.replace("/", ""));
  const [senha, setSenha] = useState("");

  const handleSubmit = () => {
    axios
      .post(api + "/decrypt", {
        link_publico,
        senha,
      })
      .then((response) => {
        if (Platform.OS === "web") {
          window.location.href = response.data.url;
        } else {
          Linking.openURL(response.url).catch((err) =>
            console.error("Erro ao abrir o link:", err)
          );
        }
      })
      .catch((error) => {
        setSenha("");
        if (Platform.OS === "web") {
          alert(
            error.response.data.message
              ? error.response.data.message + ". Verifique link | senha"
              : "Erro desconhecido. Verifique link | senha"
          );
        } else {
          Alert.alert(
            "Error",
            error.response.data.message
              ? error.response.data.message + ". Verifique link | senha"
              : "Erro desconhecido. Verifique link | senha"
          );
        }
      });
  };

  const handleSenhaChange = (text) => {
    setSenha(text);
  };

  return (
    <View style={styles.container}>
      <Container>
        <Title>Cryptlink</Title>
        <InputContainer>
          <StyledInput
            placeholder="senha para decodificar link"
            placeholderTextColor="#c0c0c0"
            secureTextEntry={true}
            value={senha}
            onChangeText={handleSenhaChange}
          />
        </InputContainer>
        <Moldura>
          <Button title="Descriptar" disabled={!senha} onPress={handleSubmit} />
        </Moldura>
      </Container>
    </View>
  );
};

export default Descriptar;
