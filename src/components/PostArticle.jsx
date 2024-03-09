import { postArticle } from "./Utils/api";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

export default function PostArticle() {
  const { user } = useContext(UserContext);

  function handleArticlePost(event) {
    event.preventDefault();
    const author = user;
    const title = event.target[0].value;
    const topic = event.target[1].value;
    const body = event.target[2].value;
    const article_img_url = event.target[3].value;

    if (isValidURL(article_img_url)) {
      postArticle(title, topic, body, article_img_url, author).then((response) => {
       
      });
    } else {
     
      console.error("Invalid image URL");
 
    }
  }

 
  function isValidURL(url) {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  }

  return (
    <form className="m-3" onSubmit={handleArticlePost}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="input-title">Title</label>
          <input type="text" className="form-control" id="input-title" placeholder="Title" />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="input-category">Select Category</label>
          <select className="form-control" id="input-category">
            <option>coding</option>
            <option>football</option>
            <option>cooking</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="input-body">Body</label>
        <input type="text" className="form-control" id="input-body" placeholder="Write article here..." />
      </div>
      <div className="form-group">
        <label htmlFor="input-image">Article Image (find image online, right click to copy img address)</label>
        <input type="text" className="form-control" id="custom-file" placeholder="Paste IMG Address here" />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}
