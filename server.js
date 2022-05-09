const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT || 5000;

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'static_source/build')));

  app.get('/', (req, res) => {
    res.sendFile(
      path.join(__dirname, 'static_source', 'build', 'index.html'),
    );
  });
}

app.use(cors());
app.use(bodyParser.json());

const dbo = require("./db/conn");

app.listen(PORT, () => {
  dbo.connectDb((err) => {
    if (err) console.error(err);
  });

  console.log(`Server is running on port: ${PORT}`);
});
