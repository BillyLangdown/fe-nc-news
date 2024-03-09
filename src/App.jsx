import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ListOfArticles from "./components/ListOfArticles";
import { Routes, Route } from "react-router-dom";
import ArticleCard from "./components/ArticleCard"
import { useState } from 'react'
import PostArticle from "./components/PostArticle";
import Profile from "./components/Profile";


function App() {

  const [topic, setTopic] = useState(null)

  function onTopicClick(topic){
    setTopic(topic)
  }


  return (
    <main className="m-2 p-3" >
      <Header />
      <NavBar onTopicClick = {onTopicClick} />
      <Routes>
        <Route path="/" element={<ListOfArticles topic={topic} setTopic={setTopic}/>} />
        <Route path="/articles/:article_id" element={<ArticleCard />} />
        <Route path= "/:topic" element = {<ListOfArticles currentTopic={topic}/>}/>
        <Route path= "/?sort-by=:option" element = {<ListOfArticles currentTopic={topic}/>}/>
        <Route path="/post-article" element = {<PostArticle/>}/>
        <Route path="/profile" element = {<Profile/>}/>

      </Routes>
    </main>
  );
}

export default App;
