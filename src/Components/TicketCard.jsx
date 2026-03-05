export default function TicketCard({ ticket, onAddToTask, isInProgress }) {
  const priorityColor = {
    High: "badge-error",
    Medium: "badge-warning",
    Low: "badge-info",
  }[ticket.priority] || "badge-neutral";

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
      <div className="card-body">
        <h2 className="card-title text-lg">{ticket.title}</h2>
        <p className="text-sm text-base-content/70 mb-3 line-clamp-3">
          {ticket.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <div className={`badge ${priorityColor} badge-outline`}>
            {ticket.priority}
          </div>
          <div className="badge badge-outline">{ticket.customer}</div>
          <div className="badge badge-outline">{ticket.createdAt}</div>
        </div>

        <div className="card-actions">
          <button
            onClick={onAddToTask}
            disabled={isInProgress}
            className="btn btn-primary btn-sm flex-1"
          >
            {isInProgress ? "Already in progress" : "Add to My Tasks"}
          </button>
        </div>
      </div>
    </div>
  );
}