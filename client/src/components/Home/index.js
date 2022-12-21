import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_REVIEWS } from '../../utils/queries';

const Home = ({ setCurrentlySelected }) => {

    const { loading, data } = useQuery(QUERY_REVIEWS)

    return (
        <div className='home'>
            <div className='intro'>
                <h2>Welcome to Job Rater!</h2>
                <p>
                    Here at Job Rater we're passionate about hearing people's honest opinions on their
                    place of work. Had the worst experience working at Wendy's and want to let the
                    world know to steer clear? Or did you have the best time of your life working at
                    the car dealership and want to express your joy? Well you found just the place,
                    create an account now to join the conversation!
                </p>
            </div>
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
                                <div className="card-header">
                                    <h4>{review.employerName}</h4>
                                    <h4>{review.jobTitle}</h4>
                                </div>
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
        </div>
    )
}

export default Home;