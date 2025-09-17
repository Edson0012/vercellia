# React Landing Page com Tailwind CSS

Uma landing page básica criada com React e Tailwind CSS, incluindo navegação, seção principal e rodapé.

## Estrutura do Projeto

```
react-landing/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.tsx    # Navegação superior
│   │   ├── Main.tsx      # Conteúdo principal
│   │   └── Footer.tsx    # Rodapé
│   ├── App.tsx           # Componente principal
│   ├── index.tsx         # Ponto de entrada
│   └── index.css         # Estilos Tailwind
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Como Executar

1. Instale as dependências (se ainda não instalou):
```bash
npm install
```

2. Inicie a aplicação em modo de desenvolvimento:
```bash
npm start
```

3. Abra o navegador em `http://localhost:3000`

## Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm test` - Executa os testes
- `npm run eject` - Ejeta as configurações do Create React App

## Componentes

### Header
- Logo da empresa
- Menu de navegação (Home, Sobre, Serviços, Contato)
- Menu hambúrguer para dispositivos móveis

### Main
- **Hero Section**: Seção principal com título, descrição e call-to-action
- **Features Section**: Seção com 3 cartões mostrando serviços (Rápido, Confiável, Dedicado)
- **CTA Section**: Seção final com call-to-action

### Footer
- Informações da empresa
- Links úteis
- Informações de contato
- Redes sociais
- Copyright

## Tecnologias Utilizadas

- **React 18** - Biblioteca para criação da interface
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **React Scripts** - Configurações e build tools

## Personalização

Para personalizar a landing page:

1. **Cores e Estilos**: Modifique o arquivo `tailwind.config.js`
2. **Conteúdo**: Edite os componentes em `src/components/`
3. **Layout**: Ajuste a estrutura em `src/App.tsx`

## Responsividade

A landing page é totalmente responsiva e funciona bem em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

Todas as classes do Tailwind CSS foram aplicadas seguindo a abordagem mobile-first.
