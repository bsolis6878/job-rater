const PostBlog = () => {
    return (
        <form className='post'>
        <label htmlFor='title'>Blog title:</label>
        <input id='title' placeholder='Enter title for blog post' name='title' />
        <label htmlFor='body'>What's on your mind?</label>
        <textarea placeholder="Don't be shy!" />
        <button>Make your blog post</button>
    </form>
    )
}

export default PostBlog;