import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/header";
import Footer from "../Components/Footer/footer";
import Sidebar from "../Components/Sidebar/Sidebar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
