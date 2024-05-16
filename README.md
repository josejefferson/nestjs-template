# NestJS + TypeORM + PostgreSQL template

By [Jefferson Dantas](https://github.com/josejefferson)

## Technologies

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeORM](https://img.shields.io/badge/typeorm-%23fe0902.svg?style=for-the-badge&logo=typeorm&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Prettier](https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

## Features

- API Documentation
- JWT Authentication
- Role Management
- Route Access Control
- CRUD Operations for Routes and Services
- Data Validation
- Secure Headers
- File Uploads
- Database Migrations
- Pagination Support
- Search Filters
- Automatic User Creation

## Default User and Password

The Auth Service automatically inserts a user when none exists in the system

**E-mail**: `user@email.com`\
**Password**: `P@ssw0rd`

## Default Routes

- `/api` - API Documentation
- `/api/auth/login` - User Login
- `/api/auth/me` - Returns authenticated user data
- `/api/auth/change-password` - Allows users to change their password
- `/api/users/*` - User CRUD Operations

## Commands

- `yarn dev` - Run in development mode
- `yarn build` - Prepare files for production
- `yarn start` - Start in production mode
- `yarn migrate:generate` - Generate database migrations
- `yarn migrate:run` - Apply migrations
- `yarn format` - Format code
- `yarn lint` - Perform linting checks
- `yarn test` - Run TypeScript type tests

## Environment variables

- `DATABASE_URL` - URL for connecting to the PostgreSQL database
- `JWT_SECRET` - Secret key used for JWT token encryption and decryption
