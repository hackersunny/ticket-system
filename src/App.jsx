import Navbar from "./Components/Navbar";
import StatsSection from "./Components/StatsSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <Navbar />

      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold">
          Welcome to Ticket System
        </h1>
      </div>
      <div className="bg-base-200 py-10">
      <StatsSection 
           inProgress={0}
            resolved={0}
      />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
      />
    </>
  );
}