require('dotenv').config();
const app = require('./app')

const port = process.env.port ||5050;

app.listen(port, () => {
  console.log("Server run successfully at port 5050");
});