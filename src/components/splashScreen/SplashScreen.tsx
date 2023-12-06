import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { sentence, letter, imgAnim } from '../../framerMotion/animations';
import Image from 'next/image';
// animation

interface SplashScreenProps {
	finishLoading: () => void;
}

const SplashScreen = ({ finishLoading }: SplashScreenProps) => {
	const logoName = 'Landify™';
	useEffect(() => {
		const timeout = setTimeout(() => {
			finishLoading();
		}, 3000);
		return () => clearTimeout(timeout);
	}, [finishLoading]);
	return (
		<div className='bg-light h-screen flex items-center justify-center'>
			<motion.div variants={imgAnim} initial='hidden' animate='visible'>
				<Image src='/images/landify.png' alt='' width={50} height={50} />
			</motion.div>

			<motion.h1
				className='text-dark font-bold font-edu text-3xl md:text-4xl'
				variants={sentence}
				initial='hidden'
				animate='visible'
			>
				{logoName.split('').map((char, index) => {
					return (
						<motion.span key={char + '-' + index} variants={letter}>
							{char}
						</motion.span>
					);
				})}
			</motion.h1>
		</div>
	);
};

export default SplashScreen;
