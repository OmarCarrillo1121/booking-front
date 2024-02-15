import { Link } from "react-router-dom";
import "./Sidebar.styles.css";

export default function Sidebar() {
  return (
    <div className="bg-white sidebar p-2">
      <div className="m-2">
        <span className="brand-name fs-4">Booking manager</span>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <Link to={`/`} className="list-group-item py-2">
          <i className="bi bi-house fs-5 me-2"></i>
          <span className="fs-5">Home</span>
        </Link>

        <Link to={`/bookings`} className="list-group-item py-3">
          <i className="bi bi-bookmark fs-5 me-2"></i>
          <span className="fs-5">Bookings</span>
        </Link>
        <Link to={`/rooms`} className="list-group-item py-3">
          <i className="bi bi-door-closed fs-5 me-2"></i>
          <span className="fs-5">Rooms</span>
        </Link>
      </div>
    </div>
  );
}
