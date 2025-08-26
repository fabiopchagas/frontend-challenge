# Frontend Challenge

Este é um projeto Vue.js 3 que implementa uma interface para visualização de detalhes de pré-pedidos (Pre-Order). O projeto foi desenvolvido com foco em boas práticas de desenvolvimento, testabilidade e experiência do usuário.

## 🚀 Tecnologias Utilizadas

- **Vue.js 3** - Framework JavaScript progressivo
- **TypeScript** - Linguagem de programação tipada
- **Vite** - Build tool e dev server
- **Vue Router** - Roteamento oficial do Vue.js
- **Axios** - Cliente HTTP para requisições
- **Sass** - Pré-processador CSS
- **Vitest** - Framework de testes unitários
- **Cypress** - Framework de testes end-to-end
- **ESLint** - Linter para JavaScript/TypeScript
- **Prettier** - Formatador de código

## 📋 Pré-requisitos

- **Node.js**: ^20.19.0 ou >=22.12.0
- **npm**: Versão compatível com Node.js

## 🛠️ Instalação e Configuração

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd frontend-challenge
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o ambiente

O projeto suporta múltiplos ambientes:

- **Development** - Ambiente de desenvolvimento
- **Homologation** - Ambiente de homologação
- **Production** - Ambiente de produção

## 🚀 Scripts Disponíveis

### Desenvolvimento

```bash
# Servidor de desenvolvimento padrão
npm run dev

# Servidor de desenvolvimento com ambiente específico
npm run dev:development
npm run dev:homologation
npm run dev:production
```

### Build

```bash
# Build para produção com verificação de tipos
npm run build

# Build para ambiente específico
npm run build:development
npm run build:homologation
npm run build:production
```

### Preview

```bash
# Preview do build de produção
npm run preview

# Preview com ambiente específico
npm run preview:development
npm run preview:homologation
npm run preview:production
```

### Testes

```bash
# Testes unitários com Vitest
npm run test:unit

# Testes end-to-end com Cypress (modo desenvolvimento)
npm run test:e2e:dev

# Testes end-to-end com Cypress (build de produção)
npm run test:e2e
```

### Qualidade de Código

```bash
# Linting com ESLint
npm run lint

# Formatação com Prettier
npm run format

# Verificação de tipos TypeScript
npm run type-check
```

## 📁 Estrutura do Projeto

```
src/
├── assets/              # Recursos estáticos (CSS, imagens)
├── components/          # Componentes Vue reutilizáveis
│   ├── pre-order/      # Componentes específicos de pré-pedido
│   └── shared/         # Componentes compartilhados
│       └── icons/      # Ícones SVG
├── mocks/              # Dados mockados para desenvolvimento
├── router/             # Configuração de rotas
├── services/           # Serviços de API
├── tests/              # Testes unitários
├── types/              # Definições de tipos TypeScript
├── utils/              # Utilitários
└── views/              # Páginas/Views da aplicação
```

## 🧪 Testes

### Testes Unitários

Os testes unitários são escritos com Vitest e Vue Test Utils:

```bash
npm run test:unit
```

### Testes End-to-End

Os testes E2E são executados com Cypress:

```bash
# Modo interativo (desenvolvimento)
npm run test:e2e:dev

# Modo headless (produção)
npm run test:e2e
```

## 📦 Build e Deploy

### Build de Produção

```bash
npm run build
```

O build será gerado na pasta `dist/` e pode ser servido por qualquer servidor web estático.

### Preview do Build

```bash
npm run preview
```
