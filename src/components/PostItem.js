import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import '../index.css';

const PostItem = ({ post, onEdit,onDelete }) => {
    return (
        <div className="post-item">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div className='buttons-cont'>
                <button onClick={() => onEdit(post)} className="edit-button">
                    <FaEdit /> Edit
                </button>
                <button onClick={() => onDelete(post.id)} className="delete-button">
                    <FaTrashAlt /> Delete
                </button>
            </div>
          
        </div>
    );
};

export default PostItem;
