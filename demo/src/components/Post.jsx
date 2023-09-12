import React, { useState, useEffect } from "react";
import axios from "axios";

export function Post() {
  const [postId, setPostId] = useState(1);
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  //   perfect place for API call (side effects)
  //   useEffect will be called whenever state changes
  //   useEffect(() => {
  //     console.log("in useEffect", postId);
  //     async function getData() {
  //       const { data } = await axios.get(
  //         `https://jsonplaceholder.typicode.com/posts/${postId}`
  //       );
  //       setData(data);
  //     }
  //     getData();
  //   }, []); // [] -> empty dependency array -> will run only once (initial render)(componentDidMount)

  useEffect(() => {
    console.log("in useEffect", postId);
    async function getData() {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      setData(data);
    }
    getData();
  }, [postId]); // change only if postId changes

  const handlePostId = (e) => {
    setPostId(e.target.value);
    // console.log("in fn", postId);
  };

  //   const handleSubmit = async () => {
  //     const { data } = await axios.get(
  //       `https://jsonplaceholder.typicode.com/posts/${postId}`
  //     );
  //     setData(data);
  //   };

  return (
    <div>
      <h2>Post ID - {postId}</h2>
      <input type="number" value={postId} onChange={handlePostId} />
      {/* <button onClick={handleSubmit}>submit</button> */}
      <h3>{JSON.stringify(data)}</h3>

      <h2>Count - {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
    </div>
  );
}
