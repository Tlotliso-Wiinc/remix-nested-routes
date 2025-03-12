import { useParams } from "@remix-run/react";

export default function BlogPost() {
  let { postSlug } = useParams();

  return (
    <div>
        <h1>Blog Post: {postSlug}</h1>
    </div>
  );
}