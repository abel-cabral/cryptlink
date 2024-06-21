# Limita Capacidade de Recursos no Build da Imagem
ARG MAX_CPU=0.5
ARG MAX_MEMORY=256M

# Etapa 1: Construção do projeto
# Use a imagem Node.js oficial como imagem base
FROM node:20 AS build

# Crie o diretório de trabalho no contêiner
WORKDIR /app

# Copie os arquivos de configuração do projeto para o diretório de trabalho
COPY package.json yarn.lock ./

# Instale as dependências do projeto
RUN yarn install

# Copie todo o código-fonte para o diretório de trabalho
COPY . .

# Construa o projeto para produção
RUN npm run build:web

# Etapa 2: Servir os arquivos estáticos com Nginx
FROM nginx:alpine

# Remove o conteúdo padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos estáticos do build para o diretório do Nginx
COPY --from=build /app/web-build /usr/share/nginx/html

# Copia o arquivo de configuração personalizado do Nginx para o diretório correto
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80 para acessar o servidor Nginx
EXPOSE 80

# Comando padrão para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]