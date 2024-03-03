module.exports = {
  jwt: {
    secret: process.env.AUTH_SECRET || "default",
    expiresIn: 60 * 60 * 15, //15 minutos
  },
};
