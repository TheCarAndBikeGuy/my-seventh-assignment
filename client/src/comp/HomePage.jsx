import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div>
      <nav>
        <Link className="link" to="/images">
          Images
        </Link>
        <Link className="link" to="/bored">
          Games If You Are Bored!
        </Link>
      </nav>
      <h2>Home Page</h2>
    </div>
  );
}
