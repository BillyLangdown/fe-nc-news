import axios from "axios";

export function getArticleById(id) {
  return axios
    .get(`https://nc-news-api-vw2o.onrender.com/api/articles/${id}`)
    .then((response) => {
      const article = response.data.article[0];

      return article;
    });
}
