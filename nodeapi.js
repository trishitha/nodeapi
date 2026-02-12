const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello World');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});

