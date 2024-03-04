export default function PostArticle(){

    function handleArticlePost(){
        postArticle()
    }

    return (
        <form className="m-3">
  <div className="form-row ">
    <div className="form-group col-md-6">
      <label htmlFor="input-title">Title</label>
      <input type="text" className="form-control" id="input-title" placeholder="Title"/>
    </div>
    <div class="form-group col-md-6">
    <label htmlFor="input-category">Select Category</label>
    <select className="form-control" id="input-category">
      <option>Coding</option>
      <option>Football</option>
      <option>Cooking</option>
    </select>
  </div>
  </div>
  <div className="form-group">
    <label htmlFor="input-body">Body</label>
    <input type="text" className="form-control" id="input-body" placeholder="write article here..."/>
  </div>
  <div className="custom-file">
  <label htmlFor="input-image">Article Image</label>
  <input type="file" className="custom-file-input" id="custom-file"/>
  <label className="custom-file-label" htmlFor="custom-file">Choose image</label>
</div>
  <button type="submit" className="btn btn-primary" onClick={handleArticlePost}>Post</button>
</form>
    )
}