import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_REVIEW } from '../../utils/mutations';

const Review = () => {
    const [addReview, { error }] = useMutation(ADD_REVIEW);

    const [formData, setFormData] = useState({
        employerName: '',
        rating: null,
        reviewText: '',
        jobTitle: ''
    });

    const handleReviewChange = async event => {
        event.preventDefault();
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
        const { employerName, rating, reviewText, jobTitle } = formData;
        event.preventDefault();
        
        try {
            await addReview({
                variables: { employerName, rating, reviewText, jobTitle }
            });
        } catch (e) {
            console.error(e);
        }
        window.location.reload();
    };

    return (
        <form className='post' onSubmit={handleFormSubmit}>
            <label htmlFor='name'>What is the name of the company you worked for?</label>
            <input id='name' placeholder='Name of company' name='name' onChange={handleNameChange} />
            <label htmlFor='title'>What was the role you had in this company?</label>
            <input id='title' placeholder='Role in company' name='title' onChange={handleTitleChange} />
            <label htmlFor='rating'>
                Overall, how would you rate your experience with this place of employment?
            </label>
            <p>1 being the lowest rating, and 5 being the highest.</p>
            <input id='rating' name='rating' type='number' min='1' max='5' placeholder='1' 
                onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                }
                }}
                onChange={handleRatingChange}
            />
            <p>Tell us about your experience!</p>
            <textarea placeholder="Don't be shy!" onChange={handleReviewChange} />
            <button className='post-button'>Post your review</button>
        </form>
    )
}

export default Review;