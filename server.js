const express = require('express');
require('dotenv').config();

const connectDB = require('./config/db');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const userRoutes = require('./routes/api/users');
const authRoutes = require('./routes/api/auth');
const feedRoutes = require('./routes/api/feed');
connectDB();

app.get('/', (req, res) => res.send('api running'));
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/feed', feedRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));