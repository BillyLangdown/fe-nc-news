export default function NavBar (){
    return (
      <nav>
        <a className="nav-link" href="#">
          Home
        </a>

        <a className="nav-link" href="#">
          Post
        </a>

        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Topics
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">
            Coding
          </a>
          <a className="dropdown-item" href="#">
            Football
          </a>
          <a className="dropdown-item" href="#">
            Cooking
          </a>
        </div>

        <a className="nav-link" href="#">Profile</a>
      </nav>
    );
}