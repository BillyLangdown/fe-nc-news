import ArticlePreview from "./ArticlePreview";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ListOfArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://nc-news-api-vw2o.onrender.com/api/articles")
      .then(({ data }) => {
        return setArticles(data.articles);
      });
  }, []);

  return (
    <div id="list">
      {articles.map((article) => {
        return <ArticlePreview key={article.article_id} article={article} />;
      })}
    </div>
  );
}
