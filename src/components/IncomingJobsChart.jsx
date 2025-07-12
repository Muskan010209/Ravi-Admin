import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot
} from 'recharts';

const data = [
  { date: '09 May', jobs: 10 },
  { date: '10 May', jobs: 18 },
  { date: '11 May', jobs: 23 },
  { date: '12 May', jobs: 27 },
  { date: '13 May', jobs: 19 },
  { date: '14 May', jobs: 17 },
  { date: '15 May', jobs: 30 },
];

const IncomingJobsChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl mx-auto h-[480px]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Incoming Jobs</h3>
        <div className="flex space-x-2">
          {['Today', 'This Week', 'This Month'].map((range) => (
            <button
              key={range}
              className="px-3 py-1 rounded-md text-sm font-medium border bg-white text-gray-600 border-gray-300"
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 30 }}>
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={[0, 60]}
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="jobs"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={false}       
            activeDot={false} 
          />
          <ReferenceDot
            x="12 May"
            y={27}
            r={8}
            fill="#3b82f6"
            stroke="white"
            strokeWidth={2}
            label={{
              value: '27 New Jobs',
              position: 'top',
              fill: '#3b82f6',
              fontSize: 12,
              fontWeight: 600,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomingJobsChart;
