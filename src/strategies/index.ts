import passport from 'passport';
import { Strategy } from 'passport-local';

passport.use(
  new Strategy((username, password) => {
    console.log('Inside passport strategy');
    console.log({ username, password });
  })
);
