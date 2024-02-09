import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ListOfArticles from "./components/ListOfArticles";
import { Routes, Route } from "react-router-dom";
import ArticleCard from "./components/ArticleCard"
import { useState } from 'react'

function App() {

  const [topic, setTopic] = useState(null)




  return (
    <main className="m-2 p-3" >
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<ListOfArticles topic={topic} setTopic={setTopic}/>} />
        <Route path="/articles/:article_id" element={<ArticleCard />} />
        <Route path="/:topic" element = {<ArticleCard/>}/>
      </Routes>
    </main>
  );
}

export default App;
