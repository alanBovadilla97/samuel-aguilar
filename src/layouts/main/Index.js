import { Outlet } from "react-router-dom";
import Footer from "src/components/footer/Footer";
import Navbar from "src/components/Navbar";


export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}