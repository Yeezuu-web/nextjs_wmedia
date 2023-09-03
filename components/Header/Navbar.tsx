import { Fragment } from 'react';
import NavbarItem from "./NavbarItem"
import { siteSettings } from '@/settings/navigations';
import { Locale } from '@/i18n.config';
import Image from "next/legacy/image";
import Wmedia from '../../public/wmedia_logo.svg';
import { ValidLocale, getTranslator } from '@/i18n';

type Label = "home" | "about" | "businesses" | "csr"

interface Settings {
	href: string;
	label: string
}

const Navbar = async ({lang}: {lang: Locale}) => {
	const translate = await getTranslator(
		`${lang}` as ValidLocale // our middleware ensures this is valid
	  );
	const { leftNav, rightNav } = siteSettings;
	
	const NavBarItemMap = ({settings}: { settings: Settings[]}) => (
		<Fragment>
			{settings.map(({ href, label }) => (
				<NavbarItem href={href} label={translate(`navBar.${label as Label}`)} key={href} />
			))}
    	</Fragment>
	)

	

	return (
		<header className='absolute z-10 top-0 w-full flex items-center justify-center bg-gray-900 text-white transition-transform duration-300 transform translate-y-0'>
			<nav className='container h-20 hidden lg:flex items-center justify-between shrink-0 gap-16'>
				<div className='w-full flex items-start justify-between'>
					<NavBarItemMap settings={leftNav} />
				</div>
				<div className='w-44'>
					<Image src={Wmedia} alt='logo' objectFit='cover'/>
				</div>
				<div className='w-full flex items-start justify-between'>
					<NavBarItemMap settings={rightNav} />
				</div>
			</nav>
		</header>
	)
}

export default Navbar