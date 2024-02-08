import { useState } from "react"
import { postCommentOnArticle } from "./Utils/api"

export default function CommentAdder({article_id, onNewComment}){

    const [newComment, setNewComment] = useState("")
    const[isLoadingNewComment, setIsLoadingNewComment] = useState(false)

    function handleSubmit(event){
      setIsLoadingNewComment(true)
        event.preventDefault()
        onNewComment(newComment)
        postCommentOnArticle(article_id, newComment).then(()=>{
          setIsLoadingNewComment(false)
        })

        setNewComment("")
      }

      if(isLoadingNewComment){
        return <p className="paragraph-font-size">Posting... please wait!</p>
      }
return( 
    <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
      <label  htmlFor="comment-input">add comment:</label>
      <input value={newComment} onChange={(event)=>{setNewComment(event.target.value)}} />
      <button type="submit" >submit</button>
    </form>
 )
}