const fs = require("fs");
const path = require("path");

const pathFile = path.resolve(__dirname, "..", "configs");

module.exports = {
  get: (file) => {
    return require(pathFile + file + ".json");
  },
  set: (data, file) => {
    const cb = (err) => (err ? console.log(err) : "");
    fs.writeFile(pathFile + file + ".json", JSON.stringify(data), cb);
  },
};
