import React, { useState } from "react";
import { View, Text, Clipboard, StyleSheet, Platform } from "react-native";
import { Button } from "react-native-web";

const CopiarLink = ({ link, func }) => {
  const [exibirVoltar, setExibirVoltar] = useState(false);

  const copyToClipboard = () => {
    setExibirVoltar(true);
    if (Platform.OS === "web") {
      copiarUrl("copy");
    } else {
      Clipboard.setString(link);
      Alert.alert("Sucesso", "Link copiado para a área de transferência!");
    }
  };

  const voltar = () => {
    setExibirVoltar(false);
    func();
  };

  const copiarUrl = (id) => {
    const element = document.getElementById(id);
    if (!element) {
      alert("Elemento não encontrado!");
      return;
    }

    const textoSemEspacos = element.innerText.trim().replace(/\s+/g, " ");

    const range = document.createRange();
    range.selectNode(element);

    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
      alert("Link copiado para a área de transferência!");
    } catch (err) {
      alert("Não foi possível copiar!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text} id="copy">
        <a href={link} style={{ textDecorationLine: "none", color: "#333" }}>
          {link}
        </a>
      </Text>

      <View style={styles.buttonContainer}>
        {exibirVoltar && (
          <Button
            title="Voltar"
            color="orange"
            onPress={voltar}
            style={styles.button}
          />
        )}
        &nbsp;&nbsp;
        <Button
          title="Copiar Link"
          onPress={copyToClipboard}
          style={styles.button}
          color="green"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000c0",
    color: "#f2f2f2",
    paddingHorizontal: 20,
  },
  text: {
    backgroundColor: "#f2f2f2f3",
    padding: "40px",
    marginBottom: 20,
    textAlign: "center",
    lineHeight: 24,
    width: "100%",
    fontSize: "1.2em",
  },
  link: {
    flexWrap: "wrap",
    width: "180%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    margin: "125px",
  },
});

export default CopiarLink;
