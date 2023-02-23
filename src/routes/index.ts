import express, { IRouter } from 'express';
const router = express.Router();

import quizRoute from './quiz.route';

/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = (): IRouter => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/quiz', new quizRoute().getRoutes());
  return router;
};

export default routes;
