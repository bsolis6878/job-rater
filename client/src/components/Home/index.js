import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_REVIEWS } from '../../utils/queries';;

const Home = ({ setCurrentlySelected }) => {

    const { loading, data } = useQuery(QUERY_REVIEWS)

    return (
        <div>
            {Auth.loggedIn() &&
                <p
                    id='flavor-text'
                    onClick={() => setCurrentlySelected('Review')}
                >Click here to post a review!</p>
            }
            {loading ? (
                <div>Loading...</div>
            ) : (
                data.reviews.map(review => 
                    <div className="card">
                        <h4>{review.employerName}</h4>
                        <p>{review.rating} / 5</p>
                        <p>{review.reviewText}</p>
                        <p>{review.username}</p>
                    </div>
                )
            )}
        </div>
    )
}

export default Home;