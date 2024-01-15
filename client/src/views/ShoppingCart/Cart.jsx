import React from 'react'
import iconTrust from '../../assets/icons/iconTrust.png'

const Cart = () => {
  return (
    <main className=''>
        
    <div className='text-xl text-seconday-text flex justify-center'>
        <b>One more step for enjoy</b>
    </div>
    <div className=' flex justify-center text-5xl'> 
        <b>Your</b> <b className='text-primary mx-1'>Travel</b>
    </div>
    <section className='flex flex-row w-full px-7'>
        <div className='w-2/3'> 
            <div id='row' className=''>
                <div className='w-full flex flex-row'>
                    <div className='w-2/4'>
                        <p>Product</p>
                    </div>
                    <div className='w-1/4'>
                        <p>Quantity</p>
                    </div>
                    <div className='w-1/4'>
                        <p>Price</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-1/3 flex flex-col'>
            <div className=' bg-cream-bg rounded-[50px]  '>
                <div className='flex justify-center items-center h-20 '>
                    <b className=' text-3xl'> Order Summary</b>
                </div>
                <div className='w-full h-1 bg-seconday-text'></div>
                <div className=' h-28 text-xl'>
                    <div className='w-full flex justify-between h-12 items-center'>
                        <b className=''>Subtotal</b>
                        <b>$39.00</b>
                    </div>
                    <div className='w-full flex justify-between text-seconday-text h-12 items-center'>
                        <b className=''>Sales Tax</b>
                        <b>$39.00</b>
                    </div>
                </div>
                <div>
                <div className='w-full flex justify-between text-2xl h'>
                        <b className=''>Total</b>
                        <b>$99.00</b>
                    </div>
                </div>
                <div className='w-full h-1 bg-seconday-text'></div>
                <div>
                    <div className='flex justify-center items-center h-14'>
                        <button className=' w-80 h-12 text-xl bg-primary rounded-full text-white hover:bg-btn-hover'>Procced to checkout</button>
                    </div>
                    <div>
                        <div className='flex justify-center items-center h-14'>
                            <button className=' w-80 h-12 text-xl bg-seconday-text rounded-full text-white hover:bg-btn-hover'>Continue shopping</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className=' text-2xl py-3'>
                    <b>Buy with confidence</b>
                </div>
                <div>
                    <div className='flex items-center p-1'>
                        <i className='w-12 h-12'><img src={iconTrust} alt="" /></i>
                        <div className='w-3/4'>
                            <b>World-class customer support. </b>
                            <p>There´s customer support, and them there´s Travel In Sight customer support. We take pride in going above and beyond to keep our community happy</p>
                        </div>
                    </div>
                    <div className='flex items-center p-1'>
                        <i className='w-12 h-12'><img src={iconTrust} alt="" /></i>
                        <div className='w-3/4'>
                            <b>World-class customer support. </b>
                            <p>There´s customer support, and them there´s Travel In Sight customer support. We take pride in going above and beyond to keep our community happy</p>
                        </div>
                    </div>
                    <div className='flex items-center p-1'>
                        <i className='w-12 h-12'><img src={iconTrust} alt="" /></i>
                        <div className='w-3/4'>
                            <b>World-class customer support. </b>
                            <p>There´s customer support, and them there´s Travel In Sight customer support. We take pride in going above and beyond to keep our community happy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </main>
  )
}

export default Cart