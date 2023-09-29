const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')
const axios = require('axios')

const initialState = {
    loading: false,
    data: {},
    error: null
}

const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    try {
        const posts = await axios.get('https://jsonplaceholder.typicode.com/psts/1');
        const data = posts.data;
        return data;
    } catch(err) {
        // console.log('error', err);
        throw new Error(err.message)
    }
})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.loading = true;
        }),
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        }),
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.data = {};
            state.error = action.error.message;
        })
    }
})

module.exports = {
    postsReducer: postsSlice.reducer,
    fetchPosts
}