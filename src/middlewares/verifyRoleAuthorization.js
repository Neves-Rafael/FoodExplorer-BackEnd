const AppError = require("../utils/AppError");

//adicionar em rotas que não terão permissão de admin

export function verifyRoleAuthorization(verifyRole) {
  return (request, response, next) => {
    const { user } = request.user;

    if (role !== verifyRole) {
      throw new AppError("Não autorizado!", 401);
    }

    return next();
  };
}
