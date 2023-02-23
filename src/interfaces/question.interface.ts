import { IAnswer } from './answer.interface';

export interface IQuestion {
  question: string;
  mandatory: boolean;
  answers: IAnswer[];
}
