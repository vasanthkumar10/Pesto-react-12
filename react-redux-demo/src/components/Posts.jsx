import React, { useEffect, useState } from 'react'
import { fetchPosts } from '../redux/Posts/postActions'
import { useSelector, useDispatch } from 'react-redux'

export function Posts() {
    const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts/1')

    const post = useSelector((state) => state.post)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts(url))
    }, [url])



  return (
    <div>
        {post.loading && <h1>loading....</h1>}
        {!post.loading && post.error && <h1>Something went wrong</h1>}
        {!post.loading && !post.error && <h1>{JSON.stringify(post)}</h1>}
    </div>
  )
}