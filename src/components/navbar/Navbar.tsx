import Image from 'next/image';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';
import Button from '../button/Button';
import MobileNav from './MobileNav';

const Navbar = () => {
	return (
		<nav className='flex h-[80px] items-center justify-between md:justify-around lg:justify-between bg-white px-[20px] lg:px-[80px]'>
			<Link href='/' className='flex items-center gap-[2px]'>
				<Image src='/images/landify.png' alt='logo' width={40} height={40} />
				<h3 className='text-[16px] lg:text-[18px] font-bold'>Landify&#8482;</h3>
			</Link>

			<div className='hidden w-[50%] items-center justify-between gap-[40px] md:flex lg:justify-around'>
				<div className='flex items-center gap-[20px] text-[14px] lg:text-[16px] font-medium text-gray-500'>
					<Link href='/' className='flex items-center gap-[5px]'>
						Product <FaChevronDown className='text-[12px]' />
					</Link>
					<Link href='/' className='flex items-center gap-[5px]'>
						Solutions <FaChevronDown className='text-[12px]' />
					</Link>
					<Link href='/' className='flex items-center gap-[5px]'>
						Resources <FaChevronDown className='text-[12px]' />
					</Link>
					<Link href='/' className=''>
						Pricing
					</Link>
				</div>
				<div className=''>
					<Button name='Subscribe' url='/' variant='text-white bg-dark' />
				</div>
			</div>

			<div className='max-md:flex hidden'>
				<MobileNav />
			</div>
		</nav>
	);
};
export default Navbar;
