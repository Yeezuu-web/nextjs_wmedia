import Link from '../ui/link'

const NavbarItem = ({href, label}: { href: string, label: string}) => {
	return (
		<Link
		  href={href}
		  className="flex items-center text-white text-center font-semibold text-base xl:text-lg shrink-0"
		>
		  <span>{label}</span>
		</Link>
	)
}

export default NavbarItem