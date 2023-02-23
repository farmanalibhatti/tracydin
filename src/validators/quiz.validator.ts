import Joi from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';

class QuizValidator {
  public newQuiz = (req: Request, res: Response, next: NextFunction): void => {
    const schema = Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
      questions: Joi.array()
        .items({
          question: Joi.string().required(),
          mandatory: Joi.boolean().required(),
          answers: Joi.array().items({
            answer: Joi.string().required(),
            valid: Joi.boolean().required()
          })
        })
        .required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    }
    next();
  };
}

export default QuizValidator;
