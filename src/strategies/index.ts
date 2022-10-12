import passport from 'passport';
import { Strategy } from 'passport-local';
import { findUser } from '../services/user';
import { validatePassword } from '../utils/helpers';

passport.use(
  new Strategy(async (username, password, done) => {
    console.log('Inside passport strategy');
    console.log({ username, password });
    try {
      const user = await findUser({ username }, { selectAll: true });
      if (!user) return done(null, null);
      console.log(user);
      const validPassword = validatePassword(password, user.password);
      if (!validPassword) throw new Error('Invalid Credentials');
      done(null, user);
    } catch (err) {
      return done(err, null);
    }
  })
);
