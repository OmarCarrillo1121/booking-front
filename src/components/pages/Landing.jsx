import Cards from "../ui/CardsRooms";
import { useGetRoomsQuery } from "../../api/apiSlice";

export default function Landing() {
  return (
    <div>
      <Cards />
    </div>
  );
}
