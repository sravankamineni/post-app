import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PostItem from './PostItem';
import { setEditingPost,deletePost } from '../redux/postsSlice';
import { FaPlus } from 'react-icons/fa';
import '../index.css';

const PostsDisplay = () => {
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEdit = (post) => {
        dispatch(setEditingPost(post));
        navigate('/create');
    };

    const handleDelete = (postId) => {
        dispatch(deletePost(postId));
    };

    return (
        <div className="container">
            <div className="posts-display">
                {posts.map((post) => (
                    <PostItem key={post.id} post={post} onEdit={handleEdit} onDelete={handleDelete}/>
                ))}
            </div>
            <div className="create-post-button">
                <button onClick={() => navigate('/create')}>
                    <FaPlus /> Create Post
                </button>
            </div>
        </div>
    );
};

export default PostsDisplay;
