import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getArticleById } from "./Utils/getArticleById"
import Comments from './Comments'


export default function ArticleCard(){
    const [isLoadingArticle, setIsLoadingArticle] = useState(true)
    const [article, setArticle] = useState(null)
    const {article_id} = useParams()

    useEffect(()=>{
        getArticleById(article_id).then((individualArticle)=>{
            setArticle(individualArticle)
             setIsLoadingArticle(false)

        })
        

    }, [article_id])
 
    if(isLoadingArticle){
        return(
        <p className="col-12 text-center custom-font-size custom-margin" >The worlds most interesting article is loading... Please wait.</p>
        )
    }

    return(
        <div className="container-fluid p-3 bg-light">
            <div>
                   <h5 className="article-header-font-size">{article.title}</h5>
                   <p className="paragraph-font-size ">{article.created_at.slice(0,10)}</p>
            </div>

             <div className="d-flex justify-content-center m-3">
                <img className="article-card-img" src={article.article_img_url} />
             </div>
             <p className="paragraph-font-size" >{article.body}</p>
             <div className="d-flex justify-content-between">

                <p className="paragraph-font-size ">Votes: {article.votes}</p>
                <p className="paragraph-font-size">comments: {article.comment_count}</p>
             </div>
             <Comments/>

        </div>

    )}