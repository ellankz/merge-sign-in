import { useState } from 'react';
import './Form.scss';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
      <form action="/sign-in" method="post" className="form">
        <ul className="form__list">
          <li className="form__list__item">
            <label htmlFor="mail" className="form__label">Email</label>
            <input 
            type="email" 
            id="mail" 
            name="user_mail" 
            className="form__input" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
            />
          </li>
          <li className="form__list__item">
            <label htmlFor="pass" className="form__label">Password</label>
            <input 
            type="password" 
            id="pass" 
            name="user_mail" 
            className="form__input" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password}
            />
            <a href="/restore-pass" className="form__link-inside-input">Forgot your password?</a>
          </li>
          <li className="form__list__item">
            <button type="submit" className="button form__submit" disabled={email === '' || password === '' ? true : false}>Sign in</button>
          </li>
        </ul>
      </form>
  );
}

export default Form;