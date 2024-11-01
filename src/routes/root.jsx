import { Outlet } from "react-router-dom";
import Footers from "../components/Footers";
import Navbar from "../components/Navbar";

export default function Root() {
  return (
    <>
      <div className='max-w-7xl mx-auto'>
        {/* ~~~~~~~~~~~ Nav Bar ~~~~~~~~~~~ */}
        <Navbar></Navbar>
        <Outlet></Outlet>
        {/* ~~~~~~~~~~~ Footer ~~~~~~~~~~~ */}
        <Footers></Footers>
      </div>
    </>
  );
}
