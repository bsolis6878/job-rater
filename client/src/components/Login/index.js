const Login = () => {
    return (
        <div className='login-signup'>
            <p>Login to continue.</p>
            <form>
                <label for='username'>Username</label>
                <input id='username' placeholder='Enter your username here'></input>
                <label for='password'>Password</label>
                <input id='password' placeholder='Enter your password here'></input>
                <button type='submit'>
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login;