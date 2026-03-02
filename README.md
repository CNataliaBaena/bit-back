632# 🚀 Mi API REST — Node.js + Express

API REST básica con operaciones CRUD para gestionar productos.

---

## ▶️ Cómo ejecutar

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar en modo desarrollo (se reinicia automáticamente)
npm run dev

# 3. O ejecutar en modo producción
npm start
```

El servidor arranca en: **http://localhost:3000**

---

## 📬 Endpoints disponibles

| Método   | URL                       | Descripción               | Body requerido           |
|----------|---------------------------|---------------------------|--------------------------|
| `GET`    | `/api/productos`          | Listar todos              | —                        |
| `GET`    | `/api/productos/:id`      | Obtener uno por ID        | —                        |
| `POST`   | `/api/productos`          | Crear nuevo               | `{"nombre":"", "precio": 0}` |
| `PUT`    | `/api/productos/:id`      | Actualizar existente      | `{"nombre":"", "precio": 0}` |
| `DELETE` | `/api/productos/:id`      | Eliminar                  | —                        |

---

## 🧪 Ejemplos en Postman

### Crear producto (POST)
- URL: `http://localhost:3000/api/productos`
- Body → raw → JSON:
```json
{
  "nombre": "Monitor",
  "precio": 350
}
```

### Actualizar producto (PUT)
- URL: `http://localhost:3000/api/productos/1`
- Body → raw → JSON:
```json
{
  "precio": 999
}
```

---

## 📁 Estructura del proyecto

```
mi-api/
├── src/
│   ├── app.js              ← Servidor principal
│   ├── routes/
│   │   └── productos.js    ← Rutas CRUD
│   └── data/
│       └── productos.js    ← Datos en memoria
├── .env                    ← Variables de entorno
├── package.json
└── README.md
```
