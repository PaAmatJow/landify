'use client'

import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { LiaTimesSolid } from 'react-icons/lia';

interface FAQProps {
  question: string;
  answer: string;
}

const Accordion = ({ question, answer }: FAQProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div
			className={`border-2 ${
				isOpen ? 'border-purple-500 ' : ''
			} rounded-lg w-full lg:w-[calc(50%-20px)]`}
		>
			<div className='flex flex-col gap-[15px] p-3 '>
				<div className='flex items-center justify-between'>
					<p className=''>{question}</p>
					<button onClick={handleClick} className='text-[16px] font-semibold'>
						{isOpen ? <LiaTimesSolid /> : <GoPlus />}
					</button>
				</div>
				{isOpen && <p className='text-[14px] text-gray-500 transition-all md:duration-1000 ease-in-out'>{answer}</p>}
			</div>
		</div>
	);
};

export default Accordion