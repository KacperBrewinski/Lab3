const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/student', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'student.html'));
});

app.get('/add-student', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'add-student.html'));
});
 
app.get('/users', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'users.html'));
});

app.listen(port, () => {
  console.log(`Port serwera to:${port}`);
});
