import React from 'react';

const SalesCountCard = () => {
  const salesThisMonth = 50;
  const salesLastMonth = 40;

  const difference = salesThisMonth - salesLastMonth;
  const isPositiveDifference = difference > 0;

  return (
    <div className="border w-1/3 p-4 m-4 rounded shadow-md flex flex-row justify-center items-center">
        <div className='px-4'>
            <span className={`text-4xl material-symbols-outlined ${isPositiveDifference ? 'text-green-500' : 'text-red-500'}`}>
            receipt_long
            </span>
        </div>
        <div>
            <h3 className="text-lg font-semibold">Sales</h3>
            <p className={`text-2xl ${isPositiveDifference ? 'text-green-500' : 'text-red-500'}`}>
            {salesThisMonth}
            <span className="text-sm ml-2">
            ({isPositiveDifference ? '+' : ''}{difference})
            </span>
            </p>
        </div>
      
    </div>
  );
};

export default SalesCountCard;