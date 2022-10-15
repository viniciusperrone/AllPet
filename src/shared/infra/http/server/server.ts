import 'reflect-metadata';
import 'express-async-errors';
import '@shared/container';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import router from '../routes';
import { errors } from 'celebrate';
import dotenv from 'dotenv';
import { dataSource } from '@shared/infra/typeorm';
import AppError from '@shared/errors/AppError';

dataSource.initialize().then(() => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(router);

  app.use(errors());
  app.use(
    (
      error: Error,
      request: Request,
      response: Response,
      next: NextFunction,
    ) => {
      if (error instanceof AppError) {
        return response.status(error.statusCode).json({
          status: 'error',
          message: error.message,
        });
      }

      return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
    },
  );

  app.listen(3333, () => {
    console.log('Server started on port 3333');
  });
});
