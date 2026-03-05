import { useState } from "react";
import Navbar from "./Components/Navbar";
import StatsSection from "./Components/StatsSection";
import TicketsSection from "./Components/TicketsSection";
import { ToastContainer, toast } from "react-toastify";
import Footer from "./Components/Footer";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
const [tickets, setTickets] = useState([
  // 10 Sample Tickets (JSON Data)
 
    {
      id: 1,
      title: "Login Issue",
      description: "Customer cannot login to account.",
      customer: "John Smith",
      priority: "High",
      status: "open",
      createdAt: "2024-01-15",
    },
    {
      id: 2,
      title: "Payment Failed",
      description: "Card declined during checkout.",
      customer: "Sarah Johnson",
      priority: "Medium",
      status: "open",
      createdAt: "2024-01-16",
    },
    {
      id: 3,
      title: "App Crash",
      description: "App crashes on Android 13.",
      customer: "David Wilson",
      priority: "High",
      status: "open",
      createdAt: "2024-01-18",
    },
    {
      id: 4,
      title: "Invoice Download Error",
      description: "Unable to download invoice.",
      customer: "Michael Brown",
      priority: "Low",
      status: "open",
      createdAt: "2024-01-19",
    },
    {
      id: 5,
      title: "Profile Update Failed",
      description: "Cannot update profile picture.",
      customer: "Olivia Martinez",
      priority: "Medium",
      status: "open",
      createdAt: "2024-01-20",
    },
    {
      id: 6,
      title: "Subscription Cancel Issue",
      description: "Subscription not canceling.",
      customer: "Liam Thomas",
      priority: "High",
      status: "open",
      createdAt: "2024-01-21",
    },
        {
      id: 7,
      title: "M365 License Issue",
      description: "Subscription not canceling.",
      customer: "Thomas",
      priority: "High",
      status: "open",
      createdAt: "2024-01-22",
    },    {
      id: 8,
      title: "NMS Issue",
      description: "Nms is not providing logs",
      customer: "Randy",
      priority: "High",
      status: "open",
      createdAt: "2024-01-23",
    },    {
      id: 9,
      title: "Bigdata server Issue",
      description: "Server showing multiple error",
      customer: "Aaron",
      priority: "High",
      status: "open",
      createdAt: "2024-01-24",
    },    {
      id: 10,
      title: "Bigdata data speed Issue",
      description: "Data processing speed is slow",
      customer: "Philip",
      priority: "High",
      status: "open",
      createdAt: "2024-01-25",
    },
  ]);

  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  const handleAddToTask = (ticket) => {
    if (!inProgress.find(t => t.id === ticket.id)) {
      setInProgress([...inProgress, ticket]);
      alert("Ticket added to Task Status");
    }
  };

  const handleComplete = (ticket) => {
    // Remove from in-progress
    setInProgress(inProgress.filter((t) => t.id !== ticket.id));

    // Add to resolved
    setResolved([...resolved, { ...ticket, status: "resolved" }]);

    // IMPORTANT: Remove from main tickets list
    setTickets((prev) => prev.filter((t) => t.id !== ticket.id));

    toast.success("Ticket marked as Resolved!");
  };

  return (
    <>
      <Navbar />

      <div className="bg-linear-to-r from-primary to-secondary py-12 text-white">
        <div className="container mx-auto px-4">
          <StatsSection
            inProgress={inProgress.length}
            resolved={resolved.length}
          />
        </div>
      </div>

      <TicketsSection
        tickets={tickets}
        inProgress={inProgress}
        handleAddToTask={handleAddToTask}
        handleComplete={handleComplete}
      />

      <Footer />
      <ToastContainer
  position="top-right"
  autoClose={4000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="colored"
/>
    </>
  );
}