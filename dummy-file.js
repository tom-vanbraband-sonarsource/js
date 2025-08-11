// server.js (Node.js example)
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.get('/images', (req, res) => {
  const filename = req.query.filename; // User-controlled input
  const imagePath = path.join(__dirname, 'images', filename); // Vulnerable concatenation

  fs.createReadStream(imagePath)
    .on('error', () => res.status(404).send('File not found'))
    .pipe(res);
});

app.listen(3000, () => console.log('Server running on port 3000'));
