import Auth from '../../utils/auth';

const Home = ({ setCurrentlySelected }) => {
    return (
        <div>
            {Auth.loggedIn() &&
                <p
                    id='flavor-text'
                    onClick={() => setCurrentlySelected('Review')}
                >Click here to post a review!</p>
            }
            <div className="card">
                <h4>Name of company</h4>
                <p>Number of stars</p>
                <p>Body of review, will trail off with elipses</p>
                <p>Username</p>
            </div>
        </div>
    )
}

export default Home;