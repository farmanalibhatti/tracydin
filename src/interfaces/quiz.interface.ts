import { IQuestion } from './question.interface';

export interface IQuiz {
  title: string;
  description: string;
  questions: IQuestion[];
}
