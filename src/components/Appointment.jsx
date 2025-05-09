import React, { useState } from 'react';

function Appointment() {
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [type, setType] = useState('online'); // Default to online consultation

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment Booked with Dr. ${doctor} on ${date} at ${time} for a ${type} consultation.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#8af2e7] to-white p-6 flex justify-center items-center">
      <div className="w-full max-w-lg p-6 rounded-3xl shadow-xl bg-gradient-to-b from-[#8af2e7] to-[#ffffff]">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Book Your Appointment</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="doctor" className="block text-lg font-medium text-gray-900">
              Select Doctor
            </label>
            <select
              id="doctor"
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              className="mt-2 w-full p-2 rounded-lg border border-gray-300"
              required
            >
              <option value="">Select a doctor</option>
              <option value="Raj Sharma">Dr. Raj Sharma</option>
              <option value="Alisha Verma">Dr. Alisha Verma</option>
              <option value="Sandeep Patel">Dr. Sandeep Patel</option>
            </select>
          </div>

          <div>
            <label htmlFor="date" className="block text-lg font-medium text-gray-900">
              Appointment Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-2 w-full p-2 rounded-lg border border-gray-300"
              required
            />
          </div>

          <div>
            <label htmlFor="time" className="block text-lg font-medium text-gray-900">
              Appointment Time
            </label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="mt-2 w-full p-2 rounded-lg border border-gray-300"
              required
            />
          </div>

          <div>
            <label htmlFor="type" className="block text-lg font-medium text-gray-900">
              Type of Consultation
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="mt-2 w-full p-2 rounded-lg border border-gray-300"
              required
            >
              <option value="online">Online</option>
              <option value="in-person">In-Person</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded-lg mt-6 hover:bg-teal-600"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default Appointment;
