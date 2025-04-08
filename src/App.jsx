import { Button } from "./components/ui/button";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto">
        <div className="flex ">
          <div className="w-1/2 bg-orange-200 flex justify-center items-center">
            <h2>Scopri gli eventi vicino a te!</h2>
          </div>
          <img
            className="w-1/2"
            src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default App;
