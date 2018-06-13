require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

// App config
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

// DB config
const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds259410.mlab.com:59410/raw-terms`);

// Schemas
const Schema = mongoose.Schema;

const rawListSchema = new Schema({
  list: [Schema.Types.ObjectId]
});

// Routes
app.get("/", (req, res) => {
  res.send(`listening on port: ${process.env.PORT}`);
});
app.post("/terms", (req, res) => {
  console.log(req.body, typeof req.body);
  res.send(null);
});

// Listener
const listener = app.listen(process.env.PORT, () => console.log('listening...'));
