import 'dotenv/config';
import 'reflect-metadata';
import './strategies';

import express from 'express';
import passport from 'passport';
import session from 'express-session';
import { TypeormStore } from 'connect-typeorm';

import routes from './routes';
import { AppDataSource } from './database';
import { SessionRepository } from './database/repositories';

async function main() {
  const app = express();
  const PORT = process.env.PORT || 3001;
  app.use(express.json());
  app.use(
    session({
      name: 'TRAVEL_PLANNER_APP_SESSION_ID',
      secret: 'asdfghjkl',
      saveUninitialized: false,
      resave: false,
      cookie: {
        maxAge: 3600000 * 24
      },
      store: new TypeormStore().connect(SessionRepository)
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use('/api', routes);
  try {
    await AppDataSource.initialize();
    app.listen(PORT, () =>
      console.log(`Listening to requests on PORT ${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
}

main();
