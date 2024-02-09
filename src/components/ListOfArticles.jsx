import ArticlePreview from "./ArticlePreview";
import { useState, useEffect } from "react";
import {getArticles} from "./Utils/api"
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";

export default function ListOfArticles() {

const {topic} = useParams()


const [articles, setArticles] = useState([]);
 const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    getArticles(topic).then((response)=>{
    setArticles(response)
    setIsLoading(false)
   })
  }, [topic]);

  if(isLoading){
    return(
        <p className="col-12 text-center custom-font-size custom-margin" >Mind-blowing articles are loading... Please wait.</p>
    )
  }

  return (
    <div id="list" className="container" >
      {articles.map((article) => {
        return <ArticlePreview className='row col' key={article.article_id} article={article} />;
      })}
    </div>
  );
}
