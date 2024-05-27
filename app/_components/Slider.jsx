import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

const Slider = ({ sliderList }) => {
    return (
        <>
            <Carousel>
                <CarouselContent>
                    {sliderList.map((slider,index)=>(
                        <CarouselItem key={index}>
                            {/* {console.log(slider.attributes.Image.data[0].attributes.url)} */}
                            
                            <CarouselItem>
                                <Image 
                                    src={slider.attributes.Image.data[0].attributes.url}
                                    width={1000} 
                                    height={400} 
                                    alt='image'
                                    className='w-full h-[200px] md:h-[400px] object-cover rounded-2xl'
                                />
                            </CarouselItem>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
        
    )
}

export default Slider