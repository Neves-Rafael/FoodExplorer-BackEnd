<h1 align="center">FoodExplorer Back-End</h1>

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

- ✅Atende a todas as especificações na Descrição da Aplicação

Um projeto estruturado, com uma boa organização das pastas, divisão de componentes no front-end, etc.

Os dados do admin, do restaurante e dos usuários serão armazenados em um banco de dados.

Os usuários deverão se autenticar para entrar na aplicação através da tela de login, utilizando autenticação JWT. A autenticação deve ser validada com senha.

Funções, variáveis, classes, arquivos, tabelas e todos os outros elementos do código devem ter nomes significativos, de acordo com as boas práticas no mercado;

Usuário e admin podem fazer uma busca tanto pelo nome do prato quanto pelos ingredientes;

O admin irá fazer upload de imagens para cadastrar os pratos.

A aplicação deve ser responsiva, de acordo com o conceito Mobile First que foi aprendido em aula e seguindo o modelo do Figma;

O repositório deverá conter um README bem detalhado tanto no back-end quanto no front-end com link do deploy, previews e instruções para a execução do projeto.

Use os conceitos aprendidos em aula sobre animações e inclua transições e transformações (entre outros exemplos) para deixar a experiência da aplicação mais fluida.

A sua aplicação deverá consumir a sua própria API;

Faça o deploy da sua aplicação (front-end e back-end)

Atende ao modelo proposto no Figma e contém elementos indicativos de ação e estado

Você pode adicionar quaisquer novas funcionalidades no seu projeto. Se desafie.

O usuário poderá incluir itens no carrinho, clicando no botão incluir. Já a quantidade é controlada pelos botões “-” e “+”.

Ao clicar no botão meu pedido, o usuário será redirecionado para uma tela onde irá ver o seu pedido, a soma e os métodos de pagamento.

O usuário poderá excluir um prato do carrinho e o valor total do pedido deve ser atualizado automaticamente.

O usuário poderá marcar um prato como favorito, basta clicar no coração que aparece ao lado de cada um;

O admin irá visualizar e controlar o status de cada pedido, por um campo do tipo select. Os pedidos irão aparecer em uma tabela ao clicar em Pedidos;

Já que o projeto está em dark mode, você pode aplicar a versão light mode;

<p>Tecnologias</p>
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
