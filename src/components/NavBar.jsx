import { Link } from "react-router-dom";

export default function NavBar() {


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mx-4">
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
          <li className="nav-item active">
            <Link to={"/"} className="nav-link">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Post
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Profile
            </a>
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
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link to={"/"} className="dropdown-item" >
                Coding
              </Link>
              <a className="dropdown-item" href="#">
                Football
              </a>
              <a className="dropdown-item" href="#">
                Cooking
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}


