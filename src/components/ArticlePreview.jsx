export default function ArticlePreview({article}){ 

 
    return ( 

            <div className="item-in-list">

                <img className="listed-img" src={article.article_img_url} />
                <h4>{article.title}</h4>
                <h5>{article.topic}</h5>
                <h5>{article.votes}</h5>

            </div>
       
    )
}