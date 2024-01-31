import React from 'react';
import { useSelector } from 'react-redux';

const TicketSection = () => {
  const ticketData = useSelector((state) => state.user.purchased);

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
      {/* <div className='w-full h-20 flex items-center justify-around border-t-2'>
            <div className='w-1/3 text-center'>{purchased.tourName}</div>
            <div className='w-1/4 text-center'>{purchased.createdAt}</div>
            <div className='w-1/4 text-center'>${purchased.totalPrice}</div>
            <div className='w-1/4 text-center'>{purchased.id}</div>
          </div> */}
      {ticketData.length > 0 ? (
        ticketData.map((ticket) => (
          <div
            key={ticket.id}
            className='w-full h-20 flex items-center justify-around border-t-2'
          >
            <div className='w-1/3 text-center'>{ticket.tourName}</div>
            <div className='w-1/4 text-center'>{ticket.createdAt}</div>
            <div className='w-1/4 text-center'>${ticket.totalPrice}</div>
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