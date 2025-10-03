# Mini Bug Tracker (Fullstack MERN)

##  Objetivo

Aplicación web sencilla para crear, listar, actualizar y eliminar issues (bugs/tickets).
Incluye frontend en React, backend en Node.js + Express y MongoDB.

## Tecnologías

* **Frontend:** React, Axios
* **Backend:** Node.js, Express, Mongoose, CORS, dotenv
* **Base de datos:** MongoDB

---

## Instalación y ejecución (desde repositorio remoto)

### Clonar el repositorio

```bash
git clone https://github.com/yahirbalderas1/mini-bug-tracker.git
cd mini-bug-tracker
```
### Requisitos

* Node.js 18+ y npm
* Docker y Docker Compose (para ejecutar con contenedores)

---

## Variables de entorno

### Backend
El backend usa la variable `MONGO_URI`. Si no la defines, tiene un fallback local a:

```
mongodb://127.0.0.1:27017/bugtracker
```

### Frontend
El frontend lee `REACT_APP_API_URL` para conocer la URL del backend. Si no la defines, usa:

```
http://localhost:5000/api
```
### Ejecutar con Docker

Iniciar contenedores con el comando
```bash
    docker-compose up --build
```

URLs tras levantar con Docker (por defecto):

* Frontend: `http://localhost:3001`
* Backend: `http://localhost:5000/api`

### Backend

#### Instalar dependencias

```bash
cd backend
npm install
```

#### Levantar backend

```bash
cd backend
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm start
```

* React (local) corre en `http://localhost:3000`
* Backend (Docker) en `http://localhost:5000/api`
