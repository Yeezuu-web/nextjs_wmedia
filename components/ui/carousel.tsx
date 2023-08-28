import Image from "next/image"
import { EmblaCarousel } from "./emblaCarousel"

const slides = [
	// eslint-disable-next-line react/jsx-key
	<div className="w-full h-auto">
		<Image src='https://images.unsplash.com/photo-1630926906914-f98970d8894c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2664&q=80' alt="cover" width={2652} height={1267} objectFit='true'/>
	</div>,
	// eslint-disable-next-line react/jsx-key
	<div className="w-full h-auto">
		<Image src='https://images.unsplash.com/photo-1630926906914-f98970d8894c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2664&q=80' alt="cover" width={2652} height={1267} objectFit='true'/>
	</div>,
	// eslint-disable-next-line react/jsx-key
	<div className="w-full h-auto">
		<Image src='https://images.unsplash.com/photo-1630926906914-f98970d8894c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2664&q=80' alt="cover" width={2652} height={1080} objectFit='true'/>
	</div>,
	// eslint-disable-next-line react/jsx-key
	<div className="w-full h-auto">
		<Image src='https://images.unsplash.com/photo-1630926906914-f98970d8894c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2664&q=80' alt="cover" width={2652} height={1267} objectFit='true'/>
	</div>,
]


const Carousel = () => {
	return (
		<div className="relative">
			<div className="absolute w-full h-screen z-20 flex items-center justify-center">
				<p className="font-bold text-9xl text-white">W Media Digital Marketing</p>
			</div>
			<EmblaCarousel 
				options={{loop: true}} 
				slides={slides}
			/>
		</div>
	)
}

export default Carousel