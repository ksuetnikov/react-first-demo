import React, { useState, useEffect } from "react";

import styles from "./Articles.module.scss";

const Articles = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        console.log(data);
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div style={{ padding: "20px, 40px", marginLeft: "40px" }}>
      <h1>Articles</h1>
      {loading && "Загрузка..."}
      <div className={styles.wrapper}>
        {posts.map((post) => (
          <div key={post.id} className={styles.card}>
            <img src="" alt="" />
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <a href="/">Read now</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
