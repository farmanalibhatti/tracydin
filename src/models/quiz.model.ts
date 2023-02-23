import { Schema, model } from 'mongoose';
import { IQuiz } from '../interfaces/quiz.interface';

const quizSchema = new Schema(
  {
    title: String,
    description: String,
    questions: [
      {
        question: String,
        mandatory: Boolean,
        answers: [
          {
            answer: String,
            valid: Boolean
          }
        ]
      }
    ]
  },
  {
    timestamps: true
  }
);

export default model<IQuiz>('Quiz', quizSchema);
