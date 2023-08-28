import NextLink, { LinkProps } from 'next/link';

interface NextLinkProps {
	children: React.ReactNode,
	href: LinkProps['href'];
	className?: string,
	title?: string
}

const Link: React.FC<NextLinkProps> = ({ className, children, href }) => {
  return (
    <NextLink href={href} legacyBehavior>
      <a className={className}>{children}</a>
    </NextLink>
  );
};

export default Link;
