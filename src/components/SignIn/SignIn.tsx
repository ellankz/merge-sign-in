import Form from '../Form/Form';
import './SignIn.scss';

function SignIn() {
  return (
    <div className="sign-in">
      <h1>Sign in</h1>
      <p>Don’t have an account? <a href="/" className="sign-in__sign-up">Sign up now</a></p>
      <Form />
    </div>
  );
}

export default SignIn;