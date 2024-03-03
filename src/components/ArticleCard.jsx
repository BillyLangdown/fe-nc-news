import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticleById } from "./Utils/api";
import Comments from "./Comments";
import Votes from "./Votes";

export default function ArticleCard() {
  const [isLoadingArticle, setIsLoadingArticle] = useState(true);
  const [article, setArticle] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((individualArticle) => {
      setArticle(individualArticle);
      setIsLoadingArticle(false);
    });
  }, [article_id]);

  if (isLoadingArticle) {
    return (
      <p className="col-12 text-center lead mt-5">
        The world's most interesting article is loading... Please wait.
      </p>
    );
  }



  return (
    <div className="container p-3 bg-light">
      <div className="m-3">
        <h5 className="display-5">{article.title}</h5>
        <p className="">{new Date(article.created_at).toISOString().slice(0, 10)}</p>
      </div>
      <div className="d-flex justify-content-center m-3">
        <img className="img-fluid rounded" src={article.article_img_url} alt="Article" />
      </div>
      <p className="lead m-3">{article.body}</p>
      <div className="d-flex justify-content-between align-items-center">
        <Votes article={article} article_id={article_id} />
        <p className="lead">Comments: {article.comment_count}</p>
      </div>
      <Comments />
    </div>
  );
}

