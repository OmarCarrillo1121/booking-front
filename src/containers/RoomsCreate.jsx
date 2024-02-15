import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function RoomsCreate() {
  const [roomNo, setRoomNo] = useState("");
  const [roomType, setRoomType] = useState("");
  const [roomPrice, setRoomPrice] = useState("");

  const navigate = useNavigate();
  const url = "http://localhost:3001";
  const data = {
    roomNo,
    roomType,
    roomPrice,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${url}/rooms`, data);

      alert("Room created succesfully", response);

      setRoomNo("");
      setRoomType("");
      setRoomPrice("");

      navigate("/rooms");
    } catch (error) {
      alert("Error creating room");
    }
  };

  console.log(data);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Create Room</h1>

        <label className="form-label">
          RoomNo:
          <input
            name="roomno"
            type="text"
            value={roomNo}
            onChange={(e) => setRoomNo(e.target.value)}
            className="form-control"
            required
          />
        </label>

        <label className="form-label">
          Room Type:
          <input
            name="roomtype"
            type="text"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="form-control"
            required
          />
        </label>

        <label className="form-label">
          Room Price:
          <input
            name="roomprice"
            type="text"
            value={roomPrice}
            onChange={(e) => setRoomPrice(e.target.value)}
            className="form-control"
            required
          />
        </label>

        <button className="btn btn-success my-1">Submit</button>
        <Link to={`/rooms`}>
          <button className="btn btn-success my-1">Return</button>
        </Link>
      </form>
    </div>
  );
}

export default RoomsCreate;
