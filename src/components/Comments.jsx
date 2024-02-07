
import { useEffect, useState } from "react";
import { getCommentsById } from "./Utils/getCommentsById";
import { useParams } from "react-router";
import Expandable from "./Expandable";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [isLoadingComments, setIsLoadingComments] = useState(true);
  
  

  const { article_id } = useParams();




  useEffect(() => {
    getCommentsById(article_id).then((response) => {
      setComments(response);
      setIsLoadingComments(false);
    });
  }, []);

  if (isLoadingComments) {
    return (
      <p className="col-12 text-center custom-font-size custom-margin">
        The best comments are loading... Please wait.
      </p>
    );
  }


  return (
    <Expandable contentDescriptor= {comments} >
    <div>
      {comments.map((comment, index) => {
        return (
          <div className=".bg-light m-2 p-4 comment-bg-color" key={index}>
            <h6 className="comment-author-font">{comment.author}</h6>
            <p className="paragraph-font-size">{comment.body}</p>
          </div>
        );
      })}
    </div>
    </Expandable>
  );
}




