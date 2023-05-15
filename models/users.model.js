const { v4: uuidv4 } = require("uuid");
const users = [
  {
    id: uuidv4(),
    username: "Nazmul Hasan",
    email: "lalalal@yahoo.com",
  },
  {
    id: uuidv4(),
    username: "Rakibul Islam",
    email: "lalalal@yahoo.com",
  },
];
module.exports = users;
