import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { deleteCommentByCommentId } from "./Utils/api";

export default function DeleteComment({ author, comment_id, onCommentDeleted }) {
  const { user, setUser } = useContext(UserContext);

  function handleClick() {
    deleteCommentByCommentId(comment_id);
    onCommentDeleted();
  }

  if (user === author) {
    return (
      <button
        type="button"
        className="btn btn-outline-danger btn-sm mt-2"
        onClick={handleClick}
      >
        delete
      </button>
    );
  }

  return null;
}
