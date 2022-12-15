const Header = ({ setCurrentlySelected }) => {
    return (
        <header>
            <h1>Job Rater</h1>
            <nav>
                <h3
                    onClick={() => setCurrentlySelected('Home')}
                >Home</h3>
                <h3
                    onClick={() => setCurrentlySelected('Blogs')}
                >Blog posts</h3>
                <h3
                    onClick={() => setCurrentlySelected('Profile')}
                >Your profile</h3>
            </nav>
        </header>
    );
};

export default Header;