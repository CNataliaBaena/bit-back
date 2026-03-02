import { Router } from "express";
import productos from "../data/productos.js";

const router = Router();

router.get("/", (req, res) => {
  res.json(productos);
});

router.get("/:id", (req, res) => {
  const producto = productos.find(p => p.id === parseInt(req.params.id));

  if (!producto) {
    return res.status(404).json({ error: "Ese producto no existe" });
  }

  res.json(producto);
});

router.post("/", (req, res) => {
  const { nombre, precio } = req.body;

  if (!nombre || precio === undefined) {
    return res.status(400).json({ error: "Hace falta el nombre o el precio" });
  }

  const precioNum = parseFloat(precio);
  if (isNaN(precioNum) || precioNum < 0) {
    return res.status(400).json({ error: "El precio no es valido" });
  }

  const nuevo = {
    id: Date.now(),
    nombre: nombre.trim(),
    precio: precioNum,
  };

  productos.push(nuevo);
  res.status(201).json(nuevo);
});

router.put("/:id", (req, res) => {
  const index = productos.findIndex(p => p.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: "Ese producto no existe" });
  }

  const { nombre, precio } = req.body;

  if (nombre !== undefined) {
    productos[index].nombre = nombre.trim();
  }

  if (precio !== undefined) {
    const precioNum = parseFloat(precio);
    if (isNaN(precioNum) || precioNum < 0) {
      return res.status(400).json({ error: "El precio no es valido" });
    }
    productos[index].precio = precioNum;
  }

  res.json(productos[index]);
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = productos.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Ese producto no existe" });
  }

  const eliminado = productos.splice(index, 1)[0];
  res.json(eliminado);
});

export default router;
