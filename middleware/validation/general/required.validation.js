const requiredFields = (fields) => {
  return (req, res, next) => {
    fields.forEach(field => {
      if (!req.body[field]) {
        next({
          statusCode: 400,
          errors: [{
            field,
            message: `${field} is required`
          }]
        });
      }
    });

    next();
  };
};

module.exports = {
  requiredFields
};
