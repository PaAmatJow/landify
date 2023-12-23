import Image from 'next/image';
import Link from 'next/link';
import Button from '../button/Button';

const Footer = () => {
	return (
		<footer className='flex flex-col justify-between gap-[50px] bg-dark px-[20px] pb-[20px]  pt-[50px] text-[#bbb] md:flex-row lg:px-[120px]'>
			<div className='flex flex-1 gap-[40px] max-md:w-full'>
				<div className=''>
					<Link href='/' className='flex items-center gap-[2px]'>
						<Image
							src='/images/landify.png'
							alt='logo'
							width={40}
							height={40}
						/>
						<h3 className='text-[16px] lg:text-[18px] font-bold'>
							Landify&#8482;
						</h3>
					</Link>
				</div>

				<div className='flex gap-[100px]'>
					<div className='flex flex-col gap-[20px]'>
						<h3 className='body-semibold lg:text-[16px]'>Menu</h3>
						<div className='flex flex-col gap-[10px] text-[12px] lg:text-[14px] font-normal tracking-wide text-gray-500'>
							<Link
								href='/'
								className=' transition-all duration-100 hover:scale-105 hover:text-white'
							>
								Services
							</Link>
							<Link
								href='/'
								className=' transition-all duration-100 hover:scale-105 hover:text-white'
							>
								Works
							</Link>
							<Link
								href='/'
								className=' transition-all duration-100 hover:scale-105 hover:text-white'
							>
								About
							</Link>
							<Link
								href='/'
								className=' transition-all duration-100 hover:scale-105 hover:text-white'
							>
								Contact
							</Link>
						</div>
					</div>
					<div className='flex flex-col gap-[20px]'>
						<h3 className='body-semibold lg:text-[16px]'>Connect</h3>
						<div className='flex flex-col gap-[10px] text-[12px] lg:text-[14px] font-normal text-gray-500'>
							<Link
								href='/'
								className=' transition-all duration-100 hover:scale-105 hover:text-white'
							>
								LinkedIn
							</Link>
							<Link
								href='/'
								className=' transition-all duration-100 hover:scale-105 hover:text-white'
							>
								Facebook
							</Link>
							<Link
								href='/'
								className=' transition-all duration-100 hover:scale-105 hover:text-white'
							>
								Twitter
							</Link>
							<Link
								href='/'
								className=' transition-all duration-100 hover:scale-105 hover:text-white'
							>
								Instagram
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className='flex flex-1 flex-col gap-[10px] max-lg:mb-[20px] w-1/2 max-md:w-full'>
				<h3 className='body-semibold lg:text-[16px]'>
					Subscribe to our newsletter
				</h3>
				<form className='flex items-center gap-[10px]'>
					<input
						type='text'
						className='flex-1 rounded-xl border-none bg-white px-4 py-3 placeholder:text-gray-500 focus:outline-none focus-visible:ring'
						placeholder='Your email'
					/>
					<Button name='Subscribe' url='/' variant='bg-[#FFB3A6] text-dark' />
				</form>
			</div>
		</footer>
	);
};
export default Footer;
