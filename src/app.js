import "dotenv/config";
import express from "express";
import productosRouter from "./routes/productos.js";

const app = express();

app.use(express.json());

app.use("/api/productos", productosRouter);

app.get("/", (req, res) => {
  res.json({ mensaje: "API funcionando" });
});

app.use((req, res) => {
  res.status(404).json({ error: "Esta ruta no existe" });
});

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: "Algo salio mal en el servidor" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`servidor en http://localhost:${PORT}`);
});
