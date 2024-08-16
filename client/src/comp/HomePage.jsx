import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div>
      <header>
      <nav>
        <Link className="link" to="/">
          Back to /
        </Link>
        <Link className="link" to="/images">
          Images
        </Link>
        <Link className="link" to="/bored">
          Games If You Are Bored!
        </Link>
      </nav>
      </header>
    </div>
  );
}
