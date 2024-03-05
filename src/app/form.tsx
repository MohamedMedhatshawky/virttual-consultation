import React from "react"

export default function VirtualForm(){

  const availableTimes = [
    "09:00",
    "10:00",
    "11:00",
    "13:00",
    "14:00",
    "15:00",
  ];
  
  const availableDates = [
    "2024-02-24",
    "2024-02-25",
    "2024-02-26",
    "2024-03-01",
    "2024-03-02",
    "2024-03-05",
    "2024-03-08",
    "2024-03-15",
    "2024-03-20",
  ]


    const generateTimeSlots = () => {
      return availableTimes.map((time, index) => (
        <option key={index} value={time}>{time}</option>
      ));
    };
    const generateDateSlots = () => {
      return availableDates.map((time, index) => (
        <option key={index} value={time}>{time}</option>
      ));
    };

  return (
    <div className="bg-cover bg-center min-h-screen flex items-center justify-center" style={{backgroundImage: "url('/healthLife.jpeg')"}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md  z-20 opacity-70">
        <h2 className="text-2xl font-semibold mb-6">Schedule Virtual Consultation</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-sky-400" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-sky-400" required />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" id="phone" name="phone" className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-sky-400" required />
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="w-full sm:w-1/2 pr-2">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">Available Date</label>
              <select id="date" name="date" className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-sky-400" required>
          {/* Render options for available dates */}
          {generateDateSlots()}
        </select>
            </div>
            <div className="w-full sm:w-1/2 pl-2">
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">Available Time</label>
              <select id="time" name="time" className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-sky-400" required>
          {/* Render options for available times */}
          {generateTimeSlots()}
        </select>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason for Consultation</label>
            <textarea id="reason" name="reason" className="mt-1 p-2 w-full border-gray-300 rounded-md resize-none focus:outline-sky-400" required></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="method" className="block text-sm font-medium text-gray-700">Preferred Method of Communication</label>
            <select id="method" name="method" className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-sky-400 sele">
              <option value="">Select...</option>
              <option value="Video Call">Video Call</option>
              <option value="Phone Call">Phone Call</option>
            </select>
          </div>
          <div>
            <button type="submit" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );

}