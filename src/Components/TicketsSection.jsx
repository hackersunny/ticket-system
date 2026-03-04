// export default function TicketsSection() {
//   const tickets = [
//     {
//       id: "#1001",
//       title: "Login Issues - Can't Access Account",
//       description:
//         "Customer is unable to log in to their account. They've tried resetting their password multiple times but still...",
//       priority: "HIGH PRIORITY",
//       status: "Open",
//       user: "John Smith",
//       date: "1/15/2024",
//     },
//     {
//       id: "#1002",
//       title: "Payment Failed - Card Declined",
//       description:
//         "Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.",
//       priority: "HIGH PRIORITY",
//       status: "Open",
//       user: "Sarah Johnson",
//       date: "1/16/2024",
//     },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-6 mt-10 mb-16">
//       <div className="grid lg:grid-cols-3 gap-6">

//         {/* LEFT SIDE - Customer Tickets */}
//         <div className="lg:col-span-2">
//           <h2 className="text-xl font-bold mb-4">Customer Tickets</h2>

//           <div className="space-y-4">
//             {tickets.map((ticket, index) => (
//               <div
//                 key={index}
//                 className="bg-base-100 shadow-md rounded-xl p-5 border border-base-200"
//               >
//                 <div className="flex justify-between items-start">
//                   <h3 className="font-semibold text-base">
//                     {ticket.title}
//                   </h3>

//                   <span className="badge badge-success badge-sm">
//                     {ticket.status}
//                   </span>
//                 </div>

//                 <p className="text-sm text-gray-500 mt-2">
//                   {ticket.description}
//                 </p>

//                 <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
//                   <div>
//                     <span className="text-error font-medium">
//                       {ticket.priority}
//                     </span>
//                   </div>

//                   <div>
//                     {ticket.user} • {ticket.date}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT SIDE - Task Status */}
//         <div>
//           <h2 className="text-xl font-bold mb-4">Task Status</h2>

//           <div className="bg-base-100 shadow-md rounded-xl p-5 border border-base-200">
//             <p className="text-sm text-gray-500 mb-4">
//               Select a ticket to add to Task Status
//             </p>

//             <h3 className="font-semibold mb-2">Resolved Task</h3>

//             <p className="text-sm text-gray-400">
//               No resolved tasks yet.
//             </p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// 

export default function TicketsSection({
  tickets,
  inProgress,
  handleAddToTask,
  handleComplete,
}) {

  const getPriorityColor = (priority) => {
    if (priority === "High") return "text-error";
    if (priority === "Medium") return "text-warning";
    return "text-success";
  };

  return (
    <div className="max-w-7xl mx-auto px-6 mt-10 mb-16">
      <div className="grid lg:grid-cols-3 gap-6">

        {/* LEFT SIDE - Ticket Cards */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-4">Customer Tickets</h2>

          {/* 2 Column Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {tickets.map(ticket => (
              <div
                key={ticket.id}
                onClick={() => handleAddToTask(ticket)}
                className="cursor-pointer bg-base-100 shadow-md rounded-xl p-5 border border-base-200 hover:shadow-lg transition"
              >
                <h3 className="font-semibold">{ticket.title}</h3>

                <p className="text-sm text-gray-500 mt-2">
                  {ticket.description}
                </p>

                <div className="mt-3 text-xs text-gray-500">
                  <p>Customer: {ticket.customer}</p>
                  <p>Date: {ticket.createdAt}</p>
                </div>

                <p className={`mt-2 text-xs font-semibold ${getPriorityColor(ticket.priority)}`}>
                  {ticket.priority} Priority
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - Task Status */}
        <div>
          <h2 className="text-xl font-bold mb-4">Task Status</h2>

          <div className="bg-base-100 shadow-md rounded-xl p-5 border border-base-200 space-y-4">

            {inProgress.length === 0 ? (
              <p className="text-sm text-gray-400">
                No tasks added yet.
              </p>
            ) : (
              inProgress.map(ticket => (
                <div
                  key={ticket.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <span className="text-sm font-medium">
                    {ticket.title}
                  </span>

                  <button
                    onClick={() => handleComplete(ticket)}
                    className="btn btn-success btn-xs"
                  >
                    Complete
                  </button>
                </div>
              ))
            )}

          </div>
        </div>

      </div>
    </div>
  );
}