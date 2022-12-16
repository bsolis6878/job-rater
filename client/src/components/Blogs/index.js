import Auth from '../../utils/auth';

const Blogs = ({ setCurrentlySelected }) => {
    return (
        <div>
            {Auth.loggedIn() &&
                <p
                    id='flavor-text'
                    onClick={() => setCurrentlySelected('BlogPost')}
                >Click here to make your own blog post!</p>
            }
            <div className="card">
                <h4>Blog post title</h4>
                <p>Body of blog post</p>
                <p>Username</p>
            </div>
        </div>
    )
}

export default Blogs;