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
  }, [article_id, onCommentDeleted]);

  if (error) {
    return (
      <p className="lead mt-4">
        Sorry! We are having problems loading comments at the moment, try again later!
      </p>
    );
  }

  function handleNewComment(newComment) {
    setComments([newComment, ...comments]);
  }

  if (isLoadingComments) {
    return (
      <p className="lead mt-4 text-center">
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
    setIsDeleted(true);
    deleteStatementTimeout();
  }
  if (isDeleted) {
    deletedStatement = (
      <p className="lead mt-4">Your comment has been deleted</p>
    );
  }

  return (
    <Expandable contentDescriptor={comments}>
      <CommentAdder
        onNewComment={handleNewComment}
        article_id={article_id}
        setComments={setComments}
      />
      <div className="mt-3">
        {deletedStatement}
        {comments.map((comment, index) => (
          <div className="bg-light m-2 p-3 rounded" key={index}>
            <h6 className="lead">{comment.author}</h6>
            <p className="">{comment.body}</p>
            <DeleteComment
              onCommentDeleted={onCommentDeleted}
              comment_id={comment.comment_id}
              author={comment.author}
            />
          </div>
        ))}
      </div>
    </Expandable>
  );
}
