const routes = require("express").Router();

const RPublic = require("./public");
routes.use(RPublic);

const RAdmin = require("./admin");
routes.use("/admin", admin);

module.exports = routes;
