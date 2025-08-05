import { FooterSection } from "@/components/aboutPage/FooterSection";
import Navbar from "@/components/ui/Navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen   text-white ">
      <div className="">
        <Navbar />
        <Outlet />
        <FooterSection />
      </div>
    </div>
  );
};

export default AppLayout;
