import React, { useState } from 'react'
import BurgerImg1 from '../../../assets/burger/burger1.png'
import BurgerImg2 from '../../../assets/burger/burger2.png'
import BurgerImg3 from '../../../assets/burger/burger3.png'
import Victore from '../../../assets/vector.png'



function Hero() {

  const ImageList = [
    {
      id: 1,
      img: BurgerImg1,
    },
    {
      id: 2,
      img: BurgerImg2,
    },
    {
      id: 3,
      img: BurgerImg3,
    }
  ]

  const [imageId, setImageId] = useState(BurgerImg1)

  const bgImage = {
    backgroundImage: `url(${Victore})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
  }
  return (
    <div style={bgImage} className='min-h-[650px] bg-gray-100'>
      <div className='min-h-[650px] backdrop-blur-md flex justify-center items-center'>
        <div className='container pb-8 sm:pb:0'>
          <div className='grid grid-cols-1 sm:grid-cols-2'>
            {/* text-content section  */}
            <div className=' flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left '>
              <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'
              data-aos="zoom-out"
              data-aos-duration="2000"
              > Welcome to {" "}
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary drop-shadow-[4px_4px_0_rgba(255, 255, 255,1)]"
                  style={{
                    filter: " drop-shadow-[4px_4px_0_rgba(255, 255, 255,1)]"
                  }}
                >
                  Bruger
                </span>{" "}
                King
              </h1>
              <p className='text-sm'
              data-aos="fade-up"
              data-aos-duration="2000"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eaque reiciendis inventore iste ratione ex alias quis magni at
                optio
              </p>
              <div >
                <button
                  className='bg-gradient-to-r from-primary to-white hover:scale-105 duration-200 text-black font-bold py-2 px-4 rounded-full border-2 border-white'
                >
                  Order Now
                </button>
              </div>
            </div>
            {/* image section  */}
            <div className='min-h-[400px] flex justify-center items-center '>
              <div
              // data-aos="fade-left"
              //       data-aos-duration="2000"
              >
                <img
                  src={imageId}
                  alt="BurgerImg"
                  className='max-w-[430px] hover:scale-105 duration-300 w-full mx-auto drop-shadow-[-6px_20px_15px_rgba(0,0,0,1)]'
                />
              </div>
              <div 
              // data-aos="fade-left"
              //       data-aos-duration="2000" 
                    className='flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-1 justify-center gap-4 absolute bottom-[100px] lg:right-10 bg-white/30 rounded-full  '>
                {
                  ImageList.map((img) => (
                    <div key={img.id}
                    
                    >
                      <img
                        
                        src={img.img} alt="burger img"
                        onClick={() => setImageId(img.img)}
                        className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200"
                      />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero