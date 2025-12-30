# Plant Tracker – Frontend (React + Vite)

A simple plant-tracking dashboard built with **React**, **TypeScript**, and **Vite**. This frontend connects to a Spring Boot REST API ([plant-tracker](https://github.com/Visu4lny/plant-tracker)) to help users manage their houseplants.

> *Currently in prototype phase: auth and plant display are mocked for local development.*

## Features (Planned)
- User registration & login
- Authenticated dashboard
- View list of plants with last-watered timestamps
- Add/edit/delete plants
- Protected routes

## Tech Stack
- **Framework**: React + TypeScript
- **Build Tool**: Vite
- **Styling**: Plain CSS
- **Auth**: Token-based (mocked)
- **API**: To integrate with Spring Boot backend (UUID user/plant IDs, `Instant` timestamps)

## Project Structure

```
src/
├── pages/
│   ├── RegisterPage.tsx
│   ├── LoginPage.tsx
│   └── DashboardPage.tsx      # Main view after login
├── components/
│   ├── PlantList.tsx          # Renders list of PlantCard
│   └── PlantCard.tsx          # Displays a single plant
├── types/
│   └── index.ts               # e.g., Plant, User type
└── App.tsx
```
## Getting Started

```bash
npm install
npm run dev
```
Open <http://localhost:5173>


