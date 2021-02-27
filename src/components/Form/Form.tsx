import { ChangeEvent, useState } from 'react';
import './Form.scss';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailComplete, setEmailComplete] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [passwordComplete, setPasswordComplete] = useState(false);

  const emailValidationRegExp = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/;

  const validateEmail = () => {
    const valid = emailValidationRegExp.test(email);
    if (!valid) {
      setEmailError('Invalid email');
      setEmailComplete(false);
    } else {
      setEmailComplete(true);
      setEmailError('');
    }
  }

  const validatePassword = () => {
    const valid = password.length >= 5;
    if (!valid) {
      setPasswordError('Invalid format too short');
      setPasswordComplete(false);
    } else {
      setPasswordComplete(true);
      setPasswordError('');
    }
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement
    setEmail(input.value);
    if (emailError !== '') setEmailError('');
    if (emailComplete) setEmailComplete(false);
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement
    setPassword(input.value);
    if (passwordError !== '') setPasswordError('');
    if (passwordComplete) setPasswordComplete(false);
  }

  return (
      <form action="/sign-in" method="post" className="form">
        <ul className="form__list">
          <li className="form__list__item">
            <label htmlFor="mail" className="form__label">
              Email
              <div className={`form__label__error${emailError.length ? ' active' : ''}`}>{emailError}</div>
            </label>
            <input 
            type="email" 
            id="mail" 
            name="user_mail" 
            className={`form__input${emailError.length ? ' form__input_error' : ''}${emailComplete ? ' form__input_complete' : ''}`} 
            onChange={handleEmailChange}
            onBlur={validateEmail}
            value={email}
            />
          </li>
          <li className="form__list__item">
            <label htmlFor="pass" className="form__label">
              Password
              <div className={`form__label__error${passwordError.length ? ' active' : ''}`}>{passwordError}</div>
            </label>
            <input 
            type="password" 
            id="pass" 
            name="user_pass" 
            className={`form__input${passwordError.length ? ' form__input_error' : ''}${passwordComplete ? ' form__input_complete' : ''}`}
            onChange={handlePasswordChange}
            onBlur={validatePassword}
            value={password}
            />
            <a href="/restore-pass" className="form__link-inside-input">Forgot your password?</a>
          </li>
          <li className="form__list__item">
            <button type="submit" className="button form__submit" disabled={!passwordComplete || !emailComplete}>Sign in</button>
          </li>
        </ul>
      </form>
  );
}

export default Form;