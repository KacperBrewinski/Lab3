const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

let students = [];

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
        <form action="/add-student" method="post">
          <label for="firstName">Imię:</label>
          <input type="text" id="firstName" name="firstName"><br>
          <label for="lastName">Nazwisko:</label>
          <input type="text" id="lastName" name="lastName"><br>
          <label for="major">Kierunek:</label>
          <input type="text" id="major" name="major"><br>
          <button type="submit">Dodaj studenta</button>
        </form>
      </body>
    </html>
  `);
});

app.post('/add-student', (req, res) => {
  const { firstName, lastName, major } = req.body;
  students.push({ firstName, lastName, major });
  res.send(`
    <html>
      <head>
        <title>Student Added</title>
      </head>
      <body>
        <p>Hello ${firstName} ${lastName} on ${major} studies!</p>
      </body>
    </html>
  `);
});

app.get('/users', (req, res) => {
  let userList = '<ul>';
  students.forEach(student => {
    userList += `<li>${student.firstName} ${student.lastName} - ${student.major}</li>`;
  });
  userList += '</ul>';
  res.send(`
    <html>
      <head>
        <title>Users</title>
      </head>
      <body>
        <p>Lista studentów:</p>
        ${userList}
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Port serwera to:${port}`);
});
