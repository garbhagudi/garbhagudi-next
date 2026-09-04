import Link from 'next/link';
import LogoSvg from 'components/gpt/icons/logo';

export default function Logo(props) {
  return (
    <Link
      href='/'
      className='inline-flex cursor-pointer items-center [&_svg]:h-auto [&_svg]:w-[200px] sm:[&_svg]:w-full'
      style={{ fill: '#ea4b6a' }}
      {...props}
    >
      <LogoSvg />
    </Link>
  );
}
