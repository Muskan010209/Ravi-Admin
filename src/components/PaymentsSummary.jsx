import React from 'react';

const boxes = [
  { label: 'In Transit', amount: '$400.00', color: 'bg-yellow-100', text: 'text-yellow-700' },
  { label: 'Overdue', amount: '$125.77', color: 'bg-blue-100', text: 'text-blue-700' },
  { label: 'Due', amount: '$443.74', color: 'bg-red-100', text: 'text-red-700' },
  { label: 'Successful', amount: '$1,342.00', color: 'bg-green-100', text: 'text-green-700' },
  { label: 'Failed', amount: '$125.77', color: 'bg-red-100', text: 'text-red-700' },
];

const PaymentsSummary = () => {
  return (
    <div className="space-y-4 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {boxes.slice(0, 3).map((box, id) => (
          <div
            key={id}
            className={`${box.color} ${box.text} rounded-lg p-3 text-center shadow min-h-[80px] flex flex-col justify-center`}
          >
            <div className="font-bold text-lg">{box.amount}</div>
            <div className="text-sm">{box.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {boxes.slice(3).map((box, id) => (
          <div
            key={id}
            className={`${box.color} ${box.text} rounded-lg p-5 text-center shadow min-h-[120px] flex flex-col justify-center`}
          >
            <div className="font-bold text-lg">{box.amount}</div>
            <div className="text-sm">{box.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentsSummary;
