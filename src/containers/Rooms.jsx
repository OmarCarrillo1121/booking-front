import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "../containers/Sidebar";
import Navbar from "../containers/Navbar";
import Content from "../containers/ContentRooms";
import Footer from "../containers/Footer";

function Rooms() {
  const [data, setData] = useState([]);
  const url = "http://localhost:3001";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(`${url}/rooms`);
        const responseData = resp.data || [];
        setData(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="container-fluid text-center">
      <div className="row">
        <div className="col-2 bg-primary vh-100">
          <Sidebar />
        </div>
        <div className="col gx-0">
          <div className="col bg-primary">
            <Navbar />
          </div>
          <Link to={`/rooms/create`}>
            <button className="btn btn-success my-1">Create new room</button>
          </Link>
          <table className="table caption-top bg-white rounded mt-2">
            <caption className="text-white fs-4">Hotel</caption>
            <thead>
              <tr>
                <th scope="col">Number</th>
                <th scope="col">Type</th>
                <th scope="col">Price</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ roomNo, roomType, roomPrice }) => (
                <tr className="bg-white border-b" key={roomNo}>
                  <td className="px-6 py-4">{roomNo}</td>
                  <td className="px-6 py-4">{roomType}</td>
                  <td className="px-6 py-4">{roomPrice}</td>
                  <td className="px-6 py-4">
                    <Link to={`/rooms/edit/${roomNo}`}>
                      <button className="btn btn-warning">Edit</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="col bg-primary">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
