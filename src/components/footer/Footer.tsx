import Image from 'next/image';
import Link from 'next/link';
import Button from '../button/Button';

const Footer = () => {
	return (
		<footer className='flex flex-col justify-between gap-[50px] bg-dark px-[20px] pb-[20px]  pt-[50px] text-[#bbb] lg:flex-row lg:px-[80px]'>
			<div className='flex flex-1 gap-[40px]'>
				<div className=''>
					<Link href='/' className='flex items-center gap-[2px]'>
						<Image
							src='/images/landify.png'
							alt='logo'
							width={40}
							height={40}
						/>
						<h3 className='text-[16px] font-bold'>Landify&#8482;</h3>
					</Link>
				</div>

				<div className='flex gap-[100px]'>
					<div className='flex flex-col gap-[20px]'>
						<h3 className='body-semibold'>Menu</h3>
						<div className='flex flex-col gap-[10px] text-[12px] font-medium text-gray-500'>
							<Link href='/' className=''>
								Services
							</Link>
							<Link href='/' className=''>
								Works
							</Link>
							<Link href='/' className=''>
								About
							</Link>
							<Link href='/' className=''>
								Contact
							</Link>
						</div>
					</div>
					<div className='flex flex-col gap-[20px]'>
						<h3 className='body-semibold'>Connect</h3>
						<div className='flex flex-col gap-[10px] text-[12px] font-medium text-gray-500'>
							<Link href='/' className=''>
								LinkedIn
							</Link>
							<Link href='/' className=''>
								Facebook
							</Link>
							<Link href='/' className=''>
								Twitter
							</Link>
							<Link href='/' className=''>
								Instagram
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className='flex flex-1 flex-col gap-[10px] max-lg:mb-[20px]'>
				<h3 className='body-semibold'>Subscribe to our newsletter</h3>
				<form className='flex items-center gap-[10px]'>
					<input
						type='text'
						className='flex-1 rounded-xl border-none bg-white px-4 py-3 placeholder:text-gray-500'
						placeholder='Your email'
					/>
					<Button name='Subscribe' url='/' variant='bg-cream text-dark' />
				</form>
			</div>
		</footer>
	);
};
export default Footer;
