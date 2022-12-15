const Review = () => {
    return (
        <form className='review'>
            <label htmlFor='name'>What is the name of the company you worked for?</label>
            <input id='name' placeholder='Name of company' name='name' />
            <label htmlFor='rating'>
                Overall, how would you rate your experience with this place of employment?
            </label>
            <input id='rating' name='rating' type='number' min='1' max='5' 
                onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                }
                }}
            />
            <p>Tell us about your experience!</p>
            <textarea />
            <button>Post your review</button>
        </form>
    )
}

export default Review;