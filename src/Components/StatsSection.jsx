export default function StatsSection({ inProgress = 0, resolved = 0 }) {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-8">
      <div className="grid md:grid-cols-2 gap-6">

        {/* In Progress Card */}
        <div className="rounded-2xl p-10 text-white 
                        bg-linear-to-r from-purple-600 to-indigo-600
                        shadow-lg hover:scale-[1.02] transition duration-300">

          <h2 className="text-xl font-medium text-center mb-6">
            In-Progress
          </h2>

          <p className="text-6xl font-bold text-center">
            {inProgress}
          </p>
        </div>


        {/* Resolved Card */}
        <div className="rounded-2xl p-10 text-white 
                        bg-linear-to-r from-green-500 to-teal-600
                        shadow-lg hover:scale-[1.02] transition duration-300">

          <h2 className="text-xl font-medium text-center mb-6">
            Resolved
          </h2>

          <p className="text-6xl font-bold text-center">
            {resolved}
          </p>
        </div>

      </div>
    </div>
  );
}