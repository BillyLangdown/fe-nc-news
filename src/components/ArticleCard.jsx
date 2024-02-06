import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getArticleById } from "./Utils/getArticleById"

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
    console.log(article, "this is the article")
    return(
        <div className="">
            <div>
                   <h5 className="text-sm">{article.title}</h5>
            </div>
          
             <div className="d-flex justify-content-center m-5">
                <img className="article-card-img" src={article.article_img_url} />
             </div>
             

        </div>
       

    )
}