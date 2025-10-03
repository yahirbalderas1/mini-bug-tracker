const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/bugtracker";
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" MongoDB conectado");
  } catch (error) {
    console.error("Error al conectar MongoDB", error);
    process.exit(1); // termina el servidor si no conecta
  }
};

module.exports = connectDB;
