import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_BLOGS } from '../../utils/queries';

const Blogs = ({ setCurrentlySelected }) => {

    const { loading, data } = useQuery(QUERY_BLOGS)

    return (
        <div>
            {Auth.loggedIn() &&
                <p
                    id='flavor-text'
                    onClick={() => setCurrentlySelected('BlogPost')}
                >Click here to make your own blog post!</p>
            }
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className='card-container'>
                    {data.blogs.map(blog =>
                        <div className="card">
                            <h4>{blog.title}</h4>
                            <p>{blog.bodyText}</p>
                            <p>From {blog.username} on {blog.createdAt}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Blogs;