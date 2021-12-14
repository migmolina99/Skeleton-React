import React, { useState, useEffect } from "react";
import SkeletonArticle from "../components/skeletons/SkeletonArticle";

const Articles = () => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setTimeout(async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setArticles(data.filter((post) => post.id <= 10));
    }, 2000);
  }, []);

  return (
    <section className="articles">
      <h2>Articles</h2>
      {articles.length > 0 &&
        articles.map((post) => (
          <article className="article" key={post.id}>
            <h3 className="article__title">{post.title}</h3>
            <p className="article__body">{post.body}</p>
          </article>
        ))}
      {articles.length === 0 && [1,2,3,4,5].map(e => <SkeletonArticle key={e} />)}
    </section>
  );
};

export default Articles;
