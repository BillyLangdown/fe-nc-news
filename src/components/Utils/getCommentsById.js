import axios from "axios";

export function getCommentsById(id) {
  return axios
    .get(`https://nc-news-api-vw2o.onrender.com/api/articles/${id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
}
