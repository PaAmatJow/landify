import Image from 'next/image';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';
import Button from '../button/Button';
import MobileNav from './MobileNav';

const Navbar = () => {
	gsap.registerPlugin(ScrollTrigger);

	const navbarRef = useRef(null);

	useEffect(() => {
		const showNav = gsap
			.fromTo(
				navbarRef.current,
				{
					opacity: 0,
				},
				{
					opacity: 1,
					duration: 0.1,
				}
			)
			.progress(1);
		ScrollTrigger.create({
			start: 'top top',
			end: 'max',
			onUpdate: (self) => {
				self.direction === -1 ? showNav.play() : showNav.reverse();
			},
		});
	}, []);

	return (
		<nav
			ref={navbarRef}
			className='fixed top-0 z-50 flex h-[80px] w-full items-center justify-between bg-white px-[20px] shadow-sm transition-all duration-100 md:justify-around lg:justify-between lg:px-[80px]'
		>
			<Link href='/' className='flex items-center gap-[2px]'>
				<div className="relative w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px]">
					<Image src='/images/landify.png' alt='logo' fill={true} />
				</div>
				<h3 className='text-[16px] font-bold lg:text-[18px] 2xl:text-[22px]'>Landify&#8482;</h3>
			</Link>

			<div className='hidden w-[50%] items-center justify-between gap-[40px] md:flex lg:justify-around'>
				<div className='flex items-center gap-[20px] text-[14px] font-medium text-gray-500 lg:text-[16px]'>
					<Link
						href='/'
						className='flex items-center gap-[5px] transition-all duration-100 hover:scale-105 hover:text-black 2xl:text-[22px]'
					>
						Product <FaChevronDown className='text-[12px]' />
					</Link>
					<Link
						href='/'
						className='flex items-center gap-[5px] transition-all duration-100 hover:scale-105 hover:text-black 2xl:text-[22px]'
					>
						Solutions <FaChevronDown className='text-[12px]' />
					</Link>
					<Link
						href='/'
						className='flex items-center gap-[5px] transition-all duration-100 hover:scale-105 hover:text-black 2xl:text-[22px]'
					>
						Resources <FaChevronDown className='text-[12px]' />
					</Link>
					<Link
						href='/'
						className='transition-all duration-100 hover:scale-105 hover:text-black 2xl:text-[22px]'
					>
						Pricing
					</Link>
				</div>
				<div className=''>
					<Button name='Subscribe' url='/' variant='text-white bg-dark' />
				</div>
			</div>

			<div className='hidden max-md:flex'>
				<MobileNav />
			</div>
		</nav>
	);
};
export default Navbar;
