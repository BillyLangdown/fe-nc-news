import { Link } from "react-router-dom";

export default function ArticlePreview({ article }) {
  return (
    <Link to={`/articles/${article.article_id}`} className="text-decoration-none">
      <div className="container p-3 border rounded mb-3 overflow-x-hidden">
        <div className="row">
          <div className="col-12 col-md-4 overflow-hidden">
            <img
              src={article.article_img_url}
              alt={article.title}
              className="img-fluid article-size mw-100"
            />
          </div>
          <div className="col-12 col-md-8 d-flex flex-column justify-content-center">
            <h4 className="h5 mb-1">{article.title}</h4>
            <p className="mb-1">Topic: {article.topic}</p>
            <p className="mb-1">Votes: {article.votes}</p>
            <p className="mb-0">Date: {new Date(article.created_at).toISOString().slice(0, 10)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
