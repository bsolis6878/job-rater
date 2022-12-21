import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Signup = () => {

    const [formState, setFormState] = useState({ username: '', email: '', password: '' });

    const [addUser, { error }] = useMutation(ADD_USER);
  
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
  
      // use try/catch instead of promises to handle errors
      try {
        // execute addUser mutation and pass in variable data from form
        const { data } = await addUser({
          variables: { ...formState }
        });
        
        Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);
      }
    };

    return (
        <div className='secondary-parent'>
          <div className='login-signup'>
              <h4>Welcome to Job Rater! Fill out the form below to create your account.</h4>
              <form onSubmit={handleFormSubmit}>
                  <label htmlFor='email'>Email</label>
                  <input 
                      id='email'
                      placeholder='Enter your email here'
                      name='email'
                      type='email'
                      value={formState.email}
                      onChange={handleChange}
                  />
                  <label htmlFor='username'>Username</label>
                  <input
                      id='username'
                      placeholder='Enter your username here'
                      name='username'
                      type='username'
                      value={formState.username}
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
                      Sign up
                  </button>
              </form>
              {error && <div>Sign up failed</div>}
          </div>
        </div>
    )
}

export default Signup;