import ArticlePreview from "./ArticlePreview";
import { useState, useEffect } from "react";
import { getArticles } from "./Utils/api";
import { useParams } from "react-router";
import ArticlesSorter from "./ArticlesSorter";

export default function ListOfArticles() {
  const { topic } = useParams();

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortedArticles, setSortedArticles] = useState([]);

  useEffect(() => {
    getArticles(topic).then((response) => {
      setArticles(response);
      setIsLoading(false);
    });
  }, [topic]);

  function handleSort(sorted){
    setSortedArticles(sorted);
  };

  return (
    <>
      <ArticlesSorter articles={articles} onSort={handleSort} />

      <div id="list" className="container">
        {sortedArticles.length > 0
          ? sortedArticles.map((article) => (
              <ArticlePreview
                className="row col"
                key={article.article_id}
                article={article}
              />
            ))
          : articles.map((article) => (
              <ArticlePreview
                className="row col"
                key={article.article_id}
                article={article}
              />
            ))}
      </div>
    </>
  );
}
