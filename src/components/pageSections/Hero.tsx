import Button from '../button/Button';
import HeroArrow from '../svgs/HeroArrow';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdPlayCircle } from 'react-icons/io';
import SmallHeroArrow from '../svgs/SmallHeroArrow';
import SmallHeroArrowTwo from '../svgs/SmallHeroArrowTwo';
import HeroSparkle from '../svgs/HeroSparkle';
import HeroSparkleTwo from '../svgs/HeroSparkleTwo';
import TriangleLine from '../svgs/TriangleLine';
import TrianglePink from '../svgs/TrianglePink';
import React from 'react';

const Hero = () => {
	return (
		<div className='relative top-[80px] min-h-[calc(100vh-80px)] w-full bg-light'>
			{/* mobile hero */}
			<div className='absolute right-[50px] top-[50px] rounded-xl bg-dark px-3 py-1 text-center text-white md:-left-7 md:top-0 md:hidden md:px-5 md:py-2'>
				<h1 className='mb-[-10px] text-[30px] font-extrabold md:text-[40px]'>
					6k
				</h1>
				<p className='text-[12px] text-gray-500'>Clients</p>
				<div className='absolute right-[70px] top-[50px]'>
					<SmallHeroArrow />
				</div>
			</div>

			<div className='absolute bottom-[20%] right-[50px] rounded-xl bg-white px-5 py-1.5 text-center text-dark shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] md:-right-8 md:top-[57%] md:hidden'>
				<h1 className='mb-[-10px] text-[30px] font-bold md:text-[40px]'>40%</h1>
				<p className='text-[12px] text-gray-500'>Market</p>
				<div className='absolute right-[-80px] top-[35px]'>
					<SmallHeroArrowTwo />
				</div>
			</div>

			<div className='absolute bottom-[20px] left-1/2 flex -translate-x-1/2 items-center gap-[5px] rounded-md bg-white px-2  py-3 text-dark shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] md:-left-6 md:bottom-[6%] md:hidden'>
				<Image
					src='/images/smallHeroImg.webp'
					alt=''
					width={40}
					height={40}
					className='rounded-full object-cover'
				/>
				<p className='text-[12px] font-semibold'>Bring your ideas to life</p>
				<div className='absolute right-[-60px] top-[-20px]'>
					<HeroSparkle />
				</div>
				<div className='absolute bottom-[-10px] left-[-90px]'>
					<HeroSparkleTwo />
				</div>
			</div>
			{/* end of mobile hero */}

			<div className='absolute right-0 top-[20px] hidden h-[calc(100vh-100px)] w-[26%] items-center bg-[#1B1A20] md:flex'>
				<div className='absolute left-[-165px]'>
					<div className='relative h-[320px] w-[320px]'>
						<Image
							src='/images/heroGirl.jpg'
							alt='girl'
							fill={true}
							priority={true}
							className='hidden rounded-full object-cover shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] md:flex'
						/>
						<div className='absolute -left-7 top-0 rounded-xl bg-dark px-5 py-2 text-center text-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
							<h1 className='mb-[-10px] text-[40px] font-extrabold'>6k</h1>
							<p className='text-[14px] text-gray-500'>Clients</p>
							<div className='absolute left-[-190px] top-[0] hidden lg:flex'>
								<HeroArrow />
							</div>
						</div>

						<div className='absolute -right-8 top-[57%] z-20 rounded-xl bg-white px-5 py-1.5 text-center text-dark'>
							<h1 className='mb-[-10px] text-[40px] font-bold'>40%</h1>
							<p className='text-[14px] text-gray-500'>Market</p>
							<div className='absolute right-[-50px] top-[-40px] z-20'>
								<TrianglePink />
							</div>
						</div>

						<div className='absolute -left-6 bottom-[6%] flex items-center gap-[5px] rounded-md bg-white px-5 py-2.5  text-dark shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
							<Image
								src='/images/smallHeroImg.webp'
								alt=''
								width={40}
								height={40}
								className='rounded-full object-cover'
							/>
							<p className='text-[12px] font-semibold'>
								Bring your ideas to life
							</p>
						</div>
					</div>
				</div>
				<div className='absolute left-[5px] top-[0]'>
					<TriangleLine />
				</div>
			</div>
			<div className='flex h-[calc(100vh-100px)] flex-col justify-center px-[20px] lg:px-[80px]'>
				<div className='relative flex w-full flex-col gap-[20px] pl-[40px] md:w-[60%]'>
					<h1 className='text-[48px] font-extrabold leading-[44px] sm:text-[60px] sm:leading-[56px] md:text-[66px] md:leading-[70px] lg:text-[70px]'>
						Academy <br /> of Your Business
					</h1>
					<p className='mb-[10px] max-w-[90%] text-[18px] text-gray-500 lg:text-[18.5px]'>
						Organizes work so teams know what to do, why it matters, and how to
						get it done.
					</p>
					<div className='flex gap-[20px]'>
						<Button name='Get Started' url='/' variant='bg-Pink' />
						<Link href='/' className='flex items-center gap-[10px]'>
							<button className=''>
								<IoMdPlayCircle className='text-[40px]' />
							</button>
							<p className='text-[14px] font-semibold lg:text-[16px]'>
								View Demo
							</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
