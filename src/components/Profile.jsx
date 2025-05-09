import React from 'react';

function Profile() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#8af2e7] to-white p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-3xl overflow-hidden">
        {/* Profile Header */}
        <div className="bg-teal-500 p-8 text-center">
          <img
            src="/profile.jpg"  
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-md"
          />
          <h2 className="text-3xl text-white font-semibold mt-4">John Doe</h2>
          <p className="text-white text-lg">Software Developer</p>
        </div>

        {/* Profile Details */}
        <div className="p-8 space-y-6">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-800 text-lg">Email</p>
            <p className="text-gray-600">johndoe@example.com</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-800 text-lg">Age</p>
            <p className="text-gray-600">30</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-800 text-lg">Location</p>
            <p className="text-gray-600">New York, USA</p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-teal-500 p-4 text-center text-white rounded-b-3xl">
          <p>&copy; 2025 VaidyaSetu. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
