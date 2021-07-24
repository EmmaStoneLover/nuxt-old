// Importing required modules
import cors from "cors";
import express from "express";
import path from "path";
import router from "./routes/api.js";
import mongoose from "mongoose";

// parse env variables
import dotenv from "dotenv";
dotenv.config();

// Configuring port
const PORT = process.env.PORT || 8000;

const app = express();
const __dirname = path.resolve();

// Configure middlewares
app.use(cors());
app.use(express.json());

app.set("view engine", "html");

// Static folder
app.use(express.static(__dirname + "/views/"));

// Defining route middleware
app.use("/api", router);

// Listening to port
async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://volkovmb:1234EmmaTheBest@cluster0.0npdy.mongodb.net/HomeDB",
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );
    app.listen(PORT, () => {
      console.log("Подключисля к DB,");
      console.log(`Сервер запущен на ${PORT}...`);
    });
  } catch (e) {
    console.log("Ошибка с подключением к базе данных:", e);
  }
}
start();

export default app;
