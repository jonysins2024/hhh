import React from 'react'

const Buy_Now = () => {
    return (
        <div className='md:max-w-[1220px] mx-auto px-2 md:px-0 pt-5 md:pt-0'>
            <section className='flex flex-col md:flex-row justify-between md:gap-x-4 gap-y-5'>
                <section className='md:w-[50%] bg-slate-0 md:p-4 bg-white'>
                    <p className='text-center text-[18px] py-7'>To confirm the order, enter your name, address, mobile number, and click on the <span className='text-primaryColor1'>confirm order</span> button</p>
                    <section className='flex flex-col gap-y-4'>
                        <div>
                            <p className='pl-[5px]'>Your Name</p>
                            <input className='w-full outline-none border-[1.2px] border-[#ced4da] rounded-[4px] py-2 pl-[8px] mt-1' placeholder='Enter Your Name' type="text" />
                        </div>
                        <div>
                            <p className='pl-[5px]'>Your Mobile Number</p>
                            <input className='w-full outline-none border-[1.2px] border-[#ced4da] rounded-[4px] py-2 pl-[8px] mt-1' placeholder='Enter Your Mobile Number' type="text" />
                        </div>
                        <div>
                            <p className='pl-[5px]'>Your Full Address</p>
                            <input className='w-full outline-none border-[1.2px] border-[#ced4da] rounded-[4px] py-2 pl-[8px] mt-1' placeholder='Enter Your Full Address' type="text" />
                        </div>
                        <div className=''>
                            <p className='pl-[5px]'>Select Area</p>
                            <p ><select className='w-full outline-none border-[1.2px] border-[#ced4da] rounded-[4px] py-3 pl-[8px] mt-1' name='select' id="select">
                                <option value="DJI">Inside Dhaka</option>
                                <option value="Parrot">Outside Dhaka</option>
                            </select></p>
                        </div>
                        <button className='w-full py-3 bg-orange-500 rounded-[3px]'>Order Now</button>
                    </section>
                </section>
                <section className='md:w-[50%] bg-white md:p-4 md:pt-0 py-4 md:py-0'>
                    <p className='text-[18px] text-center md:text-left'>Your Order</p>
                    <div className='flex justify-between items-center pt-5 md:gap-x-4 gap-x-2'>
                        <div className='w-[20%]'><img className='w-[90px] h-[60px] md:w-[80px] md:h-[80px] rounded-[2px]' src="https://static-01.daraz.com.bd/p/2c8042f35e24ed861bc314b96ff7e466.jpg_300x0q75.webp" alt="" /></div>
                        <div className='w-[70%] font-serif text-[10.5px] md:text-[14px]'>Carton Style Toddler Infant Kids Baby Girls Summer Sandals  Princess Sandals Cartoon Soft Sandals Crib Shoes Boy First Walkers(0-12Month)</div>
                        <div className='w-[10%] text-right'><p>TK</p> <p>1290</p></div>
                    </div>
                    <hr className='mt-3 border-t-2' />
                    <div className='flex gap-y-2 flex-col mt-10'>
                        <div className='flex justify-between'>
                            <p className='font-bold'>Subtotal:</p>
                            <p className='font-bold'><span className='font-semibold'>TK</span> 1290</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='font-bold'>Delivery charge:</p>
                            <p className='font-bold text-orange-600'><span className='font-semibold'>TK</span> 60</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='font-bold text-[18px]'>Total:</p>
                            <p className='font-bold text-[19.2px]'>TK 1450</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Buy_Now