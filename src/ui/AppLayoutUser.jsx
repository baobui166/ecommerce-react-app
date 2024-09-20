import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import Search from "./Search";
import Footer from "./Footer";

//import Sidebar from "./Sidebar";

function AppLayoutUser() {
  const [showSearch, setShowSearch] = useState(false);

  const handleShowSearch = () => {
    setShowSearch((prev) => !prev);
    console.log(showSearch);
  };

  return (
    <div>
      <Header
        handleShowSearch={handleShowSearch}
        showSearch={showSearch}
        setShowSearch={setShowSearch}
      />
      {showSearch && (
        <Search showSearch={showSearch} setShowSearch={setShowSearch} />
      )}
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayoutUser;
