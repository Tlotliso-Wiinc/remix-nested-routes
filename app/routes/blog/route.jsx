import { Outlet } from "@remix-run/react";

export default function BlogLayout() {
  return (
    <div>
      <h1>Blog</h1>
      <Outlet />
    </div>
  );
}