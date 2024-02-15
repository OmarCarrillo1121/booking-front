import { useLocation } from "react-router-dom";
import Sidebar from "../containers/Sidebar";
import Navbar from "../containers/Navbar";
import Content from "../containers/ContentRooms";
import Footer from "../containers/Footer";

function App() {
  let location = useLocation();
  console.log(location);

  return (
    <>
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-2 bg-primary vh-100">
            <Sidebar />
          </div>
          <div className="col gx-0">
            <div className="col bg-primary">
              <Navbar />
            </div>
            <div className="col bg-secondary">
              <Content />
            </div>
            <div className="col bg-primary">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
