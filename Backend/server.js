const express = require('express');
const app = express();
const errorHandler = require('./middleware/errorhandler');
const userRoute = require('./routes/Users');

/* CONNECT TO DB */
const connectDB = require('./db/connect');
require('dotenv').config();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.json());

app.use(errorHandler);
app.use('/users', userRoute);

app.get('/', (req, res) => {
  res.send('Hello');
});

const PORT = process.env.PORT || 4000;

console.log('Establishing Connection . . .\n');
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI_2);
    console.log('DATABASE connected SUCCESSFULLY ! ! !');
    app.listen(PORT, () => {
      console.log(`\t Server is running on PORT ${PORT} \n\t url: http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
