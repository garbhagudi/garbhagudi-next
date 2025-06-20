import Logo from 'components/assets/logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const path = usePathname();
  return (
    <div>
      <div className='mx-auto max-w-7xl px-3'>
        <div className='flex items-center justify-between py-3'>
          <Link href='/'>
            <Logo />
          </Link>
          <Link
            href={
              path === '/treatments/iui-treatment-in-bangalore'
                ? 'tel:+919480948005 '
                : 'tel:+919108910832'
            }
            className='rounded-md bg-gg-500 px-3 py-2 font-lexend text-sm font-semibold text-white transition duration-300 ease-in-out hover:bg-gg-600'
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
