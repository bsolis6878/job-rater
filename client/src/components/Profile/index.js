import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_REVIEWS, QUERY_BLOGS } from '../../utils/queries';

const Profile = ({ setBlogId, setReviewId, setCurrentlySelected }) => {
    const { loading: reviewLoading, data: reviewData } = useQuery(QUERY_REVIEWS);
    const { loading: blogLoading, data: blogData } = useQuery(QUERY_BLOGS);

    const user = Auth.getProfile().data.username;

    return (
        <div className='home'>
            <div className='parent' id='profile'>

                <div className='profile-buttons'>
                    <button
                        className='post-button'
                        onClick={() => setCurrentlySelected('Review')}
                    >Click here to post a review!</button>
                    <button
                        className='post-button'
                        onClick={() => setCurrentlySelected('BlogPost')}
                    >Click here to make your own blog post!</button>
                </div>

                <h4>Your reviews</h4>
                    {reviewLoading ? (
                        <div>Loading...</div>
                    ) : (
                        <div className='card-container'>
                            {reviewData.reviews.map(review =>
                                {if (review.username === user) {
                                    return (
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
                                            <p
                                                id='pointer'
                                                onClick={() => {
                                                    setReviewId(review._id)
                                                    setCurrentlySelected('SingleReview')
                                                }}>
                                                Click here to edit this review!
                                            </p>
                                        </div>
                                    </div>
                                    )
                                }}
                            )}
                        </div>
                    )}

                <h4>Your blog posts</h4>
                    {blogLoading ? (
                        <div>Loading...</div>
                    ) : (
                        <div className='card-container'>
                            {blogData.blogs.map(blog =>
                                {if (blog.username === user) {
                                    return (
                                        <div className="card">
                                            <h4 className="card-header">{blog.title}</h4>
                                            <div className="card-body">
                                                <p>{blog.bodyText}</p>
                                            </div>
                                            <div className="card-header">
                                                <p>From {blog.username} on {blog.createdAt}</p>
                                                <p
                                                    id='pointer'
                                                    onClick={() => {
                                                        setBlogId(blog._id)
                                                        setCurrentlySelected('SingleBlog')
                                                    }}>
                                                    Click here to edit this blog post!
                                                </p>
                                            </div>
                                        </div>
                                    )
                                }}
                            )}
                        </div>
                    )}
            </div>
        </div>
    )
}

export default Profile;