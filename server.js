require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// App config
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(cors());

// DB config
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB);

// Models
const RawList = require('./models/RawList');

// Routes
app.get("/", (req, res) => {
  res.send(`listening on port: ${process.env.PORT}`);
});
app.post("/terms", (req, res) => {
  console.log(req.body);
  const rawList = new RawList(req.body);
  rawList.save( err => console.log(err) );
  res.send(rawList || null);
});

// Listener
const listener = app.listen(process.env.PORT, () => console.log('listening on:' + process.env.PORT));
