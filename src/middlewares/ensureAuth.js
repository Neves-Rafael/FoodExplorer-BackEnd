const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");

function ensureAuth(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("JWT Token inválido");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id, role } = verify(token, authConfig.jwt.secret);
    request.user = {
      id: Number(user_id),
      role,
    };

    return next();
  } catch (error) {
    throw new AppError("JWT Token inválido");
  }
}

module.exports = ensureAuth;
