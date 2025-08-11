# Conversational Banking — Production-Ready Backend (Starter)

This is a **production-grade NestJS backend scaffold** for your conversational banking app, wired for:
- OpenAI GPT-5 chat
- Finxact (3rd-gen core) integration (placeholders + auth flow)
- Swagger API docs
- Prisma + PostgreSQL (schema included)
- Docker Compose for 1-command local dev
- Structured logging (pino), CORS, Helmet security, validation

## 1) Prerequisites
- Node 20+, Docker Desktop
- (Optional) Nest CLI: `npm i -g @nestjs/cli`

## 2) Quick Start (No Coding Needed)
```bash
cp .env.example .env
# Put your keys in .env (OpenAI, Finxact sandbox, etc.)

npm install
npm run prisma:generate

# Start Postgres + API in Docker
npm run dev:up
```

The API will be at **http://localhost:3000**, docs at **http://localhost:3000/docs**.

## 3) Useful Endpoints
- `POST /ai/chat` — send a message to GPT-5

- `GET /accounts?customerId=YOUR_ID` — list accounts from Finxact

- `GET /accounts/transactions?accountId=ACC_ID` — list transactions

## 4) Production Notes
- Build with `npm run build` then run Dockerfile or deploy to ECS/GKE.
- Store secrets in a vault (AWS Secrets Manager).
- Restrict `CORS_ORIGINS` to your domains.
- Replace in-memory badge/goal storage with PostgreSQL tables (Prisma schema ready).

## 5) Next Steps
- Add Auth (JWT/OAuth) & user table (Prisma schema scaffolded).
- Flesh out modules: goals, actions (transfers), bills.
- Wire real Finxact endpoints for transfers and payments.
- Add rate limiting (rate-limiter-flexible) at controller level.
- Add E2E tests (Jest + Pact or Supertest).

---

**You can run this without writing code**. If you want, I can also generate the **Flutter web/mobile starter** next and connect it to these endpoints.
