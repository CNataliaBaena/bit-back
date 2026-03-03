const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

// ===============================
// CRUD PROYECTOS
// ===============================

const projects = []

// Crear Proyecto
app.post('/proyectos', (req, res) => {
  const { name, description, technology, status, client } = req.body

  if (!name || !description || !technology || !status || !client) {
    return res.status(400).json({ message: 'Falta campo obligatorio' })
  }

  const newProject = {
    id: projects.length + 1,
    name,
    description,
    technology,
    status, // En desarrollo | Finalizado | Pausado
    client,
    createdAt: new Date()
  }

  projects.push(newProject)
  res.status(201).json(newProject)
})

// Leer todos los proyectos
app.get('/proyectos', (req, res) => {
  res.status(200).json(projects)
})

// Leer proyecto por ID
app.get('/proyectos/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const project = projects.find(p => p.id === id)

  if (!project) {
    return res.status(404).json({ message: 'Proyecto no encontrado' })
  }

  res.status(200).json(project)
})

// Actualizar proyecto
app.put('/proyectos/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = projects.findIndex(p => p.id === id)

  if (index === -1) {
    return res.status(404).json({ message: 'Proyecto no encontrado' })
  }

  const { name, description, technology, status, client } = req.body

  if (!name || !description || !technology || !status || !client) {
    return res.status(400).json({ message: 'Falta campo obligatorio' })
  }

  const updatedProject = {
    id,
    name,
    description,
    technology,
    status,
    client,
    updatedAt: new Date()
  }

  projects[index] = updatedProject
  res.status(200).json(updatedProject)
})

// Eliminar proyecto
app.delete('/proyectos/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = projects.findIndex(p => p.id === id)

  if (index === -1) {
    return res.status(404).json({ message: 'Proyecto no encontrado' })
  }

  projects.splice(index, 1)
  res.status(204).send()
})

app.listen(port, () => {
  console.log(Servidor OK en puerto ${port})
})
