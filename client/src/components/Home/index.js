import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_REVIEWS } from '../../utils/queries';

const Home = ({ setCurrentlySelected }) => {

    const { loading, data } = useQuery(QUERY_REVIEWS)

    return (
        <div className='parent'>
            {Auth.loggedIn() &&
                <button
                    className='post-button'
                    onClick={() => setCurrentlySelected('Review')}
                >Click here to post a review!</button>
            }
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className='card-container'>
                    {data.reviews.map(review => 
                        <div className="card">
                            <h4 className="card-header">{review.employerName}</h4>
                            <div className="card-body">
                                <p>{review.rating} out of 5 stars</p>
                                <p>{review.reviewText}</p>
                            </div>
                            <div className="card-header">
                                <p>{review.username} on {review.createdAt}</p>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Home;