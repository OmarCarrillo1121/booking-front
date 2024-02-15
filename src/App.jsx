import {
  Dashboard,
  NotFound,
  Rooms,
  RoomsCreate,
  RoomsEdit,
  Bookings,
  BookingsCreate,
  BookingsEdit,
} from "./index";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/bookings/create" element={<BookingsCreate />} />
        <Route path="/bookings/edit/:id" element={<BookingsEdit />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/create" element={<RoomsCreate />} />
        <Route path="/rooms/edit/:id" element={<RoomsEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
