import { Fragment } from 'react';
import NavbarItem from "./NavbarItem"
import { siteSettings } from '@/settings/navigations';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import Image from 'next/image';
import Wmedia from '../../public/wmedia_logo.svg'

type Label = "home" | "about" | "businesses" | "csr"

interface Settings {
	href: string;
	label: string
}

const Header = async ({lang}: {lang: Locale}) => {
	const { navBar } = await getDictionary(lang);
	const { leftNav, rightNav } = siteSettings;
	
	const NavBarItemMap = ({settings}: { settings: Settings[]}) => (
		<Fragment>
			{settings.map(({ href, label }) => (
				<NavbarItem href={href} label={navBar[label as Label]} key={href} />
			))}
    	</Fragment>
	)

	return (
		<div className='absolute z-10 top-0 w-full h-20 hidden lg:flex items-center justify-between shrink-0 gap-20 lg:px-20 xl:px-44 2xl:gap-36 2xl:px-60 bg-black'>
			<div className='w-full flex items-start justify-between'>
				<NavBarItemMap settings={leftNav} />
			</div>
			<div className='w-44'>
				<Image src={Wmedia} alt='logo' objectFit='true'/>
			</div>
			<div className='w-full flex items-start justify-between'>
				<NavBarItemMap settings={rightNav} />
			</div>
		</div>
	)
}

export default Header