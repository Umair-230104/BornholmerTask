import { NavLink, Outlet, Link } from "react-router";

function MainLayout() {
  return (
    <div className="container">
      <header className="header">
        <Link to="/">
          <img src="Bornholmlogo2.png" alt="Logo" className="logo" />
        </Link>
        <div>
          <Link to="/login">
            <button className="button">Login</button>
          </Link>
        </div>
      </header>
      <div className="content">
        <nav className="sidebar">
          <ul>
            <li>
              <NavLink to="/travels">Travels</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/admin">Admin</NavLink>
            </li>
          </ul>
        </nav>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
