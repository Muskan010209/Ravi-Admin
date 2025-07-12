import React, { useState } from 'react';

const JobsAssigned = () => {
  const [activeFilter, setActiveFilter] = useState('today');

  const filters = ['today', 'this week', 'this month'];

  return (
    <div className="bg-white p-4 rounded-xl shadow h-[350px] w-full text-xs flex flex-col justify-between">
      <div className="flex items-center justify-between border-b pb-4 mb-4">
        <h3 className="font-semibold text-neutral text-sm">Jobs Assigned</h3>
        <div className="flex space-x-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`capitalize text-xs  transition text-gray-400 ${activeFilter === filter
                  ? ' bg-blue-500 border-blue-600 text-xs p-2'
                  : 'text-gray-500 hover:text-white-600'
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
          <div className="flex items-center space-x-2 ">
            <span className="w-3 h-3 rounded-full bg-blue-600 inline-block "></span>
            <span className='text-left'>Total Assigned Jobs</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-gray-400 inline-block"></span>
            <span className='text-left'>Total Incoming Jobs</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default JobsAssigned;
