import { useState } from "react";

export default function Expandable({children, contentDescriptor}){

    const [isCommentsHidden, setIsCommentsHidden] = useState(true)

    const toggleHidden = () => {
      setIsCommentsHidden((currentIsCommentsHidden)=> !currentIsCommentsHidden)
    };

    return (
        <div>
            <button type="button" className="custom-show-hide-button" onClick={toggleHidden}> {isCommentsHidden ? "Show" : "Hide"}</button>
            {isCommentsHidden ? null : children}
        </div>
    )
}