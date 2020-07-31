const joi = require('@hapi/joi');

const clinicalstaffValidation = data => {
  const clinicalstaffValidationSchema = joi.object({
    username: joi.string().required(),
    password: joi.string().required(),
  });
  return clinicalstaffValidationSchema.validate(data);
};
module.exports.clinicalstaffValidation = clinicalstaffValidation;
