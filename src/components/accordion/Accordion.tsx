'use client';

import { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import { LiaTimesSolid } from 'react-icons/lia';
import { motion, AnimatePresence } from 'framer-motion';

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
		<motion.div
			className={`border-2 ${
				isOpen ? 'border-purple-500 ' : ''
			} w-full rounded-lg `}
		>
			<AnimatePresence>
				<motion.div
					onClick={handleClick}
					className='flex cursor-pointer flex-col gap-[15px] p-3'
				>
					<motion.div className='flex items-center justify-between'>
						<p className=''>{question}</p>
						<button className='text-[16px] font-semibold'>
							{isOpen ? <LiaTimesSolid /> : <GoPlus />}
						</button>
					</motion.div>
					{isOpen && (
						<motion.p
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								transition: {
									duration: 0.5,
								},
							}}
							exit={{ opacity: 0 }}
							className='text-[14px] text-gray-500 '
						>
							{answer}
						</motion.p>
					)}
				</motion.div>
			</AnimatePresence>
		</motion.div>
	);
};

export default Accordion;
