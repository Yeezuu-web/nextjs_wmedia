"use client"

import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import Slider, { Settings } from "react-slick";

interface SliderProps {
	slides: string[]
}

interface SliderArrowProps {
	type: "next" | "prev";
	onClick: () => void;
  }
  
  const SliderArrow = (props: SliderArrowProps) => {
	const { type, ...rest } = props;
  
	return (
	  <div {...rest} className={`absolute z-10 ${ type === 'next' ? 'right-5' : 'left-5'} rounded-full w-10 h-10 xl:w-14 xl:h-14 flex items-center justify-center cursor-pointer top-[50%] bg-white/5 hover:bg-white/10 overflow-x-hidden`} >
		{type === "next" ? <ChevronRight className="w-7 h-7 text-white"/> : <ChevronLeft className="w-7 h-7 text-white"/>}
	  </div>
	);
  };

const SimpleSlider: React.FC<SliderProps> = ({ slides }) => {
	const sliderRef = useRef<Slider>(null);
	
    const settings: Settings = {
		arrows: true,
		autoplay: true,
		dots: true,
		fade: true,
		infinite: true,
		autoplaySpeed: 6000,
		slidesToShow: 1,
		slidesToScroll: 1,
		appendDots: dots => (
			<div style={{
				width: "auto",
				borderRadius: "10px",
				padding: "10px",
				bottom: 5,
				left: '75%'
			  }}>
				<ul> 
					{dots}
				</ul>
			</div>
		),
		customPaging: (i: number) => (
			<div className="w-2 h-2 xl:w-3 xl:h-3 -top-14 rounded-full bg-white/70 left-60">
				{/* { i + 1 } */}
			</div>
		)  
    };
	
	return (
		<div className="w-full h-screen">
		<SliderArrow type="prev" onClick={() => sliderRef.current?.slickPrev()}/>
		<Slider {...settings} ref={sliderRef} >
			{slides.map((slide, index) => (
				<div key={index} className="relative w-full h-screen">
					<Image className="object-cover" src={slide} alt="carousel" fill sizes="100%" quality={100}/>
				</div>
			))}
		</Slider>
		<SliderArrow type="next" onClick={() => sliderRef.current?.slickPrev()}/>
		</div>
	);
}


export default SimpleSlider