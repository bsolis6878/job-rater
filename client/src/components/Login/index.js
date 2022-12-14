import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });

    const [login, { error }] = useMutation(LOGIN_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const { data } = await login({
          variables: { ...formState }
        });
  
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
  
      // clear form values
      setFormState({
        email: '',
        password: '',
      });
    };

    return (
        <div className='secondary-parent'>
          <div className='login-signup'>
              <h4>Login to continue.</h4>
              <form onSubmit={handleFormSubmit}>
                <label htmlFor='email'>Email</label>
                <input 
                    id='email'
                    placeholder='Enter your email here'
                    type='email'
                    name='email'
                    value={formState.email}
                    onChange={handleChange}
                />
                <label htmlFor='password'>Password</label>
                <input 
                    id='password'
                    placeholder='Enter your password here'
                    name='password'
                    type='password'
                    value={formState.password}
                    onChange={handleChange}
                />
                <button type='submit' className='secondary-button'>
                    Login
                </button>
              </form>
              {error && <div>Login failed</div>}
          </div>
        </div>
    )
}

export default Login;