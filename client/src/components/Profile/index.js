import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_REVIEWS, QUERY_BLOGS } from '../../utils/queries';

const Profile = ({ setCurrentlySelected }) => {
    const { loading: reviewLoading, data: reviewData } = useQuery(QUERY_REVIEWS);
    const { loading: blogLoading, data: blogData } = useQuery(QUERY_BLOGS);

    const user = Auth.getProfile().data.username;

    return (
        <div className='parent'>
            <button
                className='post-button'
                onClick={() => setCurrentlySelected('Review')}
            >Click here to post a review!</button>
            <button
                className='post-button'
                onClick={() => setCurrentlySelected('BlogPost')}
            >Click here to make your own blog post!</button>

            <h4>Your reviews</h4>
                {reviewLoading ? (
                    <div>Loading...</div>
                ) : (
                    <div className='card-container'>
                        {reviewData.reviews.map(review => 
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

            <h4>Your blog posts</h4>
                {blogLoading ? (
                    <div>Loading...</div>
                ) : (
                    <div className='card-container'>
                        {blogData.blogs.map(blog =>
                            <div className="card">
                                <h4 className="card-header">{blog.title}</h4>
                                <div className="card-body">
                                    <p>{blog.bodyText}</p>
                                </div>
                                <div className="card-header">
                                    <p>From {blog.username} on {blog.createdAt}</p>
                                </div>
                            </div>
                        )}
                    </div>
                )}
        </div>
    )
}

export default Profile;