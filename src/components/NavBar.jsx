export default function NavBar() {
  return (
    <nav className="d-flex justify-content-around">
      <a className="nav-link" href="#">Home</a>
      <a className="nav-link" href="#">Post</a>
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
      <div className="dropdown-menu">
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

      <a className="nav-link" href="#">
        Profile
      </a>
    </nav>
  );
}
