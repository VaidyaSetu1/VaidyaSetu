import { useEffect, useState } from "react";

// Helper to convert "2:00 PM" to "14:00"
function to24Hour(timeStr) {
  const [time, modifier] = timeStr.split(' ');
  let [hours, minutes] = time.split(':').map(Number);
  if (modifier === 'PM' && hours !== 12) hours += 12;
  if (modifier === 'AM' && hours === 12) hours = 0;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

function useGetSlots(doctorId, date) {
  const [slots, setSlots] = useState([]);

  const timeSlots = [
    { startTime: '2:00 PM', endTime: '2:30 PM', status: true },
    { startTime: '2:30 PM', endTime: '3:00 PM', status: true },
    { startTime: '3:00 PM', endTime: '3:30 PM', status: true },
    { startTime: '3:30 PM', endTime: '4:00 PM', status: true },
    { startTime: '4:00 PM', endTime: '4:30 PM', status: true },
    { startTime: '4:30 PM', endTime: '5:00 PM', status: true },
    // Add more slots as needed
  ];

  useEffect(() => {
    if (!doctorId || !date) return;

    fetch(`https://vaidyasetu.onrender.com/api/appointment?doctorId=${doctorId}`)
      .then((res) => res.json())
      .then((res) => {
        const appointments = res.appointments || [];
        const selectedDate = new Date(date).toISOString().split('T')[0];

        // Get booked times in "HH:MM" (IST)
        const bookedTimes = appointments
          .filter(app => {
            const appDate = new Date(app.timeslot).toISOString().split('T')[0];
            return appDate === selectedDate;
          })
          .map(app => {
            const d = new Date(app.timeslot);
            // Convert to IST
            const ist = new Date(d.getTime() + 5.5 * 60 * 60 * 1000);
            return ist.toTimeString().slice(0,5); // "HH:MM"
          });

        // Mark slots as booked if their start time matches a booked time
        const updatedSlots = timeSlots.map(slot => {
          const slotTime24 = to24Hour(slot.startTime);
          // Compose slot datetime in IST for the selected date
          const slotDateTimeIST = new Date(`${selectedDate}T${slotTime24}:00+05:30`);
          const slotTimeHHMM = slotDateTimeIST.toTimeString().slice(0,5);
          const isBooked = bookedTimes.includes(slotTimeHHMM);
          return { ...slot, status: !isBooked };
        });

        setSlots(updatedSlots);
      });
  }, [doctorId, date]);

  return slots;
}

export default useGetSlots;