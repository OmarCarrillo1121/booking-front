import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

function RoomsEdit() {
  const [bookingDate, setBookingDate] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomRoomNo, setRoomRoomNo] = useState("");
  const [guestId, setGuestId] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();
  const url = "http://localhost:3001";
  const data = {
    bookingDate,
    checkIn,
    checkOut,
    roomRoomNo,
    guestId,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(`${url}/bookings/${id}`);
        const responseData = resp.data || [];
        setBookingDate(responseData.bookingDate);
        setCheckIn(responseData.checkIn);
        setCheckOut(responseData.checkOut);
        setRoomRoomNo(responseData.roomRoomNo);
        setGuestId(responseData.guestId);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`${url}/bookings/${id}`, data);

      alert("Booking edited succesfully", response);

      setBookingDate("");
      setCheckIn("");
      setCheckOut("");
      setRoomRoomNo("");
      setGuestId("");

      navigate("/bookings");
    } catch (error) {
      alert("Error editing room");
    }
  };

  console.log(data);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Booking Edit</h1>

      <label className="form-label">
        Booking Date:
        <input
          name="bookingdate"
          type="text"
          value={bookingDate}
          onChange={(e) => setBookingDate(e.target.value)}
          className="form-control"
          required
        />
      </label>

      <label className="form-label">
        Check-in:
        <input
          name="checkin"
          type="date"
          value={checkIn ? checkIn : ""}
          onChange={(e) => setCheckIn(e.target.value)}
          className="form-control"
        />
      </label>

      <label className="form-label">
        Check-out:
        <input
          name="checkout"
          type="date"
          value={checkOut ? checkOut : ""}
          onChange={(e) => setCheckIn(e.target.value)}
          className="form-control"
        />
      </label>

      <label className="form-label">
        Room No:
        <input
          name="roomno"
          type="text"
          value={roomRoomNo}
          onChange={(e) => setRoomRoomNo(e.target.value)}
          className="form-control"
          required
        />
      </label>

      <label className="form-label">
        Guest ID:
        <input
          name="guestid"
          type="text"
          value={guestId}
          onChange={(e) => setGuestId(e.target.value)}
          className="form-control"
          required
        />
      </label>

      <button>Submit</button>
      <Link to={`/bookings`}>
        <button className="btn btn-success my-1">Return</button>
      </Link>
    </form>
  );
}

export default RoomsEdit;
