const Header = ({ currentlySelected, setCurrentlySelected }) => {
    return (
        <header>
            <h1>Job Rater</h1>
            <nav>
                <h3
                    onClick={() => setCurrentlySelected('Home')}
                    className={currentlySelected === 'Home' && 'active-nav'}
                >Home</h3>
                <h3
                    onClick={() => setCurrentlySelected('Blogs')}
                    className={currentlySelected === 'Blogs' && 'active-nav'}
                >Blog posts</h3>
                <h3
                    onClick={() => setCurrentlySelected('Profile')}
                    className={currentlySelected === 'Profile' && 'active-nav'}
                >Your profile</h3>
            </nav>
        </header>
    );
};

export default Header;