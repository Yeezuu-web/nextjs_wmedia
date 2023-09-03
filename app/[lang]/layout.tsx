import Navbar from '@/components/Header/Navbar'
import { Locale, i18n } from '@/i18n.config'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter, Kantumruy_Pro } from 'next/font/google'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import SimpleSlider from '@/components/ui/carousel'

const inter = Inter({ 
	subsets: ['latin'],
	variable: '--font-inter' 
})

const kantumruyPro = Kantumruy_Pro({
	subsets: ['khmer'],
	variable: '--font-kantumruy'
})

export const metadata: Metadata = {
  title: 'W Media - Digital Marketing',
  description: 'Cambodia digital marketing service.',
}

export async function getStaticParam() {
	return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { lang: Locale }
}) {
	const slides = [
		'https://images.unsplash.com/photo-1612043071344-94c20c4c837e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2664&q=80',
		'https://images.unsplash.com/photo-1557804506-e969d7b32a4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2645&q=80',
		'https://images.unsplash.com/photo-1470338229081-eb5980be28c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
	];

	const fontFamily = params.lang == 'en' ? inter.className : kantumruyPro.className;

  return (
    <html lang={params.lang}>
      <body className={fontFamily}>
		<div className='w-full'>
			<div className='relative overflow-hidden'>
				<Navbar lang={ params.lang } />
				<SimpleSlider slides={slides} />
			</div>
			{children}
		</div>
		</body>
    </html>
  )
}
