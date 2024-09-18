import IconHeader from "./IconHeader";
import Sidebar from "./Sidebar";

import Topbar from "./Topbar";

function Header({ handleShowSearch }) {
  return (
    <div>
      <Topbar />
      <div className="flex items-center justify-between px-10 mx-auto">
        <div className="cursor-pointer " onClick={handleShowSearch}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div>
          <img
            src="https://theme.hstatic.net/200000260587/1001225543/14/logo.png?v=294"
            alt="logo"
          />
        </div>
        <IconHeader />
      </div>
      <Sidebar />
    </div>
  );
}

export default Header;
