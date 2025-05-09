import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#8af2e7] to-white p-6 flex flex-col justify-center items-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-3xl p-8">
        <h1 className="text-4xl font-bold text-center text-teal-600 mb-4">Welcome to the Healthcare Website</h1>
        <p className="text-xl text-center text-gray-700 mb-6">
          Your health, our priority. Stay informed, stay healthy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Feature 1 */}
          <div className="bg-teal-500 text-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold">Book an Appointment</h2>
            <p className="mt-4">Easily book appointments with top doctors in various specialties.</p>
            <button className="mt-4 bg-white text-teal-500 py-2 px-4 rounded-lg hover:bg-teal-100">
              Book Now
            </button>
          </div>

          {/* Feature 2 */}
          <div className="bg-teal-500 text-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold">Health Tips</h2>
            <p className="mt-4">Stay updated with the latest health tips to lead a healthy life.</p>
            <button className="mt-4 bg-white text-teal-500 py-2 px-4 rounded-lg hover:bg-teal-100">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center text-white">
        <p>&copy; 2025 Healthcare Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
