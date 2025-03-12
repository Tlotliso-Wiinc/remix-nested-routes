import { redirect } from "@remix-run/react";

export const loader = () => {
    return redirect('/dashboard')
}

export default function Home() {
  return (
    <div>
      <h1>Welcome, to my cool app</h1>
    </div>
  );
}