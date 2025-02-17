# Projeto Next.js

## 🚀 Sobre o Projeto

Este projeto foi desenvolvido utilizando **Next.js**, um framework React para produção, focado em desempenho e experiência do desenvolvedor. A ideia do projeto é criar um site para o usuário ter uma experiência de compra de passagens e rastreio de ônibus.

O projeto conta com uma simples API em GraphQL para poder realizar operações básicas de CRUD. Uma página exclusiva para listar os usuários cadastrados e poder excluí-los se assim for necessário. Toda a estrutura da API foi pensada de forma agnóstica e desacoplada, caso venhamos mudar o client http, ou qualquer outra ferramenta, interfaces serão as responsáveis por manter a estrutura pronta para receber outra ferramenta.

Foi enviado um documento anexado ao e-mail fornecendo demais informações sobre o projeto e decisões técnicas.

## 📌 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Jest & Testing Library](https://jestjs.io/)

## 📂 Estrutura do Projeto

```
/project-root
│── public/          # Arquivos estáticos
│── src/             # Código-fonte
│   ├── app/         # Páginas do Next.js
│   ├── components/  # Componentes reutilizáveis
│   ├── hooks/       # Hooks customizados
│   ├── styles/      # Estilos globais e módulos CSS
│   ├── tests/       # Testes unitários
│   ├── types/       # Tipos Typescript
│   ├── middleware/  # Middleware do Next.js para aprimorar a experiência do usuário e performance
│   ├── .gitignore/           # Arquivos ignorados pelo Git
│   ├── .prettierrc           # Configuração do Prettier
│   ├── commitlint.config.js  # Configuração do Commitlint
│   ├── eslint.config.mjs     # Configuração do ESLint
│   ├── jest.config.js        # Configuração do Jest
│   ├── jest.setup.js         # Configuração do Jest para incorporear o Testing Library
│   ├── LICENSE               # Licença do projeto
│   ├── next.config.js        # Configuração do Next.js
│   ├── package.json          # Dependências e scripts
│   ├── postcss.config.js     # Configuração do PostCSS
│   ├── README.md             # Documentação do projeto
│   ├── tailwind.config.js    # Configuração do Tailwind CSS
│   ├── tsconfig.json         # Configuração do TypeScript
│   ├── yarn.lock             # Dependências do Yarn
```

## 🛠️ Instalação e Uso

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/TonRockets/cheesecake-challenge.git
   ```
2. **Instale as dependências:**
   ```sh
   cd cheesecake-challenge
   yarn install  # ou npm install
   ```
3. **Execute o projeto:**
   ```sh
   yarn dev  # ou npm run dev
   ```
4. **Acesse no navegador:**
   ```sh
   http://localhost:3000 # para acessar a página inicial
   http://localhost:3000/user-list # para acessar a página que exibe os usuários cadastrados através do botão create na página inicial
   ```

## ✅ Testes

Para executar os testes, execute:

```sh
# Executa todos os testes
yarn test  # ou npm run test

# Executa todos os testes em watch mode
yarn test:watch  # ou npm run test:watch

# Executa todos os testes com cobertura
yarn test:coverage  # ou npm run test:coverage
```

## 📜 Licença

Este projeto está sob a licença [MIT](LICENSE).

## 📝 Autor

Este projeto foi desenvolvido por [TonRockets](https://github.com/TonRockets).

## 📝 Considerações Finais

Sei que é difícil avaliar a todos em um simples projeto, mas uma coisa eu posso garantir, da minha parte, eu entregarei sempre o melhor dentro do que eu tenho de conhecimento e sempre buscarei aprimorar meus conhecimentos.

Fiz de tudo um pouco para que possam ver o e avaliar os meu conhecimentos, ainda tenho muito mais pra entregar que não está nesse projeto, mas espero que gostem do projeto e que possam me dar feedbacks para que eu possa melhorar ainda mais.

Obrigado!
