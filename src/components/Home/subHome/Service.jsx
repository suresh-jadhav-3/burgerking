import React from 'react'

import BurgerImg1 from '../../../assets/burger/burger2.png'
import BurgerImg2 from '../../../assets/burger/burger3.png'

function Service() {

    const imgList = [
        {
            id: 1,
            img: BurgerImg1,
            name: "Burger",
            description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet."
        },
        {
            id: 2,
            img: BurgerImg2,
            name: "Chiken Burger",
            description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet."
        },
        {
            id: 3,
            img: BurgerImg1,
            name: "Veg Burger",
            description: "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet."
        },
    ]


    return (
        
        <div className='bg-gray-100' >
            <div className='py-12 lg:py-20'>
                <div className='container'>
                    {/* header section  */}
                    <div className='text-center mb-20 max-w-[400px] mx-auto'>
                        <p className='text-sm text-primary '>Our Service</p>
                        <h1 className='text-3xl font-bold'>Service</h1>
                        <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis delectus architecto error nesciunt,</p>
                    </div>
                    {/* card section  */}
                    <div  className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
                        {imgList.map((data) => (
                            <div className='rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-500 group sm:max-w-[300px] max-w-[300px]' key={data.id} >
                                <div className='h-[100px]' >
                                    <img src={data.img} key={data.id} alt="" className=' block mx-auto transform -translate-y-16 group-hover:scale-105 duration-300 w-[200px]'/>
                                </div>
                                <div className='p-4 text-center '>
                                    <h1 className='text-xl font-bold'>{data.name}</h1>
                                    <p className='text-gray-500 group-hover:text-white duration-500 text-sm line-clamp-2'>{data.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Service