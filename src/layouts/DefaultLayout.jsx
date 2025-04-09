import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router";

export default function DefaultLayout() {
  return (
    <div className="flex flex-col justify-between overflow-hidden min-h-screen bg-linear-to-r from-cyan-900 to-blue-900  ">
      <div className="flex flex-col items-center">
        <Navbar />
        <div className="container mx-auto text-white pt-30">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
