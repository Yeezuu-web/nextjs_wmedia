"use client"

import useEmblaCarousel, {
	EmblaOptionsType,
} from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
  

type PropType = {
	options?: EmblaOptionsType
	slides: React.ReactNode[]
  }

// const slides = [1, 2, 3, 4];

const indexToColor = (n: number, l: number) =>
  `hsla(${Math.floor(360 / l) * n}, 75%, 75%, .8)`;

export const EmblaCarousel = (props: PropType) => {
  const { options, slides } = props
  const [emblaRef] = useEmblaCarousel(options, [Autoplay({
	delay: 9000
  })])

  return (
    <div className="overflow-x-hidden" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide, index) => (
          <div className="flex flex-grow-0 shrink-0 basic-[33.33%]" key={index}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  )
}