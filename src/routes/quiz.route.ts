import express, { IRouter } from 'express';
import quizController from '../controllers/quiz.controller';
import quizValidator from '../validators/quiz.validator';

class QuizRoutes {
  private QuizController = new quizController();
  private router = express.Router();
  private QuizValidator = new quizValidator();

  constructor() {
    this.routes();
  }

  private routes = () => {
    //route to get all quizs
    this.router.get('', this.QuizController.getAllQuizs);

    //route to create a new quiz
    this.router.post(
      '',
      this.QuizValidator.newQuiz,
      this.QuizController.newQuiz
    );

    //route to get a single quiz
    this.router.get('/:_id', this.QuizController.getQuiz);

    //route to update a single quiz
    this.router.put('/:_id', this.QuizController.updateQuiz);

    //route to delete a single quiz
    this.router.delete('/:_id', this.QuizController.deleteQuiz);
  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default QuizRoutes;
