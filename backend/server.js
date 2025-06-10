const express = require('express');
const cors = require('cors');
const passwordRoutes = require('./routes/password');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/password', passwordRoutes);

app.get('/', (req, res) => {
  res.send('Password Strength Checker API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
