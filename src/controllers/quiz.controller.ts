/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpStatus from 'http-status-codes';
import quizService from '../services/quiz.service';

import { Request, Response, NextFunction } from 'express';
import { ResponseBuilder } from '../utils/response-builder.util';

class QuizController {
  public QuizService = new quizService();

  /**
   * Controller to get all quizs available
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public getAllQuizs = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.QuizService.getAllQuizs();
      res.status(HttpStatus.OK).send(new ResponseBuilder(data));
    } catch (error) {
      next(new ResponseBuilder([]).err([error.status]));
    }
  };

  /**
   * Controller to get a quiz
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public getQuiz = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.QuizService.getQuiz(req.params._id);
      res.status(HttpStatus.OK).send(new ResponseBuilder(data));
    } catch (error) {
      next(new ResponseBuilder([]).err([error.status]));
    }
  };

  /**
   * Controller to create new quiz
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public newQuiz = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.QuizService.newQuiz(req.body);
      res.status(HttpStatus.CREATED).send(new ResponseBuilder(data));
    } catch (error) {
      next(new ResponseBuilder([]).err([error.status]));
    }
  };

  /**
   * Controller to update a quiz
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public updateQuiz = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.QuizService.updateQuiz(req.params._id, req.body);
      const response = new ResponseBuilder(data);
      res.status(HttpStatus.ACCEPTED).send(response.err([404]));
    } catch (error) {
      next(new ResponseBuilder([]).err([error.status]));
    }
  };

  /**
   * Controller to delete a single quiz
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public deleteQuiz = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.QuizService.deleteQuiz(req.params._id);
      console.log(typeof data, data);
      res.status(HttpStatus.OK).send(new ResponseBuilder({}));
    } catch (error) {
      next(new ResponseBuilder([]).err([error.status]));
    }
  };
}

export default QuizController;
