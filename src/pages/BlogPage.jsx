import { useState, useEffect } from "react";

const BlogsPage = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const urlPosts = 'https://jsonplaceholder.typicode.com/posts';
  
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
        <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
        </ul>
      </div>
    )
  }
}

export { BlogsPage };