const AppError = require("../utils/AppError");

//adicionar em rotas que não terão permissão de admin

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
