import { useState } from "react";

export default function Expandable({children, contentDescriptor}){

    const [isCommentsHidden, setIsCommentsHidden] = useState(true)

    const toggleHidden = () => {
      setIsCommentsHidden((currentIsCommentsHidden)=> !currentIsCommentsHidden)
    };

    return (
        <div className="d-flex flex-column">
            <button type="button" className="custom-show-hide-button ml-auto p-2 " onClick={toggleHidden}> {isCommentsHidden ? "Show" : "Hide"}</button>
            {isCommentsHidden ? null : children}
        </div>
    )
}