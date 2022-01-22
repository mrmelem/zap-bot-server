const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY || "123asfasddasDzxdas";

module.exports = {
  sign: (payload) => {
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
    return token;
  },
  decode: (token) => {
    try {
      const data = jwt.verify(token, SECRET_KEY, (err, data) => {
        if (err) throw err;
        return data;
      });

      return data;
    } catch (error) {
      return { error: "Unauthorized", status: 401 };
    }
  },
};
