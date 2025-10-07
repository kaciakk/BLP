import { Outlet } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";
import MainFooter from "../components/MainFooter";
import ArrowBackToTop from "../components/ArrowBackToTop";
const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNavbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <MainFooter />
      <ArrowBackToTop />
    </div>
  );
};

export default MainLayout;
