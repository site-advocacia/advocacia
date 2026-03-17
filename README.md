# Sistema Web - Escritório de Advocacia Silva

Este projeto contém um site completo (Frontend + Backend) para um escritório de advocacia focado em direito trabalhista.
O Frontend foi desenvolvido em **React** (utilizando Vite), com um design limpo, premium, responsivo e Vanilla CSS. O Backend é uma API em **Node.js** com **Express** conectada a um banco de dados **PostgreSQL** para armazenar as mensagens do formulário de contato.

---

## 🏗️ Estrutura do Projeto

O projeto está dividido em duas pastas principais:

- `/frontend` - Contém todo o código da interface (React + Vite)
- `/backend` - Contém a API e scripts de banco de dados (Node.js + PostgreSQL)

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- React 18
- Vite
- React Router DOM
- CSS3 (Vanilla)
- Responsivo (Mobile-first)

### Backend
- Node.js
- Express
- PostgreSQL (node-postgres / pg)
- CORS
- dotenv (Variáveis de Ambiente)

---

## ⚙️ Configuração e Execução

Para rodar este projeto em sua máquina, siga os passos abaixo:

### 1. Banco de Dados (PostgreSQL)
1. Certifique-se de ter o PostgreSQL instalado e rodando em sua máquina (`localhost` porta `5432`).
2. Conecte-se ao seu PostgreSQL (usando pgAdmin, DBeaver ou terminal) e crie um banco de dados chamado `advocacia`.
3. Abra e execute o script SQL localizado em `backend/database/init.sql` no banco de dados recém-criado. Ele criará a tabela `contatos`.
 *(Se precisar ajustar usuário/senha do seu banco local, basta criar um arquivo `.env` na raiz da pasta `backend` contendo: `DB_USER=seu_usuario`, `DB_PASSWORD=sua_senha`)*

### 2. Backend (API Node.js)
Abra um terminal, navegue até a pasta `backend` e execute:
```bash
cd backend
npm install
npm run dev
```
A API iniciará na porta `5000`.

### 3. Frontend (Site React)
Abra **outro** terminal, navegue até a pasta `frontend` e execute:
```bash
cd frontend
npm install
npm run dev
```
A aplicação abrirá no endereço `http://localhost:5173/`.

---

## 📱 Páginas
- **Home**: Banner principal, chamada para ação e descrição do escritório.
- **Serviços Trabalhistas**: Lista em blocos (cards) das áreas de atuação.
- **Localização**: Endereço, horários, estacionamento.
- **Contato**: Formulário que se comunica via POST com a API Node, e infos de contato.

## 🤝 Contribuição
Criação por Antigravity / Gemini.
