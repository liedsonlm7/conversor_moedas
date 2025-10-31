# 🪙 Conversor de Moedas

Um aplicativo simples em React Native para conversão de valores de diversas moedas para o Real Brasileiro (BRL), utilizando a [Awesome API](https://docs.awesomeapi.com.br/api-de-moedas) para obter as cotações mais recentes.

## ✨ Funcionalidades

- **Lista de Moedas Dinâmica:** Carrega uma lista de todas as moedas disponíveis a partir da API.
- **Seleção de Moeda:** Permite ao usuário escolher a moeda de origem para a conversão.
- **Entrada de Valor:** Campo para o usuário digitar o valor que deseja converter.
- **Exibição do Resultado:** Mostra o valor convertido para BRL formatado como moeda local.
- **Indicador de Carregamento:** Exibe uma tela de loading enquanto os dados iniciais são carregados.

## 🛠️ Tecnologias Utilizadas

- **Expo:** Plataforma e conjunto de ferramentas para construir aplicativos React Native.
- **React Native:** Framework para desenvolvimento de aplicativos móveis multiplataforma.
- **Axios:** Cliente HTTP para realizar as requisições à API de cotações.
- **@react-native-picker/picker:** Componente para seleção de itens (moedas).
- **react-native-dotenv:** Para gerenciar variáveis de ambiente, como a chave da API.

## 🚀 Como Executar o Projeto

Siga os passos abaixo para rodar o projeto em seu ambiente de desenvolvimento.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/) ou [NPM](https://www.npmjs.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Ambiente de desenvolvimento React Native configurado. Siga o [guia oficial](https://reactnative.dev/docs/environment-setup).

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/liedsonlm7/conversor_moedas.git
   cd conversor
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure a Chave da API:**
   Este projeto utiliza a Awesome API. Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API (token), que pode ser obtida no site da Awesome API.
   ```
   AWESOME_API_KEY=SEU-TOKEN-AQUI
   ```

4. **Execute o aplicativo:**
   ```bash
   # Com Expo (recomendado)
   npx expo start

   # Ou com React Native CLI
   # Para Android
   npx react-native run-android

   # Para iOS
   npx react-native run-ios
   ```
