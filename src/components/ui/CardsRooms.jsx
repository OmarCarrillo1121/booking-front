import { useGetRoomsQuery } from "../../api/apiSlice";
import Card from "./CardRoom";

function Cards() {
  const { data, isError, isLoading, error } = useGetRoomsQuery();

  if (isLoading) return <div> Loading ... </div>;
  else if (isError) return <div> Error: {error.message} </div>;

  const allRooms = data;

  return (
    <div className="container">
      <div className="row">
        {allRooms.map((room) => (
          <div className="col-md-6" key={room.roomNo}>
            <Card title={room.roomType} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
