import 'reflect-metadata';
import 'express-async-errors';
import '../../../container';
import uploadConfig from '../../../../config/upload';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import router from '../routes';
import { errors } from 'celebrate';
import dotenv from 'dotenv';
import { dataSource } from '../../typeorm';
import AppError from '../../../errors/AppError';

dotenv.config();

dataSource
  .initialize()
  .then(() => {
    const app = express();
    const port = process.env.PORT || 3333;

    app.use(cors());
    app.use(express.json());
    app.use(router);
    app.use('/files', express.static(uploadConfig.directory));

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

    app.listen(port, () => {
      console.log('Server started on port 3333');
    });
  })
  .catch(error => console.log);
