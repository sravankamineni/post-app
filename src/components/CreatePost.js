import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, updatePost, clearEditingPost } from '../redux/postsSlice';
import { useNavigate } from 'react-router-dom';
import { FaCheck, FaSave } from 'react-icons/fa';
import '../index.css';

const CreatePost = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const editingPost = useSelector((state) => state.editingPost);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (editingPost) {
            setTitle(editingPost.title);
            setContent(editingPost.content);
        }
    }, [editingPost]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingPost) {
            dispatch(updatePost({ ...editingPost, title, content }));
            dispatch(clearEditingPost());
        } else {
            dispatch(addPost({ title, content }));
        }
        navigate('/');
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>{editingPost ? 'Edit Post' : 'Create Post'}</h1>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                ></textarea>
                <button type="submit">
                    {editingPost ? <><FaSave /> Update</> : <><FaCheck /> Create</>}
                </button>
            </form>
        </div>
    );
};

export default CreatePost;
