import React from 'react'
import Slider from "react-slick";



function Testimonial() {

    const settings = {
        dots: false,
        arrows: false,
        loop: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        mobileFirst: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
      };

      const TestimonialData = [
        {
          id: 1,
          name: "Samuel",
          testimonial:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: "https://picsum.photos/101/101",
        },
        {
          id: 1,
          name: "John Doe",
          testimonial:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: "https://picsum.photos/102/102",
        },
        {
          id: 1,
          name: "Smith",
          testimonial:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: "https://picsum.photos/103/103",
        },
      ];

  return (
    
        <div className='conatiner pt-6'>
            {/* header Title  */}
            <div className='text-center mb-20 max-w-[400px] mx-auto'>
                        <p className='text-sm text-primary '>What our customers say</p>
                        <h1 className='text-3xl font-bold'>Testimonial
                        </h1>
                        <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis delectus architecto error nesciunt,</p>
                    </div>
            {/* Testimonial card  */}
            <div className='max-w-[600px] mx-auto'>
                <Slider {...settings}>
                    {
                        TestimonialData.map((data) => (
                            <div key={data.id}>
                                <div className='text-center shadow-2xl p-4 rounded-xl space-y-3 my-8 mx-5' >
                                    <img src={data.img} alt="" 
                                    className='rounded-full block mx-auto'
                                    />
                                    <p className='text-gray-500 text-sm'>{data.testimonial}</p>

                                    <h1 className='text-xl font-bold'>{data.name}</h1>
                                </div>

                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    
  )
}

export default Testimonial