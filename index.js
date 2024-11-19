require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const Handlebars = require('handlebars');
const app = express();
const notesRouter = require('./routes/notes');

const connectDB = require('./db/connect');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.engine(
  'handlebars',
  exphbs.engine({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    defaultLayout: 'main',
  })
);app.set('view engine', 'handlebars');

app.use('/', notesRouter);

const start = async () => {
  try {
    const PORT = process.env.PORT || 3000;
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
