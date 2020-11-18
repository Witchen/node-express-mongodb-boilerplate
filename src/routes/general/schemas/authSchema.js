import { Joi, Segments } from 'celebrate';

const authSchema = {
  [Segments.BODY]: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
};

export default authSchema;
