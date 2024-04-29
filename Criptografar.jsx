import React, { useState } from 'react';
import {
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';
import CopiarLink from './pages/CopiarLink';

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
  width: 100px;
  height: 40px;
  border-radius: 4px;
`;

const InputContainer = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

const InputLabel = styled.Text`
  margin-right: 10px;
  color: white;
`;

const StyledInput = styled.TextInput`
  width: 300px;
  height: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
`;

const StyledInput2 = styled.TextInput`
  width: 50px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const CheckboxContainer = styled.View`
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  background-color: ${({ isChecked }) => (isChecked ? '#007bff' : '#fff')};
`;

const CheckboxText = styled.Text`
  color: ${({ isChecked }) => (isChecked ? '#fff' : '#000')};
`;

const IncrementButton = styled.TouchableOpacity`
  padding: 10px;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

const image = require('./assets/fundo.jpg');

const Criptografar = () => {
  const api = 'https://cryptlink-api.abelcode.dev/';
  const [url, setUrl] = useState('');
  const [senha, setSenha] = useState('');
  const [auto_delete, setDeletavel] = useState(false);
  const [numero_exibicao, setNumeroExibicoes] = useState(1);
  const [link, setLink] = useState('');
  const [exibirCopiar, setExibirCopiar] = useState(false);

  const handleURLChange = (text) => {
    setUrl(text);
  };

  const handleSubmit = () => {
    axios
      .post(api + '/encrypt', {
        url,
        senha,
        auto_delete,
        numero_exibicao,
      })
      .then((response) => {
        // Limpa formulario
        setUrl('');
        setSenha('');
        setDeletavel(false);
        setNumeroExibicoes(0);

        // Prepara dados para nova tela
        setLink(api + response.data.id);
        setExibirCopiar(true);
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  const handleSenhaChange = (text) => {
    setSenha(text);
  };

  const esconderCopiar = () => {
    setLink('');
    setExibirCopiar(false);
  }

  const handleDeletavelChange = () => {
    setDeletavel(!auto_delete);
  };

  const handleNumeroExibicoesChange = (action) => {
    if (action === 'increment') {
      setNumeroExibicoes(numero_exibicao + 1);
    } else {
      setNumeroExibicoes(numero_exibicao > 1 ? numero_exibicao - 1 : 1);
    }
  };

  return (
    <View style={styles.container}>
        {!exibirCopiar && (<Container>
          <Title>Cryptlink</Title>

          <InputContainer>
            <StyledInput
              placeholder='www.google.com'
              placeholderTextColor='#c0c0c0'
              value={url}
              onChangeText={handleURLChange}
            />
          </InputContainer>

          <InputContainer>
            <StyledInput
              placeholder='abel123'
              placeholderTextColor='#c0c0c0'
              secureTextEntry={true}
              value={senha}
              onChangeText={handleSenhaChange}
            />
          </InputContainer>

          <InputContainer>
            <TouchableOpacity onPress={handleDeletavelChange}>
              <CheckboxContainer isChecked={auto_delete}>
                {auto_delete && (
                  <CheckboxText isChecked={auto_delete}>✓</CheckboxText>
                )}
              </CheckboxContainer>
            </TouchableOpacity>
            <InputLabel> Auto Deletar</InputLabel>
            
            {auto_delete && (
              <InputContainer style={{ paddingTop: 20 }}>
                <View style={{ marginBottom: 20 }} />
                <IncrementButton
                  onPress={() => handleNumeroExibicoesChange('decrement')}
                >
                  <ButtonText>-</ButtonText>
                </IncrementButton>
                <StyledInput2
                  placeholder='Número de visualizações'
                  editable={false}
                  value={numero_exibicao.toString()}
                />
                <IncrementButton
                  onPress={() => handleNumeroExibicoesChange('increment')}
                >
                  <ButtonText>+</ButtonText>
                </IncrementButton>
              </InputContainer>
            )}

          </InputContainer>

          <Moldura>
            <Button
              title='Encriptar'
              disabled={!url || !senha}
              onPress={handleSubmit}
            />
          </Moldura>
        </Container>)}

      { exibirCopiar &&(<CopiarLink link={link} func={esconderCopiar} />)}
    </View>
  );
};

export default Criptografar;
