import { useEffect, useState } from "react";
import axios from "axios";

function Content() {
  const [rooms, setRooms] = useState([]);
  const url = "http://localhost:3001";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(`${url}/rooms`);
        const responseData = resp.data || [];
        setRooms(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(rooms);

  const handleEdit = async (id) => {
    try {
      await axiosURL.put(`/users/ban/${id}`);

      const updatedUsers = users.map((user) =>
        user.id === id ? { ...user, status: !user.status } : user
      );
      setUsers(updatedUsers);
    } catch (error) {
      console.log("Error al actualizar el estado del usuario: ", error);
    }
  };

  return (
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
        {rooms.map(({ roomNo, roomType, roomPrice }) => (
          <tr className="bg-white border-b" key={roomNo}>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              {roomNo}
            </th>
            <td className="px-6 py-4">{roomType}</td>
            <td className="px-6 py-4">{roomPrice}</td>
            <td className="px-6 py-4">
              <button
                className="btn btn-warning"
                onClick={() => handleEdit(roomNo)}
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Content;
