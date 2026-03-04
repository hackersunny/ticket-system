// import { useState } from "react";
// import Navbar from "./components/Navbar";
// import StatsSection from "./components/StatsSection";
// import TicketsSection from "./components/TicketsSection";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function App() {
//   const [tickets, setTickets] = useState([
//     {
//       id: 1,
//       title: "Login Issues - Can't Access Account",
//       description: "User unable to login after password reset.",
//       priority: "high",
//       status: "open",
//       user: "John Smith",
//       date: "1/15/2024",
//     },
//     {
//       id: 2,
//       title: "Payment Failed - Card Declined",
//       description: "Visa card keeps failing despite sufficient balance.",
//       priority: "medium",
//       status: "in-progress",
//       user: "Sarah Johnson",
//       date: "1/16/2024",
//     },
//   ]);

//   const updateStatus = (id, newStatus) => {
//     setTickets(prev =>
//       prev.map(ticket =>
//         ticket.id === id ? { ...ticket, status: newStatus } : ticket
//       )
//     );
//   };

//   const inProgressCount = tickets.filter(t => t.status === "in-progress").length;
//   const resolvedCount = tickets.filter(t => t.status === "resolved").length;

//   return (
//     <>
//       <Navbar />

//       <div className="bg-base-200 py-10">
//         <StatsSection 
//           inProgress={inProgressCount}
//           resolved={resolvedCount}
//         />
//       </div>

//       <TicketsSection 
//         tickets={tickets}
//         updateStatus={updateStatus}
//       />

//       <ToastContainer position="top-right" autoClose={3000} theme="colored" />
//     </>
//   );
// }
import { useState } from "react";
import Navbar from "./Components/Navbar";
import StatsSection from "./Components/StatsSection";
import TicketsSection from "./Components/TicketsSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {

  // 12 Sample Tickets (JSON Data)
  const [tickets] = useState([
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
      createdAt: "2024-01-22",
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
    setInProgress(inProgress.filter(t => t.id !== ticket.id));
    setResolved([...resolved, ticket]);
    alert("Task Completed!");
  };

  return (
    <>
      <Navbar />

      <div className="bg-base-200 py-10">
        <StatsSection
          inProgress={inProgress.length}
          resolved={resolved.length}
        />
      </div>

      <TicketsSection
        tickets={tickets}
        inProgress={inProgress}
        handleAddToTask={handleAddToTask}
        handleComplete={handleComplete}
      />

      <ToastContainer />
    </>
  );
}