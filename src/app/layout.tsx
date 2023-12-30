'use client'


import localFont from 'next/font/local';
import './globals.css';
import React, { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { usePathname } from 'next/navigation';
import SplashScreen from '@/components/splashScreen/SplashScreen';
import SmoothScroll from '@/components/smoothScroll/SmoothScroll';


const Grold = localFont({
  src: '../font/Grold-Regular.ttf',
  display: 'swap'
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const isHome = pathname === '/';
	const [isLoading, setIsLoading] = useState(isHome);

	return (
		<html lang='en'>
			<body className={`${Grold.className} overflow-x-hidden`}>
				{isLoading && isHome ? (
					<SplashScreen finishLoading={() => setIsLoading(false)} />
				) : (
					<div className='mx-auto w-[100vw] overflow-hidden'>
						<SmoothScroll>
							<Navbar />
							{children}
							<Footer />
						</SmoothScroll>
					</div>
				)}
			</body>
		</html>
	);
}
