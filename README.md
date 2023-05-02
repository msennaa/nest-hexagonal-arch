# Boas-vindas ao meu repositório de estudos da Framework Nestjs!

Aqui tem um compilado das aulas sobre nestjs da fullcycle. O conteúdo vai do básico ao avançado.

---
# Orientações

<details>
  <summary>
    <strong>⌨️ Tecnologias</strong>
  </summary>
  
  - **Typescript**
  
  - **Node**
  
  - **Express**
  
  - **Sqlite**
  
  - **Sequelize**
  
  - **Docker**
  
  - **Redis**
  
  - **Bull**

</details>

 <details>
  <summary>
    <strong>‼️ Os repositórios estão divididos de acordo com as aulas:</strong>
  </summary><br>

  1. Arquitetura hexagonal com nestjs

  2. Configuração das variáveis de ambiente

    - Caso não queira utilizar variável de ambiente: Vá no arquivo src/database/config/database.ts e modifique manualmente.
  
 </details>

<details>
  <summary>
    <strong>🤝 Passo a Passo</strong>
  </summary><br>

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:msennaa/ttbackend.git`
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd ttbackend`

  2. Instale as dependências

  - Para isso, use o seguinte comando: `npm install`
  
  3. Restaure o banco de dados

  - Para isso, use o seguinte comando na raiz do projeto: `npm run db:reset`
  
  4. Subindo a aplicação na porta 3001

  - Para isso, use o seguinte comando na raiz do projeto: `npm run dev`
  
  </details>
  
<details>
  <summary>
    <strong>🗣 Me dê feedbacks sobre o projeto!</strong>
  </summary><br>

  Qualquer tipo de feedback é bem vindo para que eu possa continuar melhorando. 
   - **senamatheusjob@gmail.com**

</details>

<details>
  <summary>
    <b>O que será avaliado</b>
  </summary>

  - Se todos os campos estão preenchidos.
    - Segue abaixo os retornos caso o preenchimento não seja o esperado
    
    ```json
    { "message": "competitionName is required" }
    ```
    
    ```json
    { "message": "competitionName must be a string" }
    ```
    
    ```json
    { "message": "competitionName must be at least 3 characters" }
    ```
</details>
