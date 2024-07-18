const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');

const Person = require('./models/Person');

app.use(bodyParser.json()); // Parse JSON request bodies

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to my hotel. How can I help you? We have a list of menus.');
});

// Route for creating a new person
app.post('/person', async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log('Data saved');
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route for fetching all persons
app.get('/person', async (req, res) => {
  try {
    const persons = await Person.find();
    res.status(200).json(persons);
  } catch (err) {
    console.error('Error fetching persons:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
