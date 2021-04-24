const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect mongo db
connectDB();

// init middle ware
app.use(express.json({ extended: false }));
app.get('/', (req, res) =>
  res.json({ msg: 'welcome to the contact keeper Api' })
);

// define routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));

PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
