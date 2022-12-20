import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_BLOGS } from '../../utils/queries';
import { UPDATE_BLOG, REMOVE_BLOG } from '../../utils/mutations';

const SingleBlog = ({ blogId }) => {
    
    const { loading, data } = useQuery(QUERY_BLOGS);
    const [updateBlog, { updateError }] = useMutation(UPDATE_BLOG);
    const [removeBlog, { removeError }] = useMutation(REMOVE_BLOG);

    const [formData, setFormData] = useState({
        blogId: blogId,
        title: '',
        bodyText: ''
    });

    const handleTitleChange = async event => {
        event.preventDefault();
        const title = event.target.value;
        setFormData({
            ...formData,
            title
        });
    };

    const handleBodyChange = async event => {
        event.preventDefault();
        const body = event.target.value;
        setFormData({
            ...formData,
            bodyText: body
        });
    };

    const handleFormSubmit = async event => {
        const { blogId, title, bodyText } = formData;
        event.preventDefault();

        try {
            await updateBlog({
                variables: { blogId, title, bodyText }
            });
        } catch (e) {
            console.error(e);
        }
        window.location.reload();
    }

    const handleRemove = async event => {
        const { blogId } = formData;

        try {
            await removeBlog({
                variables: { blogId }
            });
        } catch (e) {
            console.error(e);
        }
        window.location.reload();
    }

    return (
        <div className='home'>
            <div className='parent'>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div className='card-container'>
                        {data.blogs.map(blog =>
                            {if (blog._id === blogId) {
                                return (
                                    <div>
                                        <form className='post' onSubmit={handleFormSubmit}>
                                            <label htmlFor='title'>Blog title:</label>
                                            <input id='title' placeholder={blog.title} name='title' onChange={handleTitleChange} />
                                            <label htmlFor='body'>What's on your mind?</label>
                                            <textarea placeholder={blog.bodyText} onChange={handleBodyChange} />
                                            <button className='post-button'>Update your blog post</button>
                                        </form>
                                        <button 
                                            className='post-button'
                                            onClick={() => handleRemove()}    
                                        >Delete your post</button>
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

export default SingleBlog;