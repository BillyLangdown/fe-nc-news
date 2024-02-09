import { useState } from "react"
import { postCommentOnArticle } from "./Utils/api"

export default function CommentAdder({article_id, onNewComment}){

    const [newComment, setNewComment] = useState("")
    const[isLoadingNewComment, setIsLoadingNewComment] = useState(false)
    const [error, setError] = useState(false)
    const [disabledInput, setDisabledInput] = useState(false)

    function handleSubmit(event){
      setIsLoadingNewComment(true)
      setDisabledInput(true)
        event.preventDefault()
        onNewComment(newComment)
        postCommentOnArticle(article_id, newComment).then(()=>{
          setIsLoadingNewComment(false)
          setDisabledInput(false)
          setNewComment("")
        }).catch((err)=>{
          if(err){
            setIsLoadingNewComment(false)
            setError(true)
          }
        })

        
      }

      if(isLoadingNewComment){
        return <p className="paragraph-font-size">Posting... please wait!</p>
      }

      if(error){
        return <p className="paragraph-font-size" >Sorry! We are having problems posting your comment at the moment, try again later!</p>
      }
return( <div className="d-flex justify-content-center">
     <form className="d-flex justify-content-around" onSubmit={handleSubmit}>
        <label  htmlFor="comment-input">add comment:</label>
        <input className="form-control" disabled={disabledInput} value={newComment} onChange={(event)=>{setNewComment(event.target.value)}} />
        <button type="submit" >submit</button>
      </form>

</div>
    
 )
}