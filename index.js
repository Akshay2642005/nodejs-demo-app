const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let tasks = [
  { id: 1, title: 'Build CI/CD pipeline', done: false },
  { id: 2, title: 'Push to DockerHub', done: false }
];

app.get('/tasks', (req, res) => res.json(tasks));
app.post('/tasks', (req, res) => {
  const { title } = req.body;
  const task = { id: tasks.length + 1, title, done: false };
  tasks.push(task);
  res.status(201).json(task);
});
app.patch('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);
  if (!task) return res.status(404).json({ message: 'Task not found' });
  task.done = true;
  res.json(task);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

