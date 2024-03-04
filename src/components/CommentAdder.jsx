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
<div className="mt-3">
  <form className="d-flex justify-content-around flex-direction-row align-items-center" onSubmit={handleSubmit}>
    <div className="" style={{ width: '80%' }}>
      <input
        type="text"
        className="custom-input justify-content-around "
        placeholder="add a comment"
        id="comment-input"
        disabled={disabledInput}
        value={newComment}
        onChange={(event) => setNewComment(event.target.value)}
        
      />
    </div>
    <button type="submit" className="btn btn-primary btn-xsm custom-button">
      Submit
    </button>
  </form>
</div>

  
  

  );
}
