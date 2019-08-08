require("dotenv").config();
const api = require("./api/server.js");

const port = process.env.PORT || 8000;
api.listen(port, () => console.log("API on port 8000"));
