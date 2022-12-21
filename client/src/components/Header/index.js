import Auth from '../../utils/auth';

const Header = ({ setCurrentlySelected }) => {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
      };
    
    return (
        <header>
            <h1 onClick={() => setCurrentlySelected('Home')}>Job Rater</h1>
            <nav>
                <h3 onClick={() => setCurrentlySelected('Home')}>Home</h3>
                <h3 onClick={() => setCurrentlySelected('Blogs')}>Blog posts</h3>
                {Auth.loggedIn() ? (
                    <>
                        <h3 onClick={() => setCurrentlySelected('Profile')}>Your profile</h3>
                        <h3 onClick={logout}>Logout</h3>
                    </>
                ) : (
                    <>
                        <h3 onClick={() => setCurrentlySelected('Login')}>Login</h3>
                        <h3 onClick={() => setCurrentlySelected('Signup')}>Signup</h3>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;