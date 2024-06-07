# 🔱 Bluetrip - Documentação de Integração

Bem-vindo à documentação de integração da Bluetrip! Este documento fornece todas as informações necessárias para utilizar os serviços oferecidos pela Bluetrip. Nossa plataforma é composta por dois microserviços principais:

1. **Manager**: Responsável pela obtenção de dados gerais, como autenticação, listagem de pontos turísticos, eventos e comércios locais, além de gerenciamento de reservas. Este serviço é originalmente desenvolvido em Java e está disponível em [https://bluetrip.onrender.com](https://bluetrip.onrender.com).

2. **AI**: Responsável pela funcionalidade de identificação de espécies, permitindo o reconhecimento de espécies a partir de arquivos enviados. Este serviço é desenvolvido em Python e está disponível em [https://bluetrip-ai.onrender.com](https://bluetrip-ai.onrender.com).

A seguir, você encontrará detalhes sobre as rotas, métodos, corpos de requisição, exemplos de resposta e outras informações relevantes para integrar-se aos nossos serviços de maneira eficiente e eficaz.

## Autenticação
### Login
- **Descrição:** Autenticar um usuário utilizando email e senha.
- **Rota:** `/auth/login`
- **Serviço:** Manager
- **Método:** POST
- **Corpo:**
    ```TS
    {
        "email": string,
        "password": string
    }
    ```
- **Validação:**: [validators/auth.ts](https://github.com/ericknathan/bluetrip/blob/main/src/helpers/validators/auth.ts#L3)
- **Exemplos de resposta:**
    ```TS
    // Status: 200
    {
        "message": "Usuário autenticado com sucesso!",
        "user": {
            "name": "Erick Nathan",
            "nationality": "br",
            "phone": "11940028922",
            "birthDate": "14-08-2005",
            "gender": "m",
            "email": "erick.capito@hotmail.com"
        }
    }

    // Status: 401
    { "message": "Credenciais incorretas!" }
    ```
- **Requisição:**:  [requests/auth.ts](https://github.com/ericknathan/bluetrip/blob/main/src/helpers/requests/auth.ts#L9)
- **Utilização:** [screens/auth/SignIn.ts](https://github.com/ericknathan/bluetrip/blob/main/src/screens/auth/SignIn.ts)

### Cadastro
- **Descrição:** Registrar um novo usuário na plataforma.
- **Rota:** `/auth/cadastro`
- **Serviço:** Manager
- **Método:** POST
- **Corpo:**
    ```TS
    {
        "name": string,
        "nationality": string,
        "phone": string,
        "birthDate": string,
        "gender": "m" | "f",
        "email": string,
        "password": string
    }
    ```
- **Validação:**: [validators/auth.ts](https://github.com/ericknathan/bluetrip/blob/main/src/helpers/validators/auth.ts#L22)
- **Exemplos de resposta:**
    ```TS
    // Status: 201
    { "message": "Usuário cadastrado com sucesso!" }

    // Status: 409
    { "message": "O e-mail informado já está sendo utilizado!" }
    ```
- **Requisição:**:  [requests/auth.ts](https://github.com/ericknathan/bluetrip/blob/main/src/helpers/requests/auth.ts#L26)
- **Utilização:** [screens/auth/SignUp.ts](https://github.com/ericknathan/bluetrip/blob/main/src/screens/auth/SignUp.ts)

### Recuperação de senha
- **Descrição:** Enviar um e-mail para recuperação de senha caso a conta exista.
- **Rota:** `/auth/recuperar-senha`
- **Serviço:** Manager
- **Método:** POST
- **Corpo:**
    ```TS
    {
        "email": string
    }
    ```
- **Validação:**: [validators/auth.ts](https://github.com/ericknathan/bluetrip/blob/main/src/helpers/validators/auth.ts#L67)
- **Exemplos de resposta:**
    ```TS
    // Status: 200
    { "message": "Caso a conta exista, foi enviado um e-mail para recuperação de senha!" }
    ```
- **Requisição:**:  [requests/auth.ts](https://github.com/ericknathan/bluetrip/blob/main/src/helpers/requests/auth.ts#L43)
- **Utilização:** [screens/auth/RecoverPassword.ts](https://github.com/ericknathan/bluetrip/blob/main/src/screens/auth/RecoverPassword.ts)

## Pontos turísticos
### Listagem
- **Descrição:** Listar pontos turísticos com base em categorias como "próximos", "populares" ou "recomendados".
- **Rota:** `/touristic-spots`
- **Serviço:** Manager
- **Parâmetros:** `category= 'near' | 'popular' | 'recommended'`
- **Método:** GET
- **Model:** [TouristicSpotModel](https://github.com/ericknathan/bluetrip/blob/main/src/models/tourist-spot.model.ts#L3)
- **Exemplos de resposta:**
    ```TS
    // Status: 200
    {
        "message": "Pontos turísticos listados com sucesso!",
        "data": TouristicSpotModel[];
    }
    ```
- **Requisição:**:  [requests/touristic-spots.ts](https://github.com/ericknathan/bluetrip/blob/main/src/helpers/requests/touristic-spots.ts#L4)
- **Utilização:** [screens/private/TouristicSpots.ts](https://github.com/ericknathan/bluetrip/blob/main/src/screens/private/TouristicSpots.ts)

## Eventos
### Listagem
- **Descrição:** Listar eventos com base em categorias como "próximos" ou "sugestões".
- **Rota:** `/events`
- **Serviço:** Manager
- **Parâmetros:** `category= 'next' | 'suggestions'`
- **Método:** GET
- **Model:** [EventModel](https://github.com/ericknathan/bluetrip/blob/main/src/models/tourist-spot.model.ts#L16)
- **Exemplos de resposta:**
    ```TS
    // Status: 200
    {
        "message": "Eventos listados com sucesso!",
        "data": EventModel[];
    }
    ```
- **Requisição:**:  [requests/events.ts](https://github.com/ericknathan/bluetrip/blob/main/src/helpers/requests/events.ts#L4)
- **Utilização:** [screens/private/Events.ts](https://github.com/ericknathan/bluetrip/blob/main/src/screens/private/Events.ts)

## Comércios locais
### Listagem
- **Descrição:** Listar comércios locais disponíveis na região.
- **Rota:** `/local-business`
- **Serviço:** Manager
- **Método:** GET
- **Model:** [LocalBusinessModel](https://github.com/ericknathan/bluetrip/blob/main/src/models/local-business.model.ts)
- **Exemplos de resposta:**
    ```TS
    // Status: 200
    {
        "message": "Comércios locais listados com sucesso!",
        "data": LocalBusinessModel[];
    }
    ```
- **Requisição:**:  [requests/local-business.ts](https://github.com/ericknathan/bluetrip/blob/main/src/helpers/requests/local-business.ts#L4)
- **Utilização:** [screens/private/Commerces.ts](https://github.com/ericknathan/bluetrip/blob/main/src/screens/private/Commerces.ts)

## Reservas
### Criar reserva
- **Descrição:** Criar uma nova reserva para um ponto turístico ou evento.
- **Rota:** `/reservation`
- **Serviço:** Manager
- **Método:** POST
- **Corpo:**
    ```TS
    {
        "type": "touristic-spot" | "event",
        "externalId": number,
        "paymentMethod": "C" | "M" | "P",
        "date": string,
        "quantity": number,
    }
    ```
- **Validação:**: [validators/reservation.ts](https://github.com/ericknathan/bluetrip/blob/main/src/helpers/validators/reservation.ts)
- **Exemplos de resposta:**
    ```TS
    // Status: 201
    { "message": "Reserva criada com sucesso" }
    ```
- **Requisição:**:  [requests/reservation.ts](https://github.com/ericknathan/bluetrip/blob/main/src/helpers/requests/reservation.ts#L4)
- **Utilização:** [screens/private/Reservation.ts](https://github.com/ericknathan/bluetrip/blob/main/src/screens/private/Reservation.ts)

## Identificação de espécies
### Identificar espécie
- **Descrição:** Identificar uma espécie a partir de uma imagem enviada.
- **Rota:** `/identify-specie`
- **Serviço:** AI
- **Método:** POST
- **Corpo:**
    ```TS
    {
        "file": File
    }
    ```
- **Cabeçalho:**
    ```TS
    {
        "Content-Type": "multipart/form-data",
    }
    ```
- **Exemplos de resposta:**
    ```TS
    // Status: 200
    {
        "name": "Peixe Dourado", 
        "score": 99.745,
        "type": "Peixe"
    }
    ```
- **Requisição:**:  [requests/specie-identifier.ts](https://github.com/ericknathan/bluetrip/blob/main/src/helpers/requests/specie-identifier.ts#L4)
- **Utilização:** [screens/private/Scanner/SpecieIdentifier/index.ts](https://github.com/ericknathan/bluetrip/blob/main/src/screens/private/Scanner/SpecieIdentifier/index.ts)