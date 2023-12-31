## API Funcionarios MongoDB

Primeiro projeto back-end desenvolvido por mim, trata-se de um CRUD bem básico de funcionários.
A API está conectada ao banco de dados NoSQL MongoDB, o que mantém uma persistência maior dos dados. 
Esse projeto foi feito através da matéra de desenvolvimento WEB na FATEC Franca

## Executar o projeto localmente

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
Para realizar as requisões pode se utilizar o [Insomnia](https://insomnia.rest/download), [Postman](https://www.postman.com/), [ReqBin](https://reqbin.com/) ou instalar
a extensão do [ThunerClient](https://www.thunderclient.com/) direto no [VSCode](https://code.visualstudio.com/).

```bash
# Clone este repositório
$ git clone <https://github.com/GuiPlayer321/API_Funcionarios_MongoDB>

# Acesse a pasta do projeto no terminal/cmd
$ cd BACK_END

# Instale as dependências
$ npm install

# Execute a aplicação 
$ npm run dev

# O servidor inciará na porta:3001 - acesse <http://localhost:3001>

```

### Criando um banco de dados
No Google pesquise por MongoDB e crie uma conta grátis no MongoDB Atlas, após isso crie uma database.
Click em connect e selecione a opção Driver, escolha a opção DRIVER e copie a string de conexão selecionando NodeJS como provedor.

### Crie as variáveis de ambiente
```bash
# Instale a dependencia
$ npm install dotenv

```
Crie um arquivo chamado ```.env ``` e crie as variavéis 

```bash
# seu usuário do banco de dados
DB_USER

# sua senha do banco de dados
DB_PASSWORD

# nome da database a ser usada
DB_DATABASE
```

### Conectando ao MongoDB
Em index.js, cole sua string de conexão com o banco de dados e troque seu user, password e nome da database pelas suas variáveis de ambiente.

## Documentação da API

#### Retornar todos os cursos
```http
  GET /funcionario
```

#### Retorna um item
```http
  GET /funcionario/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do funcionário que você quer |

#### Deleta um item
```http
  DELETE /funcionario/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do funcionário que você quer deletar|

#### Atualiza um item
```http
  PUT /funcionário/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do funcionário que você quer |
| `nome`      | `string` | ***Opcional***. Atualiza o nome do funcionário |
| `cargo`      | `string` | ***Opcional***. Atualiza o cargo do funcionário |
| `salario`      | `int` | ***Opcional***. Atualiza o salario do funcionário |
| `contratado`      | `boolean` | ***Opcional***. Atualiza a situação do funcionário |

* Deve ser informado ao menos um parâmetro no body da requisão para que seja atualizada alguma informação do funcionário

#### Insere um item
```http
  POST /funcionario
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do funcionário que você quer |
| `nome`      | `string` | **Obrigatório**. Atualiza o nome do funcionário |
| `cargo`      | `string` | **Obrigatório**. Atualiza o cargo do funcionário |
| `salario`      | `int` | **Obrigatório**. Atualiza o salario do funcionário |
| `contratado`      | `boolean` | **Obrigatório**. Atualiza a situação do funcionário |


## Licença
O projeto foi desenvolvido por mim Guilherme que detenho dos direitos do projeto.

