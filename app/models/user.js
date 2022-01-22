const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const DataSchema = new mongoose.Schema(
  {
    name: String,
    username: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

DataSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

DataSchema.pre("findByIdAndUpdate", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

const Users = mongoose.model("users", DataSchema);
module.exports = Users;
