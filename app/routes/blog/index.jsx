import { Link } from "@remix-run/react";

export default function BlogIndex() {
  return (
    <div>
      <p>Welcome to the blog.</p>
      <ul>
        <li>
            <Link to="/blog/first-post">First Post</Link>
        </li>
        <li>
            <Link to="/blog/second-post">Second Post</Link>
        </li>
      </ul>
    </div>
  );
}