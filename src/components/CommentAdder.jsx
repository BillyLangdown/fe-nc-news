import { useState } from "react";
import { postCommentOnArticle } from "./Utils/api";

export default function CommentAdder({ article_id, onNewComment }) {
  const [newComment, setNewComment] = useState("");
  const [isLoadingNewComment, setIsLoadingNewComment] = useState(false);
  const [error, setError] = useState(false);
  const [disabledInput, setDisabledInput] = useState(false);

  function handleSubmit(event) {
    setIsLoadingNewComment(true);
    setDisabledInput(true);
    event.preventDefault();
    onNewComment(newComment);
    postCommentOnArticle(article_id, newComment)
      .then(() => {
        setIsLoadingNewComment(false);
        setDisabledInput(false);
        setNewComment("");
      })
      .catch((err) => {
        if (err) {
          setIsLoadingNewComment(false);
          setError(true);
        }
      });
  }

  if (isLoadingNewComment) {
    return <p className="lead mt-4">Posting... please wait!</p>;
  }

  if (error) {
    return (
      <p className="lead mt-4">
        Sorry! We are having problems posting your comment at the moment, try again later!
      </p>
    );
  }

  return (
    <div className="d-flex justify-content-center mt-3">
      <form className="w-75" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="comment-input" className="form-label">
            Add Comment:
          </label>
          <input
            type="text"
            className="form-control"
            id="comment-input"
            disabled={disabledInput}
            value={newComment}
            onChange={(event) => {
              setNewComment(event.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-xsm">
          Submit
        </button>
      </form>
    </div>
  );
}
