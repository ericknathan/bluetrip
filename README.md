# 🔱 Bluetrip

![Capa](.github/cover.png)

## 💡 Explicação do projeto
Bluetrip é uma aplicação mobile de turismo focada em oceanos, rios e lagos. O objetivo principal é fornecer uma experiência enriquecedora para turistas e entusiastas da natureza, oferecendo informações detalhadas sobre pontos turísticos, eventos, comércios locais e espécies da fauna e flora aquática. A aplicação inclui:

- **Pontos Turísticos:** Informações sobre locais de interesse próximos a oceanos, rios e lagos, assim como cuidados a se tomar com o local, informações sobre preservação, dentre outros.
- **Eventos:** Agenda de eventos relacionados aos pontos turisticos.
- **Comércios:** Listagem de comércios locais, como restaurantes temáticos, lojas de equipamentos de mergulho, etc.
- **Scanner 3D:** Um scanner que renderiza modelos 3D acompanhados de informações sobre espécies ou partes do ponto turístico.
- **Identificador de Espécies:** Um classificador de espécies utilizando inteligência artificial para identificar e fornecer informações sobre diferentes espécies aquáticas.

## 👥 Equipe
Este projeto está sendo desenvolvido pelos seguintes membros:

- RM98110 - André Rohregger Machado (2TDSPV)
- RM99565 - Erick Nathan Capito Pereira (2TDSPV)
- RM550841 - Lucas Araujo Oliveira Silva (2TDSPW)
- RM551886 - Victor Luca do Nascimento Queiroz (2TDSPV)
- RM99455 - Vinícius Martins Torres Abdala (2TDSPV)

## 💻 Tecnologias
As principais tecnologias, bibliotecas, ecossistemas e frameworks incluídos no projeto são:

- [React Native](https://reactnative.dev)
- [Expo](https://expo.dev)
- [ViroReact](https://viro-community.readme.io)
- [React Hook Form](https://react-hook-form.com)
- [React Navigation](https://reactnavigation.org)
- [React Native Bottom Sheet](https://github.com/gorhom/react-native-bottom-sheet)

## 📄 Documentação de Integração
O documento de integração está disponível no arquivo [API.md](./API.md). Nele, você encontrará a explicação de cada endpoint utilizado, com exemplos de requisições e seus respectivos retornos.

## ⚙️ Como executar a aplicação
Para executar a aplicação, siga os passos abaixo:

1. **Pré-requisitos**:
   - Certifique-se de ter o Node.js instalado. Você pode baixá-lo [aqui](https://nodejs.org/).
   - Instale o Expo CLI globalmente executando o seguinte comando:
     ```sh
     npm install -g expo-cli
     ```

2. **Clonar o repositório**:
   - Clone o repositório do projeto:
     ```sh
     git clone https://github.com/ericknathan/bluetrip.git
     ```

3. **Instalar dependências**:
   - Navegue até o diretório do projeto:
     ```sh
     cd bluetrip
     ```
   - Instale as dependências do projeto:
     ```sh
     npm install
     ```

4. **Executar a aplicação**:
   - Inicie o servidor de desenvolvimento do Expo na plataforma desejada:
     ```TS
     npx expo run:android
     // ou
     npx expo run:ios
     ```
> [!WARNING]  
> Lembre-se que, por incluir bibliotecas nativas, utilizamos a arquitetura do Expo Bare Workflow, portanto não é possível executar o aplicativo por completo através do Expo Go, entretanto recomendamos que utilize os comandos acima para fazer o build e download do aplicativo direto no dispositivo.
