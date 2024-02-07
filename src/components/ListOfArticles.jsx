import ArticlePreview from "./ArticlePreview";
import { useState, useEffect } from "react";
import axios from "axios";
import {getArticles} from "./Utils/getArticles"

export default function ListOfArticles() {
const [articles, setArticles] = useState([]);
 const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getArticles().then((response)=>{
    setArticles(response)
    setIsLoading(false)
   })
  }, []);

  if(isLoading){
    return(
        <p className="col-12 text-center custom-font-size custom-margin" >Mind-blowing articles are loading... Please wait.</p>
    )
  }

  return (
    <div id="list" className="flex-column justify-content-center" >
      {articles.map((article) => {
        return <ArticlePreview key={article.article_id} article={article} />;
      })}
    </div>
  );
}
