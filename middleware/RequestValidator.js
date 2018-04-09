import { Joi } from 'celebrate';

/**
 * Request validation class
 */
class RequestValidation {
  /**
   * Generates user schema for validation
   *
   * @returns {Object} - user JOI schema
   */
  static userSchema() {
    return {
      body: Joi.object().keys({
        firstName: Joi.string().min(2).max(50).required()
          .trim(),
        lastName: Joi.string().min(2).max(50).required()
          .trim(),
        email: Joi.string().regex(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
          .required(),
        password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/)
          .required(),
      }),
    };
  }
}

export default RequestValidation;
