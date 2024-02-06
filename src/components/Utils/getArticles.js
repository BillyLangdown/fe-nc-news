import axios from "axios";

export function getArticles() {
  return axios
    .get("https://nc-news-api-vw2o.onrender.com/api/articles")
    .then(({ data }) => {
      return data.articles;
    });
}
