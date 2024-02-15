import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

function RoomsEdit() {
  const [roomNo, setRoomNo] = useState("");
  const [roomType, setRoomType] = useState("");
  const [roomPrice, setRoomPrice] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();
  const url = "http://localhost:3001";
  const data = {
    roomNo,
    roomType,
    roomPrice,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(`${url}/rooms/${id}`);
        const responseData = resp.data || [];
        setRoomNo(responseData.roomNo);
        setRoomType(responseData.roomType);
        setRoomPrice(responseData.roomPrice);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`${url}/rooms/${id}`, data);

      alert("Room edited succesfully", response);

      setRoomNo("");
      setRoomType("");
      setRoomPrice("");

      navigate("/rooms");
    } catch (error) {
      alert("Error editing room");
    }
  };

  console.log(data);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Room Edit</h1>

      <label>
        RoomNo:
        <input
          name="roomno"
          type="text"
          value={roomNo}
          onChange={(e) => setRoomNo(e.target.value)}
          required
        />
      </label>

      <label>
        Room Type:
        <input
          name="roomtype"
          type="text"
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          required
        />
      </label>

      <label>
        Room Price:
        <input
          name="roomprice"
          type="text"
          value={roomPrice}
          onChange={(e) => setRoomPrice(e.target.value)}
          required
        />
      </label>

      <button>Submit</button>
      <Link to={`/rooms`}>
        <button className="btn btn-success my-1">Return</button>
      </Link>
    </form>
  );
}

export default RoomsEdit;
