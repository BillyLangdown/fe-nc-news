
import { useEffect, useState } from "react"
import { patchArticleVotesById } from "./Utils/api"


export default function Votes({article, article_id}){

   const [voteCount, setVoteCount] = useState(0)


   useEffect(()=>{
    setVoteCount(article.votes)

   }, [])


   function handleVoteClickPlus(){

    setVoteCount( voteCount + 1)
    patchArticleVotesById(article_id, 1)
   }

   function handleVoteClickMinus(){

    setVoteCount( voteCount - 1)
    patchArticleVotesById(article_id, -1)
       
   }


   return (
    <div className="d-flex flex-row align-items-center p-2">
        <div className="" >
            <p className="paragraph-font-size ">Votes: {voteCount}</p>
        </div>
      <div className="d-flex justify-between">
        <button className="m-1" onClick={handleVoteClickPlus}>+</button>
        <button className="m-1" onClick={handleVoteClickMinus}>-</button>
      </div>
      
    </div>
  );
  
}