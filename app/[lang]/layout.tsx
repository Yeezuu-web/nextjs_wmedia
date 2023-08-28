import Header from '@/components/Header/Navbar'
import Carousel from '@/components/ui/carousel'
import { Locale, i18n } from '@/i18n.config'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter, Kantumruy_Pro } from 'next/font/google'

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

	const fontFamily = params.lang == 'en' ? inter.className : kantumruyPro.className;

  return (
    <html lang={params.lang}>
      <body className={fontFamily}>
		<div className='w-full'>
			<div className='relative'>
				<Header lang={ params.lang } />
				<Carousel />
			</div>
			{children}
		</div>
		</body>
    </html>
  )
}
