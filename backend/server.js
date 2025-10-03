require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const issueRoutes = require("./routes/issueRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Conectar MongoDB
connectDB();

// Rutas
app.use("/api/issues", issueRoutes);

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Error interno del servidor" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));

