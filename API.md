# 🔱 Bluetrip - Documentação de integração

## Autenticação
### Login
- **Rota:** `/auth/login`
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

### Cadastro
- **Rota:** `/auth/cadastro`
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

### Recuperação de senha
- **Rota:** `/auth/recuperar-senha`
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

## Pontos turísticos
### Listagem
- **Rota:** `/touristic-spots`
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

## Eventos
### Listagem
- **Rota:** `/events`
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

## Comércios locais
### Listagem
- **Rota:** `/local-business`
- **Parâmetros:** `category= 'near' | 'popular' | 'recommended'`
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

## Reservas
### Criar reserva
- **Rota:** `/reservation`
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