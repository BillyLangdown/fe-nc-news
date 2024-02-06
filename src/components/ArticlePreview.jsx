import { Link } from "react-router-dom";

export default function ArticlePreview({article}){ 

 
    return ( 
            <Link to={`/articles/${article.article_id}`}>
            <div className="d-flex justify-content-center align-content-center">
                    
                        <img className="article-size m-3" src={article.article_img_url} />
               
                    <div className=" d-flex p-3 flex-column justify-content-center " >
                        <h4 className="custom-font-size">{article.title}</h4>
                        <h5 className="custom-font-size">{article.topic}</h5>
                        <h5 className="custom-font-size">{article.votes}</h5>
                    </div>

            </div>    
            </Link>
       
    )
}