import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

interface ServiceProps {
	title: string;
	desc: string;
	variant: string;
}

const ServiceCard = ({ title, desc, variant }: ServiceProps) => {
	return (
		<div
			className={`${variant} w-[270px] p-4 rounded-xl flex flex-col justify-between gap-[10px] h-[200px] lg:even:h-[215px] lg:odd:h-[190px] max-md:even:h-[200px] max-md:odd:h-[200px]`}
		>
			<h3 className='text-[16px]'>{title}</h3>
			<p className='text-[14px] text-gray-500 max-w-[18rem]'>{desc}</p>
			<Link href='/'>
				<button className='text-center bg-white w-full px-2 py-1 rounded-lg text-[14px]'>
					<span className='flex justify-center gap-[10px] items-center'>
						Get Started <FaArrowRight />
					</span>
				</button>
			</Link>
		</div>
	);
};
export default ServiceCard;
