require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes/index');

const app = express();

app.use(helmet()); //safety
app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.use(require('./middlewares/errorHandler.middleware'));

// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});