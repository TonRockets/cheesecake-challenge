# Projeto Next.js

## 🚀 Sobre o Projeto

Este projeto foi desenvolvido utilizando **Next.js**, um framework React para produção, focado em desempenho e experiência do desenvolvedor. A ideia do projeto é criar um site para o usuário ter uma experiência de compra de passagens e rastreio de ônibus.
<br>

Decidi estruturar o projeto de acordo com estruturas padrões de pastas e arquivos do Next.js para facilitar a manutenção e o desenvolvimento do projeto. Padrões como SRP e ISP foram utilizados para garantir que cada arquivo tenha uma responsabilidade única e seja isolado de outros arquivos (não está 100% seguido, mas da pra perceber a utilização desses padrões).
<br>

Decidi, também, utilizar o ESLint com o Prettier para garantir a qualidade do código e a consistência do projeto. Integrando essa qualidade com o commitlint para garantir que o código seja commitado de forma correta através do husky.
<br>

O projeto conta com alguns testes unitários para garantir a qualidade do código (não tem 100% de cobertura, mas da pra perceber a utilização dos testes, criei afim de demonstrar os meus conhecimentos).
<br>

---

Acho importante mencionar que as animações foram criadas de acordo com o que foi pedido no desafio, porém, tive a liberdade de criar algumas de forma diferente do que foi pedido por julgar mais interessante. Também nao os procurei para tirar quaisquer dúvidas porque achei que seria interessante fazer da forma que eu entendi das especificações. Mas com certeza tive dúvidas, como por exemplo, o scroll dos conteúdos de texto e o comportamento de sticky do mockup, não entendi se o mockup era o background roxo com os cards ou outra coisa.

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
   http://localhost:3000
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
