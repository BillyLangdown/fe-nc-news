import { useEffect, useState } from "react";
import { getCommentsById } from "./Utils/api";
import { useParams } from "react-router";
import Expandable from "./Expandable";
import CommentAdder from "./CommentAdder";
import DeleteComment from "./DeleteComment";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [isLoadingComments, setIsLoadingComments] = useState(true);
  const [error, setError] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    getCommentsById(article_id)
      .then((response) => {
        setComments(response);
        setIsLoadingComments(false);
      })
      .catch((err) => {
        if (err) {
          setIsLoadingComments(false);
          setError(true);
        }
      });
  }, [article_id]);

  if (error) {
    return (
      <p className="paragraph-font-size">
        Sorry! We are having problems loading comments at the moment, try again
        later!
      </p>
    );
  }

  function handleNewComment(newComment) {
    setComments([newComment, ...comments]);
  }

  if (isLoadingComments) {
    return (
      <p className="col-12 text-center custom-font-size custom-margin">
        The best comments are loading... Please wait.
      </p>
    );
  }

  function deleteStatementTimeout() {
    setTimeout(() => {
      setIsDeleted(false);
    }, 2000);
  }
  let deletedStatement = null;

  function onCommentDeleted() {
    console.log(" on delete triggered");
    setIsDeleted(true);
    deleteStatementTimeout();
  }
  if (isDeleted) {
    deletedStatement = (
      <p className="paragraph-font-size">Your comment has been deleted</p>
    );
  }

  return (
    <Expandable contentDescriptor={comments}>
      <CommentAdder
        onNewComment={handleNewComment}
        article_id={article_id}
        setComments={setComments}
      />
      <div >
        <div className="d-flex flex-column align-items-center">
        {deletedStatement}

        </div>
        {comments.map((comment, index) => {
          return (
            <div className=".bg-light m-2 p-4 comment-bg-color" key={index}>
              <h6 className="comment-author-font">{comment.author}</h6>
              <p className="paragraph-font-size">{comment.body}</p>
              <DeleteComment
                onCommentDeleted={onCommentDeleted}
                comment_id={comment.comment_id}
                author={comment.author}
              />
            </div>
          );
        })}
      </div>
    </Expandable>
  );
}
