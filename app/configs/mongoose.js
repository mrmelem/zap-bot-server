const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017";

mongoose.connect(
  uri,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    if (err) {
      console.log("[MongoDB] - " + err.message);
    } else {
      console.log("[MongoDB] Status Service: Ok");
    }
  }
);

module.exports = mongoose;
