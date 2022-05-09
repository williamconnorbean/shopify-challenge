const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const dbo = require("./db/conn");

app.listen(PORT, () => {
  dbo.connectDb((err) => {
    if (err) console.error(err);
  });

  console.log(`Server is running on port: ${PORT}`);
});
