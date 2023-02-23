import Quiz from '../models/quiz.model';
import { IQuiz } from '../interfaces/quiz.interface';

class QuizService {
  //get all quizs
  public getAllQuizs = async (): Promise<IQuiz[]> => {
    const data = await Quiz.find();
    return data;
  };

  //create new quiz
  public newQuiz = async (body: IQuiz): Promise<IQuiz> => {
    const data = await Quiz.create(body);
    return data;
  };

  //update a quiz
  public updateQuiz = async (_id: string, body: IQuiz): Promise<IQuiz> => {
    const data = await Quiz.findByIdAndUpdate(
      {
        _id
      },
      body,
      {
        new: true
      }
    );
    return data;
  };

  //delete a quiz
  public deleteQuiz = async (_id: string): Promise<string> => {
    await Quiz.findByIdAndDelete(_id);
    return '';
  };

  //get a single quiz
  public getQuiz = async (_id: string): Promise<IQuiz> => {
    const data = await Quiz.findById(_id);
    return data;
  };
}

export default QuizService;
