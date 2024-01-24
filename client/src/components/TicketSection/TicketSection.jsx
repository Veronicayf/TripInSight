import React from 'react';

const TicketSection = ({ ticketData }) => {
  return (
    <div className='flex flex-col border-2 border-seconday-text rounded-xl mx-4'>
      <div className='w-full flex items-center justify-around text-seconday-text'>
        <div className='w-1/3 text-center'>
          <b>Tour name</b>
        </div>
        <div className='w-1/4 text-center'>
          <b>Date</b>
        </div>
        <div className='w-1/4 text-center'>
          <b>Price</b>
        </div>
        <div className='w-1/4 text-center'>
          <b>Nro Ticket</b>
        </div>
      </div>
      {ticketData.length > 0 ? (
        ticketData.map((ticket) => (
          <div
            key={ticket.id}
            className='w-full h-20 flex items-center justify-around border-t-2'
          >
            <div className='w-1/3 text-center'>{ticket.tourname}</div>
            <div className='w-1/4 text-center'>{ticket.date}</div>
            <div className='w-1/4 text-center'>${ticket.price}</div>
            <div className='w-1/4 text-center'>{ticket.id}</div>
          </div>
        ))
      ) : (
        <div className='text-center mt-4'>No ticket data available.</div>
      )}
    </div>
  );
};

export default TicketSection;