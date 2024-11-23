import React from 'react'
import BurgerImg from '../../../assets/burger/burger4.png'


function Offer() {
    return (
        <div className=' '>
            <div className='min-h-[600px] flex justify-center items-center'>
                <div className='container'>
                    <div className='flex flex-col sm:flex-row sm:justify-evenly gap-16'>
                        {/* image section  */}
                        <div>
                            <img src={BurgerImg} alt="" className='max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]' />
                        </div>
                        {/* text content section  */}
                        <div className='flex flex-col justify-center gap-6 sm:pt-0 sm:max-w-[550px]' >
                            <h1 className='text-3xl sm:text-4xl font-bold'>
                                Buy 2 burger get 1 free
                            </h1>
                            <p className='text-gray-500 text-sm tracking-wide leading-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum veniam cumque aperiam? Qui, voluptatum quasi!
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab sed, exercitationem minima aliquid eligendi distinctio? Fugit repudiandae numquam hic quo recusandae. Excepturi totam ad nam velit quasi quidem aspernatur.
                            </p>

                            <div className='text-left sm:text-center lg:text-left '>

                                <button className="bg-gradient-to-r from-primary to-secondary  text-gray-300 font-bold py-1 px-4 rounded-xl hover:scale-105 duration-300">Order Now</button>

                                <div className="text-gray-500 text-sm tracking-wide leading-5">
                                    <p className='mt-1'>Offer valid for only friday</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer