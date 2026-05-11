# 📊 GerencIA

GerencIA é um sistema de gestão inteligente desenvolvido pela LealSoftLabs, focado em automação de processos empresariais, organização de dados e aumento de produtividade através de tecnologia.

---

## 🚀 Sobre o projeto

O GerencIA é uma plataforma web criada para centralizar e automatizar processos de gestão, oferecendo uma experiência simples, rápida e escalável para empresas.

O objetivo do sistema é reduzir tarefas manuais e melhorar a tomada de decisão através de tecnologia.

---

## 🧠 Objetivo

- Automatizar processos empresariais
- Centralizar informações em um único sistema
- Melhorar produtividade operacional
- Facilitar gestão de dados e operações
- Servir como base para um SaaS escalável

---

## ⚙️ Stack utilizada

### Backend
- Java + Spring Boot
- Spring Security (JWT)
- APIs REST
- PostgreSQL / MySQL

### Frontend
- React
- TypeScript
- TailwindCSS
- Vite

### Infraestrutura
- VPS Linux
- Docker
- GitHub Actions (CI/CD)

---

## 🧱 Arquitetura

Este projeto utiliza monorepo:

frontend/
├── src/
├── public/

backend/
├── src/
├── controllers/
├── services/
├── security/

---

## 🔐 Funcionalidades

- Autenticação de usuários
- Controle de acesso (roles/permissões)
- Dashboard administrativo
- Gestão de dados e operações
- API REST estruturada
- Interface responsiva

---

## 🚀 Execução local

### Backend
```bash
cd backend
./mvnw spring-boot:run
