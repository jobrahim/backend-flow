const express = require('express');
//const cors = require('cors');
const routerApi = require('./routes');



const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


routerApi(app);


app.listen(port, () => {
  console.log('Mi port' +  port);
});
