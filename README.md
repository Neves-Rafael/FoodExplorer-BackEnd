![Sign up](https://github.com/Neves-Rafael/FoodExplorer-BackEnd/assets/136202919/343527f1-3467-42b1-96a4-169c4edf79c2)

<p align="center">Português-Br |  English-Us</p>
<br/>
<br/>

Aplicação fullstack, utilizando as tecnologias aprendidas durante o curso Explorer, simulando um restaurante fictício de acordo com o layout disponibilizado no Figma.

O food explorer possui duas personas: o admin e o usuário;

O admin é a pessoa responsável pelo restaurante, logo, poderá criar, visualizar, editar, apagar um prato e alterar os status de pedidos a qualquer momento. Cada prato deve conter uma imagem, um nome, uma categoria, uma breve descrição, os ingredientes e o seu preço. Ao clicar em adicionar prato, o admin receberá uma mensagem de sucesso e será redirecionado para a página principal.

O usuário irá visualizar todos os pratos cadastrados, adicionar ao carrinho, fazer um pedido, adicionar aos favoritos, acompanhar seu histórico de pedidos, atualizar seu perfil e quando clicar em um prato, será redirecionado para uma nova tela com informações mais detalhadas sobre ele.
<br/>

<a target="_blank">[Link para o deploy da aplicação](https://foodexplorer-delivery.netlify.app/) </a>

<br/>
<br/>

<h1 align="center">💻 Instalação</h1>

### **_Pré-requisitos_**

Antes de começar, você vai precisar ter instalado em sua máquina <a target="_blank">[NodeJs](https://nodejs.org/en) </a> e uma ferramenta de versionamento como o <a target="_blank">[GIT](https://git-scm.com/) </a>,
Além disto é bom ter um editor para trabalhar com o código por exemplo <a target="_blank">[VSCode](https://code.visualstudio.com/) </a>.
Para fazer testes localmente uma boa opção é o <a target="_blank">[Insomnia](https://insomnia.rest/) </a> e para gerenciamento de banco de dados relacionado o <a target="_blank">[Beekeeper](https://www.beekeeperstudio.io/) </a>

### **_Configuração_**

Siga os seguintes passos para configurar e rodar a aplicação localmente:

- Clone o repositório:

  ```bash
    git clone https://github.com/Neves-Rafael/FoodExplorer-BackEnd
  ```

- Entre no diretório e instale as dependências:

  ```bash
    npm install
  ```

- Preencha as variáveis seguindo o .env.exemplo:

  ```bash
    ADMIN_EMAIL=admin@admin.com
    PORT=3333
    AUTH_SECRET=a76da876da876$ds654a@7656
  ```

- Rode o servidor local:

  ```bash
    npm run dev
  ```

- Caso não ocorra nenhum erro a seguinte mensagem será apresentada:

  ```bash
    Server is running on port 3333.
  ```

- Para utilizar todo dos recursos desta API, acesse o localhost com a porta adicionada no .env:

  `http://localhost:3333`

- Para fazer as requisições utilize utilize o insomnia ou qualquer outro programa de sua preferência.
  <br/>
  <br/>

<h1 align="center">🔧 Recursos</h1>

A aplicação possui duas personas:

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
    <br/>
    <br/>

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
    <br/>
    <br/>

<h1 align="center">📑 Funcionamento</h1>

- ### **Fazer login**

  Para algumas requisições, a aplicação espera um token (JWT) no header da requisição, ou seja, o usuário tem que está autenticado.

  Para gerar um token basta fazer uma requisição:

  `POST("/sessions")`

  Com as seguintes informações:

  ```
   "email": "exemplo@email.com",
   "password": "exemplo123"
  ```

  Se tudo estiver correto será liberado acesso para a aplicação.
  <br/>
  <br/>

- ### **User**

  Rota para criação de conta com acesso de `usuário` para criar uma conta como administrador adicione ao arquivo `.env` que possui um exemplo de preenchimento o email desejado para liberar acesso.

  ```bash
  ADMIN_EMAIL=admin@admin.com
  PORT=3333
  AUTH_SECRET=a76da876da876$ds654a@7656
  ```

  `POST("/users")`

  Com as seguintes informações:

  ```
   "nome": "Exemplo nome"
   "email": "exemplo@email.com",
   "password": "exemplo123"
  ```

  Rota para atualização da conta

  `PUT("/users")`

  Nesta rota é feita uma segunda autorização pra verificar se a conta foi criada corretamente.

  `GET("/users/validated")`
  <br/>
  <br/>

- ### **Plate**

  As seguintes rotas são para visualização de todos os pratos ou pratos específicos selecionados.

  `GET("/plates")`

  `GET("/plates/:id")`

  Para o admin ele possui as seguintes rotas de criação, exclusão e atualização dos pratos.

  `POST("/plates")` `admin require`

  `PUT("/plates/:id")` `admin require`

  `DELETE("/plates/:id")` `admin require`

  `PATCH("/plates/:id")` `admin require`
  <br/>
  <br/>

- ### **Pagamento**

  Rota para a criação de um pedido, com uma duração de 15 minutos para pagamento, que é ativado com a rota seguinte.

  `POST("/payment")`

  Pota para um fazer um "pagamento" fictício que atualiza o status do pedido.

  `PUT("/payment/qrcode/:id")`

  As seguintes rotas são para visualização de todos os pedidos daquele usuário e para pedidos específicos.

  `GET("/payment")`

  `GET("/payment/:id")`

  Rota que o admin consegue atualizar o status de qualquer pedido existente.

  `PATCH("/payment/:id")` `admin require`
  <br/>
  <br/>

- ### **Ingredientes**

  Rota para exibir os ingredients.

  `GET("/ingredients")`
  <br/>
  <br/>

- ### **Favoritos**

  Rotas para adição do prato aos favoritos e para visualização de todos os pratos adicionados.

  `POST("/favorites")`

  `GET("/favorites")`

<br/>

<h1 align="center">🗂️ Requisitos</h1>

- ✅ Projeto estruturado, com uma boa organização das pastas.
- ✅ Os dados do admin, do restaurante e dos usuários serão armazenados em um banco de dados.
- ✅ Os usuários se autenticam para entrar na aplicação através da tela de login, utilizando autenticação JWT.
- ✅ Usuário e admin podem fazer uma busca tanto pelo nome do prato quanto pelos ingredientes;
- ✅ O admin pode fazer upload de imagens para cadastrar os pratos.
- ✅ Aplicação consome a sua própria API;
  <br/>
  <br/>

<h1 align="center">📊 Tecnologias e Licença</h1>

<p align="center"> - NodeJs - bcryptjs - express - knex - Multer - SQLite - PM2 - JWT</p>
<br/>

<p align="center"> Uso de Licença MIT: Essa licença permite o uso, modificação e distribuição do software sem restrições. </p>
<br/>

<p align="center">Feito com ❤️ por Rafael Neves 👋🏽 <a href="https://www.linkedin.com/in/rafael-neves-profile/">Entre em Contato</a></p>
