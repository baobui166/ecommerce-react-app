import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayoutUser() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayoutUser;
