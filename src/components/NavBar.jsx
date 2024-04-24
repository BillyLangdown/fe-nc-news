import { Link } from "react-router-dom";

export default function NavBar({ onTopicClick }) {
  const handleTopicClick = (topic) => {
    onTopicClick(topic);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mx-lg-auto">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/post-article"} className="nav-link">
              Post
            </Link>
          </li>
          <li className="nav-item">
          <Link to={"/profile"} className="nav-link">
            Profile
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Topics
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link to="/coding" className="dropdown-item" onClick={() => handleTopicClick("coding")}>
                Coding
              </Link>
              <Link to="/football" className="dropdown-item">
                Football
              </Link>
              <Link to="cooking" className="dropdown-item">
                Cooking
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
