"use client";

const Dashboard = () => {
  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    bookings: [
      { id: 1, name: "Solitude Stay", date: "2026-03-15" },
      { id: 2, name: "Wellness Retreat", date: "2026-05-20" },
    ],
  };

  return (
    <div className="container mx-auto p-4 md:p-8 text-white">
      <h1 className="text-4xl font-bold text-gold-400 mb-8">
        Welcome, {user.name}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Profile & Settings */}
        <div className="md:col-span-1 bg-earth-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gold-500 mb-4">
            Account Details
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gold-500">Name</p>
              <p>{user.name}</p>
            </div>
            <div>
              <p className="text-sm text-gold-500">Email</p>
              <p>{user.email}</p>
            </div>
            <button className="w-full mt-4 px-4 py-2 text-lg font-semibold text-earth-950 bg-gold-400 rounded-md hover:bg-gold-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-earth-800 focus:ring-gold-400">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Column 2: Bookings */}
        <div className="md:col-span-2 bg-earth-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gold-500 mb-4">
            Your Bookings
          </h2>
          <div className="space-y-4">
            {user.bookings.length > 0 ? (
              user.bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="p-4 bg-earth-700 rounded-md flex justify-between items-center"
                >
                  <div>
                    <p className="font-bold">{booking.name}</p>
                    <p className="text-sm text-gold-500">{booking.date}</p>
                  </div>
                  <button className="text-gold-500 hover:text-gold-400">
                    View Details
                  </button>
                </div>
              ))
            ) : (
              <p>You have no upcoming bookings.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
