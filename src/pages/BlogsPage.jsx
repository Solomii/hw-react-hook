import React, { useState, useEffect } from "react";

const BlogsPage = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const urlPosts = 'https://gorest.co.in/public/v2/posts';
  
  useEffect(() => {
    fetch(urlPosts)
      .then(res => res.json())
      .then((data) => {
        setPosts(data)
      },
         (error) => {
          setError(error);
        }
     ) 
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div>
        <h1>Blogs Page</h1>
        <ol>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
        </ol>
      </div>
    )
  }
}

export { BlogsPage };