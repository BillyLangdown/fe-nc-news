import { useEffect, useState } from "react";
import { patchArticleVotesById } from "./Utils/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Votes({ article, article_id }) {
  const [voteCount, setVoteCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setVoteCount(article.votes);
  }, []);

  function handleVoteClickPlus() {
    setVoteCount(voteCount + 1);
    setIsDisabled(true);
    patchArticleVotesById(article_id, 1);
  }

  function handleVoteClickMinus() {
    setVoteCount(voteCount - 1);
    setIsDisabled(true);
    patchArticleVotesById(article_id, -1);
  }

  return (
    <div className="d-flex flex-column align-items-center p-2">
      <p>Votes: {voteCount}</p>
      <div className="d-flex justify-between">
        <button
          disabled={isDisabled}
          className="btn btn-primary rounded-circle m-1"
          onClick={handleVoteClickPlus}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <button
          disabled={isDisabled}
          className="btn btn-primary rounded-circle m-1"
          onClick={handleVoteClickMinus}
        >
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </div>
    </div>
  );
}
