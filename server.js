const express = require('express');

require('dotenv').config();

const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => res.send('api running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));