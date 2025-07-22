# 💰 Savvy — Sistema de Gestão Financeira com IA Integrada

> Uma aplicação fullstack moderna para controle financeiro pessoal, com sugestões inteligentes baseadas no comportamento de gastos.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white)
![React Query](https://img.shields.io/badge/React%20Query-FF4154?style=flat&logo=react&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat&logo=redis&logoColor=white)
![Biome](https://img.shields.io/badge/Biome-000000?style=flat&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIzMiIgZmlsbD0iIzAwMDAwMCIvPjwvc3ZnPg==&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

---

## ⚙️ Tecnologias

### Frontend
- [React](https://reactjs.org/) + [Vite](https://vitejs.dev/) - React para UI declarativa, Vite para build rápido e dev server eficiente
- [Zustand](https://zustand-demo.pmnd.rs/) - Estado global
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.dev/) - UX/UI
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) - Formulário e validação
- [Axios](https://axios-http.com/) + [TanStack Query](https://tanstack.com/query/latest) - Consumo de dados
- [Recharts](https://recharts.org/) - Visualização de dados

### Backend
- [NestJS](https://nestjs.com/) com [Prisma ORM](https://www.prisma.io/)
- Autenticação com JWT + Refresh Token
- Redis + BullMQ para filas de tarefas
- PostgreSQL como banco de dados relacional
- Exportação de PDF com Puppeteer/PDFMake

### Dev Tools
- [Biome](https://biomejs.dev/) (lint + format)
- [PNPM Workspaces](https://pnpm.io/workspaces)
- GitHub Actions (CI/CD)
- [Turborepo](https://turbo.build/) (build/cache monorepo)

---

## 🧩 Funcionalidades

- [ ] 🔐 Login e registro com autenticação segura (JWT + refresh)
- [ ] 💸 CRUD completo de transações financeiras
- [ ] 📊 Dashboard com análise por categorias, meses e evolução
- [ ] 🧠 Sugestões de economia com base no histórico de gastos
- [ ] 🧾 Exportação de relatórios mensais em PDF
- [ ] 🎨 UI moderna com dark mode e animações suaves
- [ ] 🧼 Arquitetura limpa: separação clara por domínios e use-cases