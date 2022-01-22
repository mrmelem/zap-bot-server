module.exports = (req, res, next) => {
  try {
    const [, hash] = req.headers.authorization?.split(" ");

    if (!hash) throw Error("Token inválido.");

    const preVerify = hash;

    if (preVerify.split(".").length !== 3) throw Error("Token inválido.");

    const verify = await jwt.verify(hash, secret, (err, data) => {
      if (err) return false;
      return data;
    });

    if (!verify || !verify.auth) throw Error("Token inválido.");

    return next();
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};
