import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ListOfArticles from "./components/ListOfArticles";
import { Routes, Route } from "react-router-dom";

import ArticleCard from "./components/ArticleCard";

function App() {
  return (
    <main >
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<ListOfArticles />} />
        <Route path="/articles/:article_id" element={<ArticleCard />} />
      </Routes>
    </main>
  );
}

export default App;
