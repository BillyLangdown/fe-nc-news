import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { deleteArticleById } from "./Utils/api";

export default function DeleteArticle({ author, article_id, onArticleDeleted }) {
  const { user, setUser } = useContext(UserContext);

  function handleClick() {
    deleteArticleById(article_id);
    onArticleDeleted();
  }

  if (user === author) {
    return (
      <button
        type="button"
        className="btn btn-outline-danger btn-sm mt-2"
        onClick={handleClick}
      >
        delete this article
      </button>
    );
  }

  return null;
}
