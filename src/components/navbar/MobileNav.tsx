import Image from 'next/image';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import Button from '../button/Button';
import { FaChevronDown } from 'react-icons/fa6';
import {
	Sheet,
	SheetContent,
	SheetClose,
	SheetTrigger,
} from '@/components/ui/sheet';

const MobileNav = () => {
	return (
		<div className='bg-none text-inherit'>
			<Sheet>
				<SheetTrigger asChild>
					<RxHamburgerMenu className='cursor-pointer text-[20px]' />
				</SheetTrigger>
				<SheetContent side='left' className='bg-white'>
					<Link href='/' className='flex items-center gap-[2px]'>
						<Image
							src='/images/landify.png'
							alt='logo'
							width={60}
							height={60}
						/>
						<h3 className='text-[20px] font-bold'>Landify&#8482;</h3>
					</Link>
					<div>
						<SheetClose asChild>
							<div className='mt-[50px] flex w-full flex-col gap-[40px]'>
								<div className='flex flex-col gap-[20px] text-[14px] font-semibold text-gray-500'>
									<Link
										href='/'
										className='flex items-center gap-[5px] text-[20px]'
									>
										Product <FaChevronDown className='text-[18px]' />
									</Link>
									<Link
										href='/'
										className='flex items-center gap-[5px] text-[20px]'
									>
										Solutions <FaChevronDown className='text-[18px]' />
									</Link>
									<Link
										href='/'
										className='flex items-center gap-[5px] text-[20px]'
									>
										Resources <FaChevronDown className='text-[18px]' />
									</Link>
									<Link href='/' className='text-[20px]'>
										Pricing
									</Link>
								</div>
								<div className=''>
									<Button
										name='Subscribe'
										url='/'
										variant='text-white bg-dark text-[18px]'
									/>
								</div>
							</div>
						</SheetClose>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
};
export default MobileNav;
