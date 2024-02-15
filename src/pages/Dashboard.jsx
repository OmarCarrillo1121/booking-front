import Content from "../containers/Content";
import Footer from "../containers/Footer";
import Navbar from "../containers/Navbar";
import Sidebar from "../containers/Sidebar";

function App() {
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
