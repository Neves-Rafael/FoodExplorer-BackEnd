const AppError = require("../utils/AppError");

function verifyRoleAuthorization(verifyRole) {
  return (request, response, next) => {
    const { role } = request.user;

    if (verifyRole.includes(role)) {
      return next();
    } else {
      throw new AppError("Não autorizado!", 401);
    }
  };
}

module.exports = verifyRoleAuthorization;
