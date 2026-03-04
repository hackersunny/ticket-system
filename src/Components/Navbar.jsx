import { toast } from "react-toastify";

export default function Navbar() {
  const handleNewTicket = () => {
    toast.success("Redirecting to New Ticket page 🚀");
  };

  return (
    <div className="bg-base-200 border-b border-base-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="text-xl font-bold">
            <span className="text-primary">CS</span> — Ticket System
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a className="hover:text-primary transition">Home</a>
            <a className="hover:text-primary transition">FAQ</a>
            <a className="hover:text-primary transition">Changelog</a>
            <a className="hover:text-primary transition">Blog</a>
            <a className="hover:text-primary transition">Download</a>
            <a className="hover:text-primary transition">Contact</a>

            <button
              onClick={handleNewTicket}
              className="btn btn-primary btn-sm"
            >
              + New Ticket
            </button>
          </div>

          {/* Mobile Dropdown */}
          <div className="md:hidden dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-sm">
              ☰
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-2"
            >
              <li><a>Home</a></li>
              <li><a>FAQ</a></li>
              <li><a>Changelog</a></li>
              <li><a>Blog</a></li>
              <li><a>Download</a></li>
              <li><a>Contact</a></li>
              <li>
                <button onClick={handleNewTicket}>
                  + New Ticket
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}