import { useState, useEffect } from "react";

export default function ArticlesSorter({ articles, onSort }) {
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSortChange = (event) => {
    const selectedSortBy = event.target.value;
    setSortBy(selectedSortBy);
  };

  const handleOrderChange = (event) => {
    const selectedOrder = event.target.value;
    setSortOrder(selectedOrder);
  };

  useEffect(() => {
    const sortedArticles = sortArticles();
    onSort(sortedArticles);
  }, [articles, sortBy, sortOrder]);

  function sortArticles() {
    const sortedArticles = [...articles];
    sortedArticles.sort((a, b) => {
      const valueA = sortBy === 'date' ? new Date(a["created_at"]) : a[sortBy];
      const valueB = sortBy === 'date' ? new Date(b["created_at"]) : b[sortBy];
  
      if (sortOrder === "asc") {
        return valueA - valueB;
      } else {
        return valueB - valueA;
      }
    });
    return sortedArticles;
  }

  return (
    <div className="d-flex flex-column m-3 m-md-5">
      <div className="mb-3">
        <label htmlFor="sortBy" className="m-0 mb-2">Sort by:</label>
        <select id="sortBy" value={sortBy} onChange={handleSortChange} className="form-select">
          <option value="date">Date</option>
          <option value="votes">Votes</option>
          <option value="comment_count">Comments</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="sortOrder" className="m-0 mb-2">Order:</label>
        <select id="sortOrder" value={sortOrder} onChange={handleOrderChange} className="form-select">
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </div>
    </div>
  );
}
