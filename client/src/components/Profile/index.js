const Profile = ({ setCurrentlySelected }) => {
    return (
        <div className='profile'>
            <h4>Your posts</h4>
            <p>Will display all reviews and blog posts</p>
            <p 
                id='flavor-text'
                onClick={() => setCurrentlySelected('Review')}
            >Click here to post a review!</p>
        </div>
    )
}

export default Profile;