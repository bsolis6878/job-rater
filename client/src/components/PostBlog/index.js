import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_BLOG } from '../../utils/mutations';

const PostBlog = () => {
    const [addBlog, { error }] = useMutation(ADD_BLOG);

    const [formData, setFormData] = useState({
        title: '',
        bodyText: ''
    })

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
        const { title, bodyText } = formData;
        event.preventDefault();

        try {
            await addBlog({
                variables: { title, bodyText }
            });
        } catch (e) {
            console.error(e);
        }
        window.location.reload();
    }

    return (
        <form className='post' onSubmit={handleFormSubmit}>
            <label htmlFor='title'>Blog title:</label>
            <input id='title' placeholder='Enter title for blog post' name='title' onChange={handleTitleChange} />
            <label htmlFor='body'>What's on your mind?</label>
            <textarea placeholder="Don't be shy!" onChange={handleBodyChange} />
            <button className='post-button'>Make your blog post</button>
        </form>
    )
}

export default PostBlog;