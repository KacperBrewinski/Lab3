const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Home</title>
      </head>
      <body>
        <p>Strona główna</p>
      </body>
    </html>
  `);
});

app.get('/student', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Student</title>
      </head>
      <body>
        <p>Strona studenta</p>
      </body>
    </html>
  `);
});

app.get('/add-student', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Add Student</title>
      </head>
      <body>
        <p>Formularz dodawania studenta</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Port serwera to ${PORT}`);
});
