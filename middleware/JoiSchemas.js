import { Joi } from 'celebrate';

/**
 * Request validation class
 */
class JoiSchemas {
  /**
   * Generates user sign up schema for input validation
   *
   * @returns {Object} - user JOI schema
   */
  static signUp() {
    return {
      body: {
        firstName: Joi.string().min(2).max(50).required()
          .trim(),
        lastName: Joi.string().min(2).max(50).required()
          .trim(),
        email: Joi.string().regex(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
          .required(),
        password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/)
          .required(),
      },
    };
  }

  /**
   * Generates user sign in schema for input validation
   *
   * @returns {Object} - user JOI schema
   */
  static signIn() {
    return {
      body: {
        email: Joi.string().regex(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
          .required(),
        password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/)
          .required(),
      },
    };
  }
}

export default JoiSchemas;
