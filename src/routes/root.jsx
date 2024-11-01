import Footers from "../components/Footers";
import Navbar from "../components/Navbar";

export default function Root() {
  return (
    <>
      <div>
        {/* ~~~~~~~~~~~ Nav Bar ~~~~~~~~~~~ */}
        <Navbar></Navbar>
        <Footers></Footers>
      </div>
    </>
  );
}
