import React from 'react';

const TodayStats = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow h-[350px] w-full text-sm flex flex-col justify-between">
     <div>
       <h2 className="font-semibold text-neutral mb-4">Today's Stats</h2>
      <hr/>
     </div>

      <div className="space-y-3 mt-2">
        <h3 className="text-xs font-semibold">Money</h3>
        <div>
          <div className="flex justify-between border-b pb-2 mb-1">
            <span className="text-gray-600 text-xs">Money Earned</span>
            <span className="text-gray-900 font-semibold">$120.00</span>
          </div>
          <div className="flex justify-between border-b pb-2 mb-1">
            <span className="text-gray-600 text-xs">Money Collected</span>
            <span className="text-gray-900 font-semibold">$81.00</span>
          </div>
          <div className="flex justify-between border-b pb-2 mb-1">
            <span className="text-gray-600 text-xs">Money Refunded</span>
            <span className="text-gray-900 font-semibold">$3.00</span>
          </div>
        </div>
      </div>

      <div className='mt-2 space-y-3'>
        <h3 className="text-xs font-semibold">Jobs</h3>
        <div>
          <div className="flex justify-between border-b pb-2 mb-1">
            <span className="text-gray-600 text-xs">Jobs Completed</span>
            <span className="text-gray-900 font-semibold">14</span>
          </div>
          <div className="flex justify-between border-b pb-2 mb-1">
            <span className="text-gray-600 text-xs">Jobs Assigned</span>
            <span className="text-gray-900 font-semibold">20</span>
          </div>
          <div className="flex justify-between border-b pb-2 mb-1">
            <span className="text-gray-600 text-xs">Jobs Created</span>
            <span className="text-gray-900 font-semibold">23</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayStats;
