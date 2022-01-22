const express = require("express");
const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

require("./app/configs/mongoose");

app.use(require("cors"()));
app.use(express.json());

const routes = require("./app/routes/");
app.use("/v1", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`[SERVER] attaching port: ${PORT}`);
});
