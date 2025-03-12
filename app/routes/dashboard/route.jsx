import { Outlet, Link } from "@remix-run/react";

export default function DashboardLayout() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
            <li>
                <Link to="/dashboard">Overview</Link>
            </li>
            <li>
                <Link to="/dashboard/sales">Sales</Link>
            </li>
            <li>
                <Link to="/dashboard/settings">Settings</Link>
            </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}