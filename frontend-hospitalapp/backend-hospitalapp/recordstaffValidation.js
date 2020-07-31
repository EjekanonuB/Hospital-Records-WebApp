const joi = require('@hapi/joi');

const recordstaffValidation = data => {
  const recordstaffValidationSchema = joi.object({
    username: joi.string().required(),
    password: joi.string().required(),
  });
  return recordstaffValidationSchema.validate(data);
};

module.exports.recordstaffValidation = recordstaffValidation;
