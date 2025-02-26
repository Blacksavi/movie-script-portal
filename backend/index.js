const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const scriptRoutes = require('./routes/scriptRoutes');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Auto-Setup
mongoose.connect('mongodb://localhost:27017/moviescripts', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use('/api/scripts', scriptRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
