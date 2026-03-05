import TicketCard from "./TicketCard"; 
export default function TicketsSection({
  tickets,
  inProgress,
  handleAddToTask,
  handleComplete,
}) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
        {/* LEFT COLUMN - All Customer Tickets */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-base-content">
            Customer Support Tickets
          </h2>

          {tickets.length === 0 ? (
            <div className="alert alert-info shadow-lg">
              <span>All tickets have been resolved 🎉</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tickets.map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  onAddToTask={() => handleAddToTask(ticket)}
                  isInProgress={inProgress.some((t) => t.id === ticket.id)}
                />
              ))}
            </div>
          )}
        </div>

        {/* RIGHT COLUMN - My In-Progress Tasks */}
        <div className="lg:sticky lg:top-4 h-fit">
          <div className="card bg-base-100 shadow-xl border border-base-300">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-6">
                In Progress Tasks ({inProgress.length})
              </h2>

              {inProgress.length === 0 ? (
                <div className="alert alert-info">
                  <span>No tasks assigned yet</span>
                </div>
              ) : (
                <div className="space-y-4">
                  {inProgress.map((ticket) => (
                    <div
                      key={ticket.id}
                      className="p-4 border rounded-lg bg-base-200 hover:bg-base-300 transition-colors"
                    >
                      <h3 className="font-semibold mb-2">{ticket.title}</h3>
                      <p className="text-sm text-base-content/70 mb-3">
                        {ticket.customer} • {ticket.priority}
                      </p>

                      <button
                        onClick={() => handleComplete(ticket)}
                        className="btn btn-success btn-sm w-full"
                      >
                        Mark as Complete
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}