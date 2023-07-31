const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

let data = [];

// Create
app.post('/api/items', (req, res) => {
  const newItem = req.body;
  data.push(newItem);
  res.status(201).json(newItem);
});

// Read
app.get('/api/items', (req, res) => {
  res.json(data);
});

// Update
app.put('/api/items/:id', (req, res) => {
  const id = req.params.id;
  const updatedItem = req.body;
  data[id] = updatedItem;
  res.json(updatedItem);
});

// Delete
app.delete('/api/items/:id', (req, res) => {
  const id = req.params.id;
  const deletedItem = data.splice(id, 1);
  res.json(deletedItem);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
