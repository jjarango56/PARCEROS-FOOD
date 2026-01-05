
import { NavBar } from "./NavBar";
import { Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <NavBar title="Parceros FOOD" />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};
