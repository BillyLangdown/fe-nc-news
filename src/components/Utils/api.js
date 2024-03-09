import axios from "axios";

export function getArticleById(id) {
  return axios
    .get(`https://nc-news-api-vw2o.onrender.com/api/articles/${id}`)
    .then((response) => {
      const article = response.data.article[0];

      return article;
    });
}

export function getArticles(topic) {
  let url = `https://nc-news-api-vw2o.onrender.com/api/articles`;
  if (topic && topic != ":topic") {
    url += `?topic=${topic}`;
  }
  return axios.get(url).then(({ data }) => {
    return data.articles;
  });
}

export function getCommentsById(id) {
  return axios
    .get(`https://nc-news-api-vw2o.onrender.com/api/articles/${id}/comments`)
    .then((response) => {
      return response.data.comments;
    })
    .catch((error) => {
      if (error.message === "Request failed with status code 404") {
        return error;
      }
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

export function postCommentOnArticle(id, newComment) {
  return axios
    .post(`https://nc-news-api-vw2o.onrender.com/api/articles/${id}/comments`, {
      body: newComment,
      author: "cooljmessy",
    })
    .then(() => {
      console.log("successful post");
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
}

export function deleteCommentByCommentId(comment_id) {
  return axios
    .delete(`https://nc-news-api-vw2o.onrender.com/api/comments/${comment_id}`)
    .then(() => {
      console.log("comment deleted");
    });
}

export function postArticle(title, topic, body, article_img_url, author) {
  const newArticle = {
    title: title,
    topic: topic,
    author: author,
    body: body,
    article_img_url: article_img_url,
  };

  return axios
    .post("https://nc-news-api-vw2o.onrender.com/api/articles", newArticle)
    .then((response) => {
      console.log("Posted new article");
      console.log(response, "this is the response");
      return response;
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
}

export function deleteArticleById(article_id) {
  return axios
    .delete(`https://nc-news-api-vw2o.onrender.com/api/articles/${article_id}`)
    .then(() => {
      console.log("article deleted");
    });
}
