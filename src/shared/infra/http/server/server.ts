import express from 'express';
import cors from 'cors';
import router from '../routes';
import dotenv from 'dotenv';
import { dataSource } from '@shared/infra/typeorm';


dataSource.initialize().then(() => {
  const app = express();
  
  app.use(cors());
  app.use(express.json());
  app.use(router)
  
  app.listen(3333, () => {
    console.log('Server started on port 3333');
  })
});
