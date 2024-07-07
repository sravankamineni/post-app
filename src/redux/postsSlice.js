import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [{
            id: Date.now(),
            title: "Sravan",
            content: "Sravan's First Post",
        }, {
                id: Date.now(),
                title: "Sravan",
                content: "Sravan's Second Post",
            }],
        editingPost: null,
    },
    reducers: {
        addPost: (state, action) => {
            const newPost = {
                id: Date.now(),
                title: action.payload.title,
                content: action.payload.content,
            };
            state.posts.push(newPost);
        },
        updatePost: (state, action) => {
            const index = state.posts.findIndex(post => post.id === action.payload.id);
            if (index !== -1) {
                state.posts[index] = action.payload;
            }
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload);
        },
        setEditingPost: (state, action) => {
            state.editingPost = action.payload;
        },
        clearEditingPost: (state) => {
            state.editingPost = null;
        },
    },
});

export const { addPost, updatePost, deletePost, setEditingPost, clearEditingPost } = postsSlice.actions;
export default postsSlice.reducer;
