import axios from "axios";

export function getArticleById(id) {
  return axios
    .get(`https://nc-news-api-vw2o.onrender.com/api/articles/${id}`)
    .then((response) => {
      const article = response.data.article[0];

      return article;
    });
}

export function getArticles() {
  return axios
    .get("https://nc-news-api-vw2o.onrender.com/api/articles")
    .then(({ data }) => {
      return data.articles;
    });
}

export function getCommentsById(id) {
  return axios
    .get(`https://nc-news-api-vw2o.onrender.com/api/articles/${id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
}

export function patchArticleVotesById(id, voteCount) {
  const newVote = { inc_votes: voteCount };
  return axios
    .patch(`https://nc-news-api-vw2o.onrender.com/api/articles/${id}`, newVote)
    .then((response) => {
      console.log(response.data, "vote counted");
    });
}
