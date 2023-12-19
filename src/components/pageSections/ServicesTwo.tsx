import React from 'react';
import { SERVICES } from '@/constants';
import ServiceCard from '@/components/card/ServiceCard';
import ServiceArrow from '@/components/svgs/ServiceArrow';
import TriangleDark from '@/components/svgs/TriangleDark';

const ServicesTwo = () => {
	return (
		<div className='relative px-[20px] lg:px-[120px]'>
			<div className='relative mb-[30px] text-center'>
				<h1 className='text-[38px]'>Services we provide</h1>
				<p className=' mx-auto max-w-[22rem] text-gray-500'>
					We specialize in organizing professional training courses.
				</p>
				<div className='absolute left-[100px] top-[20px] hidden md:flex'>
					<TriangleDark />
				</div>
			</div>
			<div className='flex flex-wrap justify-center gap-[20px]'>
				{SERVICES.map((service) => {
					const { id, title, desc, variant } = service;
					return (
						<ServiceCard key={id} title={title} desc={desc} variant={variant} />
					);
				})}
				<div className='absolute left-[26%] top-[-50px]'>
					<ServiceArrow />
				</div>
			</div>
		</div>
	);
};

export default ServicesTwo;
