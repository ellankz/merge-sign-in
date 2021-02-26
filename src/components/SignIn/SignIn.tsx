import Form from '../Form/Form';
import './SignIn.scss';

function SignIn() {
  return (
    <div className="SignIn">
      <h1>Sign in</h1>
      <p>Don’t have an account? <a href="/">Sign up now</a></p>
      <Form />
    </div>
  );
}

export default SignIn;