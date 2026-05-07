import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  const headerStyle = {
    backgroundColor: "#f8f9fa",
    padding: "20px",
    borderBottom: "1px solid #dee2e6",
  };

  return (
    <div>
      <header style={headerStyle}>
        <h1>👟 Sneaker Store</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/produtos">Produtos</Link>
        </nav>
      </header>

      <Outlet />
    </div>
  );
}
