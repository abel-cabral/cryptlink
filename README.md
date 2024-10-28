# Projeto de Criptografia e Descriptografia

Este projeto é uma aplicação web que permite aos usuários criptografar e descriptografar URLs. Ele é construído usando React e é servido por um contêiner Docker com Nginx.

## Estrutura do Projeto

- `.github/`
  - `github-action.yml`: Configuração do GitHub Actions para build e push da imagem Docker.
- `.gitignore`: Arquivo para ignorar arquivos e diretórios específicos no Git.
- `App.js`: Arquivo principal da aplicação React.
- `app.json`: Configurações da aplicação.
- `assets/`: Diretório para armazenar arquivos estáticos.
- `babel.config.js`: Configuração do Babel.
- `Criptografar.jsx`: Componente React para criptografar textos.
- `Descriptar.jsx`: Componente React para descriptografar textos.
- `Dockerfile`: Arquivo de configuração para criar a imagem Docker.
- `nginx.conf`: Configuração personalizada do Nginx.
- `package.json`: Dependências e scripts do projeto.
- `pages/`
  - `CopiarLink.jsx`: Componente React para copiar links.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Roda a aplicação em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para ver no navegador.

### `npm run build:web`

Constrói a aplicação para produção na pasta `web-build`.\
A aplicação é otimizada para melhor performance.

## Docker

### Construir a Imagem Docker

Para construir a imagem Docker, execute:

```sh
docker build -t nome-da-imagem .
```

### Rodar o Contêiner Docker

Para rodar o contêiner Docker, execute:

```sh
docker run -p 80:80 -e API_URL=<sua_api_url> -e FRONT_URL=<sua_front_url> nome-da-imagem
```

Certifique-se de substituir <sua_api_url> e <sua_front_url> pelos valores reais das URLs da API e do front-end, respectivamente.

## GitHub Actions

O projeto está configurado para usar GitHub Actions para construir e push da imagem Docker automaticamente quando há um push na branch main. Veja o arquivo .github/github-action.yml para mais detalhes.

## Contribuição

Sinta-se à vontade para abrir issues e pull requests. Toda contribuição é bem-vinda!

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
