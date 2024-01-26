    import React from 'react';

    const TotalSalesCard = () => {
    
    const totalSalesThisMonth = 5000; 
    const totalSalesLastMonth = 5500; 

    const difference = totalSalesThisMonth - totalSalesLastMonth;
    const isPositiveDifference = difference > 0;

    return (
        <div className="border w-1/3 p-4 m-4 rounded shadow-md flex flex-row justify-center items-center">
            <div className='px-4'>
                <span className={`text-4xl material-symbols-outlined ${isPositiveDifference ? 'text-green-500' : 'text-red-500'}`}>
                receipt
                </span>
            </div>
            <div>
                <h3 className="text-lg font-semibold">Total Sales</h3>
                <p className={`text-2xl ${isPositiveDifference ? 'text-green-500' : 'text-red-500'}`}>
                    ${totalSalesThisMonth}
                    <span className="text-sm ml-2">
                    ({isPositiveDifference ? '+' : ''}${difference})
                    </span>
                </p>
            </div>
        </div>
    );
    };

    export default TotalSalesCard;