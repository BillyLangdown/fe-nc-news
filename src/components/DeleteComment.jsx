import { useContext, useState } from "react"
import { UserContext } from "../contexts/User"
import { deleteCommentByCommentId } from "./Utils/api"

export default function DeleteComment({author, comment_id, onCommentDeleted}){

    const {user, setUser} = useContext(UserContext)

    function handleClick(){
        deleteCommentByCommentId(comment_id)
        onCommentDeleted()
       
    }

    

    if(user == author){
        return(
            <button onClick={handleClick}>Delete Comment</button>
        )

    }
}