# Brigs Confeitaria

Este projeto é uma aplicação web desenvolvida em React para a confeitaria Brigs. Ele apresenta os produtos, novidades, galeria de fotos e informações de contato, com navegação moderna e responsiva utilizando Bootstrap.

## Tecnologias Utilizadas
- React
- React Router DOM
- Bootstrap
- Vite

## Estrutura de Pastas
```
public/
  assets/        # Imagens dos produtos, logo, etc.
src/
  Pages/         # Páginas principais do site (Home, Galeria, Doces, Brigadeiro, Novidades, etc.)
  Componentes/   # Componentes reutilizáveis (Navbar, Header, Footer, Card)
  App.jsx        # Componente principal, define as rotas
  App.css        # Estilos globais
```

## Como rodar o projeto
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse `http://localhost:5173` no navegador.

## Rotas principais
- `/`            - Página inicial
- `/galeria`     - Galeria de fotos dos produtos
- `/doces`       - Doces diversos
- `/brigadeiro`  - Brigadeiros
- `/novidades`   - Novidades e lançamentos
- `/bolos`       - Bolos
- `/presentes`   - Presentes
- `/ovosdepascoa`- Ovos de Páscoa
- `/pedido`      - Página de pedidos
- `/contato`     - Contato

## Observações
- O projeto utiliza Bootstrap para estilização e modais.
- As imagens devem estar na pasta `public/assets`.
- O favicon está configurado para `logo2.png`.

## Autor
Brigs Confeitaria

---
Dúvidas ou sugestões? Entre em contato pela página de contato do site!
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
