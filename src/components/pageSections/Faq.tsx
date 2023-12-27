import React from 'react';
import { FAQ } from '@/constants';
import Accordion from '@/components/accordion/Accordion';
import FAQArrow from '@/components/svgs/FAQArrow';
import SquareDark from '@/components/svgs/SquareDark';
import TriangleGreen from '@/components/svgs/TriangleGreen';

const Faq = () => {
	const faqOne = FAQ.slice(0, 3);
	const faqTwo = FAQ.slice(3);

	return (
		<div className='relative max-w-[1366px] mx-auto my-[100px] px-[20px] lg:px-[120px]'>
			<div className='px-8'>
				<div className='relative mb-[20px]'>
					<h1 className='text-[38px]'>Frequently Asked Questions</h1>
					<p className=' text-gray-500'>
						If you have any futher questions please contact us.
					</p>
					<div className='absolute left-[-16px] top-[-5px] -z-10'>
						<TriangleGreen />
					</div>
				</div>

				<div className='flex flex-col gap-x-[20px] gap-y-[10px] lg:flex-row lg:gap-y-0'>
					<div className='flex w-full flex-col gap-[10px]'>
						{faqOne.map((quest) => {
							const { id, question, answer } = quest;
							return <Accordion key={id} question={question} answer={answer} />;
						})}
					</div>

					<div className='flex w-full flex-col gap-[10px] '>
						{faqTwo.map((quest) => {
							const { id, question, answer } = quest;
							return <Accordion key={id} question={question} answer={answer} />;
						})}
					</div>
				</div>
			</div>
			<div className='absolute right-[24%] top-[-80px]'>
				<FAQArrow />
			</div>
			<div className='absolute bottom-[-70px] right-[120px]'>
				<SquareDark />
			</div>
		</div>
	);
};

export default Faq;
