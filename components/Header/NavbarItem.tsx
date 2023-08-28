import Link from '../ui/link'

const NavbarItem = ({href, label}: { href: string, label: string}) => {
	return (
		<Link
		  href={href}
		  className="flex items-center text-white text-center font-bold text-base xl:text-xl shrink-0"
		>
		  <span>{label}</span>
		</Link>
	)
}

export default NavbarItem