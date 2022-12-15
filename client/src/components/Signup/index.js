const Signup = () => {
    return (
        <div className='login-signup'>
            <p>Welcome to Job Rater! Fill out the form below to create your account.</p>
            <form>
                <label for='email'>Email</label>
                <input id='email' placeholder='Enter your email here'></input>
                <label for='username'>Username</label>
                <input id='username' placeholder='Enter your username here'></input>
                <label for='password'>Password</label>
                <input id='password' placeholder='Enter your password here'></input>
                <button type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Signup;