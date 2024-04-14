![Sign up](https://github.com/Neves-Rafael/FoodExplorer-BackEnd/assets/136202919/343527f1-3467-42b1-96a4-169c4edf79c2)


<p>Português-Br | English-Us</p>

Aplicação fullstack, utilizando as tecnologias aprendidas durante o curso Explorer, simulando um restaurante fictício de acordo com o layout disponibilizado no Figma.

O food explorer possui duas personas: o admin e o usuário;

O admin é a pessoa responsável pelo restaurante, logo, poderá criar, visualizar, editar, apagar um prato e alterar os status de pedidos a qualquer momento. Cada prato deve conter uma imagem, um nome, uma categoria, uma breve descrição, os ingredientes e o seu preço. Ao clicar em adicionar prato, o admin receberá uma mensagem de sucesso e será redirecionado para a página principal;

O usuário irá visualizar todos os pratos cadastrados, adicionar ao carrinho, fazer um pedido, adicionar aos favoritos, acompanhar seu histórico de pedidos, atualizar seu perfil e quando clicar em um prato, será redirecionado para uma nova tela com informações mais detalhadas sobre ele.
<br/>

<p>Imagem completa</p>

<h3 align="center">Link para Front-end repositório</h3>
<br/>
<br/>

<h1 align="center">Instalação</h1>

Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina nodejs e uma ferramenta de versionamento como o Git,
Além disto é bom ter um editor para trabalhar com o código por exemplo VSCode.
Para fazer testes localmente uma boa opção é o insominia e para gerenciamento de banco de dados relacionado o Beekeeper

### _Instalação_

Siga os seguintes passos para configurar e rodar a aplicação localmente:

- Clone o repositório:

  ```bash
    $git clone https://github.com/Neves-Rafael/FoodExplorer-BackEnd
  ```

- Entre no diretório e instale as dependências:

  ```bash
    $npm install
  ```

- Preencha as variáveis seguindo o .env.exemplo:

  ```JS
    ADMIN_EMAIL=@admin.com
    PORT=3333
    AUTH_SECRET=a76da876da876$ds654a@7656
  ```

- Rode o servidor local:

  ```bash
    $npm run dev
  ```

- Caso não ocorra nenhum erro a seguinte mensagem será apresentada:

  ```bash
    Server is running on port 3333.
  ```

- Para utilizar todo dos recursos desta API, acesse o local host com a porta adicionada no .env:

  `http://localhost:3333`

- Para fazer as requisições utilize utilize o insomnia ou qualquer outro programa de sua preferência.

### _Recursos_

A aplicação possui 2(duas) personas:

- Cliente:

  - Mostrar todos os pratos
  - Mostrar um prato especifico
  - Pesquisar por um prato ou ingrediente
  - Adicionar ao carrinho os pedidos
  - Fazer um pedido
  - Adicionar prato aos favoritos
  - Acessar todos os favoritos
  - Acessar histórico de pedidos
  - Acessar status do pedido
  - Atualizar informações da conta
  - Acessar página com informações sobre o restaurante

- Administrador:

  - Mostrar todos os pratos
  - Mostrar um prato especifico
  - Pesquisar por um prato ou ingrediente
  - Acessar todos os pedidos
  - Acessar status do pedido
  - Atualizar status de pedidos
  - Atualizar informações da conta
  - Acessar página com informações sobre o restaurante
  - Cadastrar um novo prato
  - Atualizar um prato
  - Deletar um prato
  - Atualizar um pedido

- # **Funcionamento**

  - ## **Fazer login**

    Para algumas requisições, a aplicação espera um token (JWT) no header da requisição, ou seja, o usuário tem que está autenticado.

    Para gerar um token e, basta fazer uma requisição:

    `POST("/sessions")`

    Com as seguintes informações:

    ```
     "email": "exemplo@email.com",
     "password": "exemplo123"
    ```

    Se tudo estiver correto será liberado acesso para a aplicação

    - #### **User**

    `POST("/user")`
    `PUT("/user")`
    `GET("/user/validated")`

    - #### **Plate**

    `GET("/plate")`
    `GET("/plate/:id")`

    `POST("/plate")` admin require
    `PUT("/plate/:id")` admin require
    `DELETE("/plate/:id")` admin require
    `PATCH("/plate/:id")` admin require

- #### **Pagamento**

  `GET("/payment")`
  `GET("/payment/:id")`

  `POST("/payment")` admin require
  `PUT("/payment/qrcode/:id")` admin require
  `PATCH("/payment/:id")` admin require

  - #### **Ingredientes**

  `GET("/ingredients")`

  - #### **Favoritos**

  `GET("/favorites")`
  `POST("/favorites")`

### Requisitos

- ✅ Projeto estruturado, com uma boa organização das pastas.
- ✅ Os dados do admin, do restaurante e dos usuários serão armazenados em um banco de dados.
- ✅ Os usuários se autenticam para entrar na aplicação através da tela de login, utilizando autenticação JWT.
- ✅ Usuário e admin podem fazer uma busca tanto pelo nome do prato quanto pelos ingredientes;
- ✅ O admin pode fazer upload de imagens para cadastrar os pratos.
- ✅ A aplicação é responsiva, de acordo com o conceito Mobile First seguindo o modelo do Figma;
- ✅ A sua aplicação deverá consumir a sua própria API;


### Tecnologias
- NodeJs
- bcryptjs
- express
- knex
- Multer
- SQLite
- PM2
- JWT

Uso de Licença: MIT;
A licença MIT permite o uso, modificação e distribuição do software sem restrições.

<p align="center">Feito com ❤️ por Rafael Neves 👋🏽 <a href="https://www.linkedin.com/in/rafael-neves-profile/">Entre em Contato</a></p>
