import React, { useState } from 'react';

const JobsAssigned = () => {
  const [activeFilter, setActiveFilter] = useState('today');

  const filters = ['today', 'this week', 'this month'];

  return (
    <div className="bg-white p-4 rounded-xl shadow h-[350px] w-full text-sm flex flex-col justify-between">
      <div className="flex items-center justify-between border-b pb-4 mb-4">
        <h3 className="font-semibold text-neutral">Jobs Assigned</h3>
        <div className="flex space-x-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`capitalize text-xs  transition font-medium ${
                activeFilter === filter
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                  : 'text-gray-500 hover:text-blue-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
      </div>


      <div className="flex items-center justify-center">
        <div className="relative w-36 h-36">
          <svg className="absolute top-0 left-0 w-36 h-36" viewBox="0 0 36 36">
            <path
              className="text-primary"
              strokeDasharray="100, 58"
              d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          <div className="flex items-center justify-center h-full text-lg font-bold text-primary">
            100%
          </div>
        </div>
      </div>

     <div className="text-sm text-center text-neutral mt-2">
  <div className="flex items-center justify-center space-x-6">
    <div className="flex items-center space-x-2">
      <span className="w-2 h-2 rounded-full bg-blue-600 inline-block"></span>
      <span>Total Assigned</span>
    </div>
    <div className="flex items-center space-x-2">
      <span className="w-2 h-2 rounded-full bg-gray-400 inline-block"></span>
      <span>Total Incoming Jobs</span>
    </div>
  </div>
</div>

    </div>
  );
};

export default JobsAssigned;
