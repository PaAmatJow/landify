import React from 'react';
import Button from '@/components/button/Button';
import ServicesDash from '@/components/svgs/ServicesDash';
import Image from 'next/image';
import { GoClockFill } from 'react-icons/go';
import { IoSettingsSharp } from 'react-icons/io5';
import { TbArticleFilledFilled } from 'react-icons/tb';
import { BiSolidBarChartSquare } from 'react-icons/bi';
import TriangleSun from '@/components/svgs/TriangleSun';

const ServicesOne = () => {
	return (
		<div className='my-[150px] max-w-[1366px] mx-auto bg-white px-[20px] lg:px-[120px]'>
			<div className=''>
				<div className='mb-[30px] text-center'>
					<h1 className='text-[38px]'>The process we follow</h1>
					<p className=' mx-auto max-w-[22rem] text-gray-500'>
						As an academy of business, we are going through the development
						cycle
					</p>
				</div>

				<div className='flex flex-wrap justify-center gap-[30px] md:flex-row'>
					<div className='flex w-[10rem] flex-col items-center justify-center gap-[10px] text-center lg:w-[12rem]'>
						<div className='rounded-full bg-lime p-3'>
							<TbArticleFilledFilled />
						</div>
						<h3 className='text-[20px]'>Business idea</h3>
						<p className='max-w-[9.5rem] text-[14px] text-gray-500 lg:max-w-[11rem] lg:text-[16px]'>
							What you want your business to be.
						</p>
					</div>
					<div className='flex w-[10rem] flex-col items-center justify-center gap-[10px] text-center lg:mt-[60px] lg:w-[12rem]'>
						<div className='rounded-full bg-sun p-3'>
							<GoClockFill className='' />
						</div>
						<h3 className='text-[20px]'>Planning</h3>
						<p className='max-w-[9.5rem] text-[14px] text-gray-500 lg:max-w-[11rem] lg:text-[16px]'>
							A business plan helps formalize your idea.
						</p>
					</div>
					<div className='flex w-[10rem] flex-col items-center justify-center gap-[10px] text-center lg:w-[12rem]'>
						<div className='rounded-full bg-Pink p-3'>
							<IoSettingsSharp />
						</div>
						<h3 className='text-[20px]'>Develop</h3>
						<p className='max-w-[9.5rem] text-[14px] text-gray-500 lg:max-w-[11rem] lg:text-[16px]'>
							Ideation, prototyping, costing of your product.
						</p>
					</div>
					<div className='flex w-[10rem] flex-col items-center justify-center gap-[10px] text-center lg:mt-[60px] lg:w-[12rem]'>
						<div className='rounded-full bg-gray-200 p-3'>
							<BiSolidBarChartSquare />
						</div>
						<h3 className='text-[20px]'>Business structure</h3>
						<p className='max-w-[9.5rem] text-[14px] text-gray-500 lg:max-w-[11rem] lg:text-[16px]'>
							Key parts of your business.
						</p>
					</div>
				</div>

				<div className='mt-[200px] px-[20px] lg:px-[80px]'>
					<div className='relative flex justify-start rounded-xl bg-dark px-8 py-7 md:justify-end lg:w-full'>
						<div className='flex w-full flex-col gap-[20px] md:w-1/2 lg:w-[27rem]'>
							<h3 className='text-[36px] text-white'>Our Story</h3>
							<p className='font-normal text-gray-500 lg:text-[16px]'>
								We specialize in organizing professional training courses and we
								have been doing it in Poland since 1994. As a academy of
								business, we are going through the development cycle.
							</p>
							<Button name='Get Started' url='/' variant='bg-Pink text-dark' />
						</div>
						<div className='absolute left-0 top-0 hidden h-full w-[40%] md:flex lg:left-[5.2%] lg:top-[-20%] lg:h-[370px] lg:w-[32%]'>
							<Image
								src='/images/glassesGirl.jpg'
								alt='glasses girl'
								fill={true}
								className='rounded-l-xl object-cover lg:rounded-xl'
							/>
						</div>
						<div className='absolute right-[40%] top-[-50%]'>
							<ServicesDash />
						</div>
						<div className='absolute right-[-25px] top-[-30px]'>
							<TriangleSun />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServicesOne;
