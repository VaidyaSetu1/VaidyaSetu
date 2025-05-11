import React from 'react';

function Slot({ slot }) {
  const { startTime, endTime, status } = slot;

  const bookAppointment = () => {
    alert(`Appointment Booked for ${startTime} - ${endTime}`);
  };

  return (
    <div
      className="flex justify-between items-center mb-4 p-4 rounded-xl bg-white shadow-md transition transform hover:shadow-lg hover:scale-[1.02] h-[50px]"
    >
      <div className="text-gray-800 font-semibold">
        {startTime} - {endTime}
      </div>
      <button
        onClick={bookAppointment}
        disabled={!status}
        className={`w-[140px] px-4 py-2 rounded-md font-semibold text-white transition duration-200 text-center
          ${status
            ? 'bg-green-600 hover:bg-green-700'
            : 'bg-rose-400 cursor-not-allowed'}`}
      >
        {status ? 'Book' : 'Not Available'}
      </button>
    </div>
  );
}

export default Slot;
