import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_BLOGS } from '../../utils/queries';

const Blogs = ({ setCurrentlySelected }) => {

    const { loading, data } = useQuery(QUERY_BLOGS)

    return (
        <div className='home'>
            <div className='intro'>
                <h2>Welcome to the blog post section!</h2>
                <p>
                    Feel free to discuss any work related thoughts that come to mind!
                </p>
            </div>
            <div className='parent'>
                {Auth.loggedIn() &&
                    <button
                        className='post-button'
                        onClick={() => setCurrentlySelected('BlogPost')}
                    >Click here to make your own blog post!</button>
                }
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div className='card-container'>
                        {data.blogs.map(blog =>
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
        </div>
    )
}

export default Blogs;