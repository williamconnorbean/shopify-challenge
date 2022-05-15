const { isValidInputText } = require("../util/regex-helper");

const MIN_LENGTH = 1;
const MAX_NAME_LENGTH = 100;
const MAX_DESCRIPTION_LENGTH = 250;
const MAX_COMMENT_LENGTH = 500;

const validateProductBody = () => {
  return (req, res, next) => {
    const errors = [];

    const {
      name,
      description,
      salePrice,
      costPrice,
      stock,
      isDeleted
    } = req.body;

    if (name && !isValidInputText(name, MIN_LENGTH, MAX_NAME_LENGTH))
      errors.push({ field: 'name', message: `name must be between ${MIN_LENGTH} and ${MAX_NAME_LENGTH} characters`});
    if (description && !isValidInputText(description, MIN_LENGTH, MAX_DESCRIPTION_LENGTH))
      errors.push({ field: 'description', message: `description must be between ${MIN_LENGTH} and ${MAX_DESCRIPTION_LENGTH} characters`});
    if (salePrice && (isNaN(salePrice) || salePrice <= 0))
      errors.push({ field: 'salePrice', message: `salePrice must be a number greater than 0`});
    if (costPrice && (isNaN(costPrice) || costPrice <= 0))
      errors.push({ field: 'costPrice', message: `costPrice must be a number greater than 0`});
    if (stock && (isNaN(stock) || stock < 0))
      errors.push({ field: 'stock', message: `stock must be a number greater than or equal to 0`});
    if (isDeleted && typeof isDeleted != 'boolean')
      errors.push({ field: 'isDeleted', message: `isDeleted must be a boolean`});

    if (errors.length > 0) {
      next({
        statusCode: 400,
        errors
      });
    }

    next();
  }
};

const validateComment = () => {
  return (req, res, next) => {
    const {
      commentText
    } = req.body;

    if (commentText && !isValidInputText(commentText, MIN_LENGTH, MAX_COMMENT_LENGTH)) {
      next({
        statusCode: 400,
        errors: [{
          field: 'commentText',
          message: `commentText must be between ${MIN_LENGTH} and ${MAX_COMMENT_LENGTH} characters`
        }]
      });
    }

    next();
  }
};

module.exports = {
  validateProductBody,
  validateComment
};
