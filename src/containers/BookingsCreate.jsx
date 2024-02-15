import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function BookingsCreate() {
  const [bookingDate, setBookingDate] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomRoomNo, setRoomRoomNo] = useState("");
  const [guestId, setGuestId] = useState("");
  const [allUsers, setAllUsers] = useState("");
  const [allRooms, setAllRooms] = useState("");

  const navigate = useNavigate();
  const url = "http://localhost:3001";
  const data = {
    bookingDate,
    checkIn,
    checkOut,
    roomRoomNo,
    guestId,
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const usersResp = await axios.get(`${url}/guests`);
  //       const usersRespData = usersResp.data || [];
  //       setAllUsers(usersRespData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const roomsResp = await axios.get(`${url}/rooms`);
  //       const roomsRespData = roomsResp.data || [];
  //       setAllRooms(roomsRespData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // const guestsList = (allUsers) => {
  //   const results = [];
  //   allUsers.forEach((b) => {
  //     const guest = b.id;
  //     if (!results.includes(guest)) {
  //       results.push(guest);
  //     }
  //   });
  //   return results;
  // };

  // const roomsList = (allRooms) => {
  //   const results = [];
  //   allRooms.forEach((b) => {
  //     const room = b.roomNo;
  //     if (!results.includes(room)) {
  //       results.push(room);
  //     }
  //   });
  //   return results;
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${url}/bookings`, data);

      alert("Booking created succesfully", response);

      setBookingDate("");
      setCheckIn("");
      setCheckOut("");
      setRoomRoomNo("");
      setGuestId("");

      navigate("/bookings");
    } catch (error) {
      alert("Error creating booking");
    }
  };

  // console.log(allUsers);
  // console.log(allRooms);
  // console.log(guestsList(allUsers));
  // console.log(roomsList(allRooms));
  console.log(data);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Create Booking</h1>

        <label className="form-label">
          Booking Date:
          <input
            name="bookingdate"
            type="date"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            className="form-control"
          />
        </label>

        <label className="form-label">
          Check-in:
          <input
            name="checkin"
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="form-control"
          />
        </label>

        <label className="form-label">
          Check-out:
          <input
            name="checkout"
            type="date"
            value={checkOut}
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
          GuestID:
          <input
            name="roomno"
            type="text"
            value={guestId}
            onChange={(e) => setGuestId(e.target.value)}
            className="form-control"
            required
          />
        </label>

        {/* <label className="form-select">
          Guest ID:
          <select
            name="guestid"
            type="text"
            value={guestId}
            onChange={(e) => setGuestId(e.target.value)}
            className="form-control"
            required
          >
            {guestsList().map((guest) => (
              <option key={guest.id} value={guest.id}>
                {guest.id}
              </option>
            ))}
          </select>
        </label> */}

        <button className="btn btn-success my-1">Submit</button>
        <Link to={`/bookings`}>
          <button className="btn btn-success my-1">Return</button>
        </Link>
      </form>
    </div>
  );
}

export default BookingsCreate;
