import Image from 'next/image';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
	return (
		<nav className='px-[20px] lg:px[60px] bg-light flex items-center justify-between h-[100px]'>
			<div className='flex items-center gap-[2px]'>
				<Image src='/images/landify.png' alt='logo' width={40} height={40} />
				<h3 className='text-[16px] font-bold'>Landify&#8482;</h3>
			</div>

			<div className='items-center justify-between lg:justify-around w-[50%] gap-[40px] hidden lg:flex'>
				<div className='flex items-center gap-[20px] text-[14px] font-semibold text-gray-500'>
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
					<Link href='/'>
						<button className='text-[14px] text-white bg-dark font-semibold px-6 py-4 rounded-lg'>
							Subscribe
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
