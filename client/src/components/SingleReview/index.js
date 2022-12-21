import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_REVIEWS } from '../../utils/queries';
import { UPDATE_REVIEW, REMOVE_REVIEW } from '../../utils/mutations';

const SingleReview = ({ reviewId }) => {
    const { loading, data } = useQuery(QUERY_REVIEWS);
    const [updateReview, { updateError }] = useMutation(UPDATE_REVIEW);
    const [removeReview, { removeError }] = useMutation(REMOVE_REVIEW);

    const review = {
        reviewId: reviewId,
        employerName: '',
        rating: null,
        reviewText: '',
        jobTitle: ''
    }

    data.reviews.forEach((reviewData) => {
        if (reviewData._id === reviewId) {
            review.employerName = reviewData.employerName;
            review.rating = reviewData.rating;
            review.reviewText = reviewData.reviewText;
            review.jobTitle = reviewData.jobTitle;
        }
    })

    const [formData, setFormData] = useState(review);

    const handleReviewChange = async event => {
        const review = event.target.value;
        setFormData({
            ...formData,
            reviewText: review
        })
    }

    const handleNameChange = async event => {
        event.preventDefault();
        const name = event.target.value;
        setFormData({
            ...formData,
            employerName: name
        })
    }

    const handleRatingChange = async event => {
        event.preventDefault();
        const rating = parseInt(event.target.value);
        setFormData({
            ...formData,
            rating
        })
    }

    const handleTitleChange = async event => {
        event.preventDefault();
        const title = event.target.value;
        setFormData({
            ...formData,
            jobTitle: title
        })
    }

    const handleFormSubmit = async event => {
        const { reviewId, employerName, rating, reviewText, jobTitle } = formData;
        event.preventDefault();
        
        try {
            await updateReview({
                variables: { reviewId, employerName, rating, reviewText, jobTitle }
            });
        } catch (e) {
            console.error(e);
        }
        window.location.reload();
    };

    const handleRemove = async event => {
        const { reviewId } = formData;

        try {
            await removeReview({
                variables: { reviewId }
            });
        } catch (e) {
            console.error(e);
        }
        window.location.reload();
    }

    return (
        <div className='home'>
            <div className='secondary-parent'>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div className='card-container'>
                        <div>
                            <form className='post' onSubmit={handleFormSubmit}>
                                <label htmlFor='name'>What is the name of the company you worked for?</label>
                                <input id='name' defaultValue={review.employerName} name='name' onChange={handleNameChange} />
                                <label htmlFor='title'>What was the role you had in this company?</label>
                                <input id='title' defaultValue={review.jobTitle} name='title' onChange={handleTitleChange} />
                                <label htmlFor='rating'>
                                    Overall, how would you rate your experience with this place of employment?
                                </label>
                                <p>1 being the lowest rating, and 5 being the highest.</p>
                                <input id='rating' name='rating' type='number' min='1' max='5' defaultValue={review.rating} 
                                    onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                    }}
                                    onChange={handleRatingChange}
                                />
                                <p>Tell us about your experience!</p>
                                <textarea onChange={handleReviewChange}>{review.reviewText}</textarea>
                                <button className='post-button'>Update your review</button>
                            </form>
                            <button 
                                className='secondary-button'
                                onClick={() => handleRemove()}    
                            >Delete your review</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SingleReview;