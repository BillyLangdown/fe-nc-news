import { useState } from "react";

export default function Expandable({children, contentDescriptor}){

    const [isCommentsHidden, setIsCommentsHidden] = useState(true)

    const toggleHidden = () => {
      setIsCommentsHidden((currentIsCommentsHidden)=> !currentIsCommentsHidden)
    };

    return (
        <div className="d-flex flex-column">
          <button
            type="button"
            className="btn btn-primary rounded-pill mt-3 p-2"
            onClick={toggleHidden}
            style={{ minWidth: '250px' }}
          >
            {isCommentsHidden ? "Show Comments" : "Hide Comments"}
          </button>
          {isCommentsHidden ? null : children}
        </div>
      );
}