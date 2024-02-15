import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "../containers/Sidebar";
import Navbar from "../containers/Navbar";
import Content from "../containers/ContentRooms";
import Footer from "../containers/Footer";

function Bookings() {
  const [data, setData] = useState([]);
  const url = "http://localhost:3001";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(`${url}/bookings`);
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
          <Link to={`/bookings/create`}>
            <button className="btn btn-success my-1">Create new booking</button>
          </Link>
          <table className="table caption-top bg-white rounded mt-2">
            <caption className="text-white fs-4">Hotel</caption>
            <thead>
              <tr>
                <th scope="col">Booking Date</th>
                <th scope="col">Guest ID</th>
                <th scope="col">Room ID</th>
                <th scope="col">Check-in</th>
                <th scope="col">Check-out</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {data.map(
                ({
                  id,
                  guestId,
                  roomRoomNo,
                  bookingDate,
                  checkIn,
                  checkOut,
                }) => (
                  <tr className="bg-white border-b" key={id}>
                    <td className="px-6 py-4">{bookingDate}</td>
                    <td className="px-6 py-4">{guestId}</td>
                    <td className="px-6 py-4">{roomRoomNo}</td>
                    <td className="px-6 py-4">{checkIn}</td>
                    <td className="px-6 py-4">{checkOut}</td>
                    <td className="px-6 py-4">
                      <Link to={`/bookings/edit/${id}`}>
                        <button className="btn btn-warning">Edit</button>
                      </Link>
                    </td>
                  </tr>
                )
              )}
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

export default Bookings;
