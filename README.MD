# Formulário de Pesquisa do freeCodeCamp

Este projeto é um **Formulário de Pesquisa (Survey Form)** responsivo e interativo, desenvolvido como parte dos desafios do freeCodeCamp. Ele foi criado com o objetivo de coletar feedback dos usuários sobre a plataforma, utilizando as melhores práticas de desenvolvimento web para oferecer uma interface intuitiva e uma validação de dados eficiente.

---

## Tecnologias Utilizadas

Este projeto foi construído com uma base sólida de tecnologias web modernas, garantindo um desenvolvimento ágil e um resultado otimizado:

* **Vite**: Utilizado como ferramenta de build e ambiente de desenvolvimento, proporcionando um fluxo de trabalho rápido e recarregamento instantâneo.
* **HTML5**: A espinha dorsal do projeto, responsável pela estrutura semântica e acessível de todos os elementos do formulário.
* **CSS3**: Cuidado nos detalhes visuais, com um tema escuro e moderno, uso de variáveis e design responsivo para se adaptar a diferentes telas.
* **JavaScript (ES6+)**: A inteligência por trás do formulário, implementando a lógica de validação de dados e a interatividade para uma experiência de usuário fluida.

---

## ✨ Recursos Principais

O Formulário de Pesquisa do freeCodeCamp oferece as seguintes funcionalidades e características de destaque:

* **Design Responsivo**: Adapta-se perfeitamente a diversos tamanhos de tela, desde desktops a dispositivos móveis, garantindo uma ótima usabilidade.
* **Tema Visual Atraente**: Apresenta um tema escuro moderno com detalhes em tons de azul, que proporciona um excelente contraste e uma experiência visual agradável.
* **Validação de Formulário Robusta**:
    * Verifica a obrigatoriedade de campos essenciais como Nome, E-mail, Idade, Situação Atual, Recomendação e Recurso Favorito.
    * Realiza validação de formato para o campo de e-mail e verifica se a idade é um número válido e não negativo.
    * Fornece feedback claro ao usuário, exibindo mensagens de erro específicas abaixo dos campos que necessitam de correção.
* **Experiência do Usuário (UX) Otimizada**: Inclui elementos interativos com estilos personalizados (botões, rádios e checkboxes) e transições suaves, que aprimoram a interação do usuário com o formulário.
* **Coleta de Feedback Abrangente**: Contém diversos tipos de campos (seleção única, múltipla escolha, texto livre) para capturar informações detalhadas e sugestões dos usuários.

---

## 🛠️ Como Iniciar o Projeto

Para configurar e rodar este projeto em sua máquina local, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter o **Node.js** e o **npm** (ou Yarn) instalados em seu sistema.

* [Node.js](https://nodejs.org/en/download/) (versão 14 ou superior recomendada)
* [npm](https://www.npmjs.com/get-npm) (geralmente vem junto com o Node.js) ou [Yarn](https://yarnpkg.com/getting-started/install)

### Instalação

1.  **Clone o repositório** para a sua máquina local:

    ```bash
    git clone [https://github.com/LariBits/freeCodeCamp-Survey-Form.git](https://github.com/LariBits/freeCodeCamp-Survey-Form.git)
    ```

2.  **Instale as dependências** do projeto:

    ```bash
    npm install
    # ou
    yarn install
    ```

### Rodando o Projeto

1.  **Modo de Desenvolvimento**:
    Para iniciar o servidor de desenvolvimento com o Vite, que oferece recarregamento rápido em tempo real:

    ```bash
    npm run dev
    # ou
    yarn dev
    ```

    O projeto estará acessível no seu navegador, geralmente em `http://localhost:5173` (verifique o console do terminal para a porta exata).

2.  **Modo de Produção (Build)**:
    Para gerar uma versão otimizada do seu projeto, pronta para deploy:

    ```bash
    npm run build
    # ou
    yarn build
    ```

    Os arquivos otimizados serão gerados dentro da pasta `dist/` do seu projeto.

3.  **Visualizando o Build (Opcional)**:
    Se você quiser testar a versão de produção localmente antes do deploy:

    ```bash
    npm run preview
    # ou
    yarn preview
    ```

---