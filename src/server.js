const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const routes = require('./routes/UserRoutes')
const app = express();

app.use(bodyParser.json());
app.use(router);
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', routes)

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`🏃🏃🏃 on '${port}'`);
})