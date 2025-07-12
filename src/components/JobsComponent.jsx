import React from 'react';
import { FiGift } from 'react-icons/fi';

const JobsComponent = ({ title, jobs, filter = false, onJobClick }) => {
  const cardColors = ['bg-orange-300', 'bg-blue-400', 'bg-teal-400', 'bg-red-400'];

  return (
    <div className="rounded-xl shadow p-8 space-y-4 bg-white">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h3 className="font-semibold text-neutral text-sm">
          {title} ({jobs.length})
        </h3>
        {filter && (
          <div className="flex gap-2 flex-wrap">
            <button className="text-xs px-3 py-1 rounded-full bg-primary text-white">Today</button>
            <button className="text-xs px-3 py-1 rounded-full bg-secondary text-neutral">This Week</button>
            <button className="text-xs px-3 py-1 rounded-full bg-secondary text-neutral">This Month</button>
          </div>
        )}
      </div>

      <div className="space-y-3">
        {jobs.map((job, index) => {
          const isUnassigned = job.status?.toLowerCase() === 'unassigned' || !job.technician;
          const cardBg = isUnassigned
            ? 'bg-white border border-gray-200'
            : `${cardColors[index % cardColors.length]} border`;

          const textColor = isUnassigned ? 'text-neutral-800' : 'text-white';
          const subTextColor = isUnassigned ? 'text-gray-400' : 'text-white/80';
          const buttonStyle = isUnassigned
            ? 'bg-gray-50'
            : 'bg-transparent text-white shadow-sm';

          return (
            <div
              key={job.id}
              className={`rounded-xl shadow-sm p-4 flex flex-col gap-2 cursor-pointer hover:shadow transition duration-200 ${cardBg}`}
              onClick={() => onJobClick?.(job)}
            >
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <div>
                    <p className={`text-xs ${subTextColor}`}>Job Id</p>
                    <p className={`font-semibold text-xs ${textColor}`}>{job.id}</p>
                  </div>
                  <div>
                    <p className={`text-xs ${subTextColor}`}>Job Scheduled</p>
                    <p className={`text-xs ${textColor}`}>{job.time}</p>
                  </div>
                </div>

                <div className="flex flex-col items-end space-y-1">
                  <div className="flex items-center gap-2">
                    {isUnassigned ? (
                      <div className='mb-5'>
                        <FiGift size={22} />
                      </div>
                    ) : (
                      <>
                        <div className="text-right">
                          <p className={`text-[11px] font-medium ${textColor}`}>{job.technician}</p>
                          <p className={`text-[10px] ${subTextColor}`}>{job.phone || 'N/A'}</p>
                        </div>
                        <img
                          src={job.technicianAvatar || `https://i.pravatar.cc/100?u=${job.technician}`}
                          alt="technician"
                          className="w-10 h-10 rounded-full object-cover shadow"
                        />
                      </>
                    )}
                  </div>

                  <button
                    className={`text-[11px] font-medium px-3 py-1 transition ${buttonStyle}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onJobClick?.(job);
                    }}
                  >
                    {job.task}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobsComponent;
