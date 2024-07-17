import { useState } from "react";

function App() {
  const [noOfMembers, setNoOfMembers] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(2);

  const handleMemberChange = (event) => {
    setNoOfMembers(event.target.value);
  }

  const addMember = () => {
    setCurrentNumber(currentNumber + 1);
  };

  return (
    <div className="App min-h-screen bg-gray-100 flex flex-col items-center justify-start p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Financial Inclusion</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h2 className="text-lg text-gray-600 mb-6">Start your journey to a bright future :)</h2>

        <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name of the Self help group (SHG)</label>
            <input
              type="text"
              placeholder="Enter a name here"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">PAN number of the group</label>
            <input
              type="text"
              placeholder="Enter a PAN number here"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Count of members in this Group</label>
            <input
              type="number"
              placeholder="Enter group capacity between 2 and 20"
              onChange={handleMemberChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name of the group representative</label>
            <input
              type="text"
              placeholder="Enter your name here"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Mobile number of the group representative</label>
            <input
              type="number"
              placeholder="Enter your mobile number here"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Enter the Name of the {currentNumber}{currentNumber === 1 ? "st" : currentNumber === 2 ? "nd" : currentNumber === 3 ? "rd" : "th"} member</label>
            <input
              type="text"
              placeholder="Enter member's name here"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Enter the WhatsApp number of the {currentNumber}{currentNumber === 1 ? "st" : currentNumber === 2 ? "nd" : currentNumber === 3 ? "rd" : "th"} member</label>
            <input
              type="number"
              placeholder="Enter member's WhatsApp number here"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="col-span-full">
            <button
              type="button"
              onClick={addMember}
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Add {currentNumber}{currentNumber === 1 ? "st" : currentNumber === 2 ? "nd" : currentNumber === 3 ? "rd" : "th"} member
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;