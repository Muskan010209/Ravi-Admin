import React from 'react';

const Invoice = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow h-[350px] w-full text-sm flex flex-col justify-between relative">
      <div>
        <h3 className="font-semibold text-neutral mb-4">Invoicing</h3>
        <hr />
      </div>

      <div className="absolute top-[52px] bottom-[0px] left-1/2 w-px bg-gray-300" />

      <div className="flex flex-col items-center justify-center mt-4 mb-4">
        <div className="flex w-full relative ">
          <div className="w-1/2 flex flex-col items-center justify-center text-center pt-8">
            <div className="text-danger text-xl font-semibold">$176,772</div>
            <p className="text-xs text-neutral mt-1">Due</p>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center text-center pt-8">
            <div className="text-success text-xl font-semibold">$122,644</div>
            <p className="text-xs text-neutral mt-1">Paid</p>
          </div>
        </div>

        <div className="flex w-full justify-between mt-12">
          <div className="w-[35%] h-px bg-gray-200" />
          <div className="w-[10%]" /> 
          <div className="w-[35%] h-px bg-gray-200" />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <div className="flex w-full pb-8">
          <div className="w-1/2 flex flex-col items-center justify-center text-center">
            <span className="text-black text-lg font-semibold block ">49</span>
            <span className="text-xs text-neutral">Currently Due</span>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center text-center">
            <span className="text-black text-lg font-semibold block">543</span>
            <span className="text-xs text-neutral">All Time Paid</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
