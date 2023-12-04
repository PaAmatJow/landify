import Button from '@/components/button/Button';
import HeroArrow from '@/components/svgs/HeroArrow';
import ServicesDash from '@/components/svgs/ServicesDash';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdPlayCircle } from 'react-icons/io';
import { GoClockFill } from 'react-icons/go';
import { IoSettingsSharp } from 'react-icons/io5';
import { TbArticleFilledFilled } from 'react-icons/tb';
import { BiSolidBarChartSquare } from 'react-icons/bi';
import { FAQ, SERVICES } from '@/constants';
import ServiceCard from '@/components/card/ServiceCard';
import ServiceArrow from '@/components/svgs/ServiceArrow';
import Accordion from '@/components/accordion/Accordion';
import FAQArrow from '@/components/svgs/FAQArrow';
import SmallHeroArrow from '@/components/svgs/SmallHeroArrow';
import SmallHeroArrowTwo from '@/components/svgs/SmallHeroArrowTwo';
import HeroSparkle from '@/components/svgs/HeroSparkle';
import HeroSparkleTwo from '@/components/svgs/HeroSparkleTwo';
import TriangleSun from '@/components/svgs/TriangleSun';
import TriangleDark from '@/components/svgs/TriangleDark';
import TriangleGreen from '@/components/svgs/TriangleGreen';
import SquareDark from '@/components/svgs/SquareDark';

export default function Home() {
	return (
		<main className='overflow-hidden'>
			{/* Hero section */}
			<div className='relative min-h-[calc(100vh-100px)] w-full bg-light'>
				<div className='absolute right-[50px] top-[50px] rounded-xl bg-dark px-3 py-1 text-center text-white md:-left-7 md:top-0 md:hidden md:px-5 md:py-2'>
					<h1 className='font-extrabold mb-[-10px] text-[30px] md:text-[40px]'>
						6k
					</h1>
					<p className='text-[12px] text-gray-500'>Clients</p>
					<div className='absolute right-[70px] top-[50px]'>
						<SmallHeroArrow />
					</div>
				</div>

				<div className='absolute bottom-[20%] right-[50px] rounded-xl bg-white px-5 py-1.5 text-center text-dark md:-right-8 md:top-[57%] md:hidden'>
					<h1 className='mb-[-10px] text-[30px] font-bold md:text-[40px]'>
						40%
					</h1>
					<p className='text-[12px] text-gray-500'>Market</p>
					<div className='absolute -right-[80px] top-[35px]'>
						<SmallHeroArrowTwo />
					</div>
				</div>

				<div className='absolute bottom-[20px] left-1/2 flex -translate-x-1/2 items-center gap-[5px] rounded-md bg-white px-2  py-3 text-dark shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] md:-left-6 md:bottom-[6%] md:hidden'>
					<Image
						src='/images/smallHeroImg.webp'
						alt=''
						width={40}
						height={40}
						className='rounded-full object-cover'
					/>
					<p className='text-[12px] font-semibold'>Bring your ideas to life</p>
					<div className='absolute -right-[60px] -top-[20px]'>
						<HeroSparkle />
					</div>
					<div className='absolute -bottom-[10px] -left-[90px]'>
						<HeroSparkleTwo />
					</div>
				</div>

				<div className='absolute right-0 top-[20px] hidden h-[calc(100vh-120px)] w-[26%] items-center bg-dark md:flex'>
					<div className='absolute -left-[165px]'>
						<div className='relative h-[320px] w-[320px]'>
							<Image
								src='/images/heroGirl.jpg'
								alt='girl'
								fill={true}
								className='hidden rounded-full object-cover shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] md:flex'
							/>
							<div className='absolute -left-7 top-0 rounded-xl bg-dark px-5 py-2 text-center text-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
								<h1 className='font-extraboldbold mb-[-10px] text-[40px]'>
									6k
								</h1>
								<p className='text-[14px] text-gray-500'>Clients</p>
							</div>

							<div className='absolute -right-8 top-[57%] rounded-xl bg-white px-5 py-1.5 text-center text-dark'>
								<h1 className='mb-[-10px] text-[40px] font-bold'>40%</h1>
								<p className='text-[14px] text-gray-500'>Market</p>
							</div>

							<div className='absolute -left-6 bottom-[6%] flex items-center gap-[5px] rounded-md bg-white px-2 py-3  text-dark shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
								<Image
									src='/images/smallHeroImg.webp'
									alt=''
									width={40}
									height={40}
									className='rounded-full object-cover'
								/>
								<p className='text-[12px] font-semibold'>
									Bring your ideas to life
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='flex h-[calc(100vh-100px)] flex-col justify-center px-[20px] lg:px-[80px]'>
					<div className='relative flex w-full flex-col gap-[20px] pl-[40px] md:w-[60%]'>
						<h1 className='text-[48px] font-extrabold leading-[44px] sm:text-[60px] sm:leading-[56px] md:text-[66px] md:leading-[70px] lg:text-[70px]'>
							Academy <br /> of Your Business
						</h1>
						<p className='mb-[10px] max-w-[90%] text-[18px] text-gray-500'>
							Organizes work so teams know what to do, why it matters, and how
							to get it done.
						</p>
						<div className='flex gap-[20px]'>
							<Button name='Get Started' url='/' variant='bg-Pink' />
							<Link href='/' className='flex items-center gap-[10px]'>
								<button className=''>
									<IoMdPlayCircle className='text-[40px]' />
								</button>
								<p className='text-[14px] font-bold'>View Demo</p>
							</Link>
						</div>
						<div className='absolute -top-[2%] right-[8%] hidden lg:flex'>
							<HeroArrow />
						</div>
					</div>
				</div>
			</div>
			{/* End of Hero section */}
			{/* services section 1 */}
			<div className='mb-[150px] mt-[70px] bg-white px-[20px] lg:px-[120px]'>
				<div className=''>
					<div className='mb-[30px] text-center'>
						<h1 className='text-[38px]'>The process we follow</h1>
						<p className=' mx-auto max-w-[22rem] text-gray-500'>
							As an academy of business, we are going through the development
							cycle
						</p>
					</div>

					<div className='flex flex-wrap justify-center gap-[30px] md:flex-row'>
						<div className='flex w-[10rem] flex-col items-center justify-center gap-[10px] text-center'>
							<div className='rounded-full bg-lime p-3'>
								<TbArticleFilledFilled />
							</div>
							<h3 className='text-[20px]'>Business idea</h3>
							<p className='max-w-[9.5rem] text-[14px] text-gray-500'>
								What you want your business to be.
							</p>
						</div>
						<div className='flex w-[10rem] flex-col items-center justify-center gap-[10px] text-center lg:mt-[60px]'>
							<div className='rounded-full bg-sun p-3'>
								<GoClockFill className='' />
							</div>
							<h3 className='text-[20px]'>Planning</h3>
							<p className='max-w-[9.5rem] text-[14px] text-gray-500'>
								A business plan helps formalize your idea.
							</p>
						</div>
						<div className='flex w-[10rem] flex-col items-center justify-center gap-[10px] text-center'>
							<div className='rounded-full bg-Pink p-3'>
								<IoSettingsSharp />
							</div>
							<h3 className='text-[20px]'>Develop</h3>
							<p className='max-w-[9.5rem] text-[14px] text-gray-500'>
								Ideation, prototyping, costing of your product.
							</p>
						</div>
						<div className='flex w-[10rem] flex-col items-center justify-center gap-[10px] text-center lg:mt-[60px]'>
							<div className='rounded-full bg-gray-200 p-3'>
								<BiSolidBarChartSquare />
							</div>
							<h3 className='text-[20px]'>Business structure</h3>
							<p className='max-w-[9.5rem] text-[14px] text-gray-500'>
								Key parts of your business.
							</p>
						</div>
					</div>

					<div className='mt-[200px] px-[20px] lg:px-[80px]'>
						<div className='relative flex justify-start rounded-xl bg-dark px-8 py-7 md:justify-end lg:w-full'>
							<div className='flex w-full flex-col gap-[20px] md:w-1/2 lg:w-[27rem]'>
								<h3 className='text-[36px] text-white'>Our Story</h3>
								<p className='text-gray-500'>
									We specialize in organizing professional training courses and
									we have been doing it in Poland since 1994. As a academy of
									business, we are going through the development cycle.
								</p>
								<Button
									name='Get Started'
									url='/'
									variant='bg-Pink text-dark'
								/>
							</div>
							<div className='absolute left-0 top-0 hidden h-full w-[40%] md:flex lg:-top-[20%] lg:left-[5.2%] lg:h-[370px] lg:w-[32%]'>
								<Image
									src='/images/glassesGirl.jpg'
									alt='glasses girl'
									fill={true}
									className='rounded-l-xl object-cover lg:rounded-xl'
								/>
							</div>
							<div className='absolute -top-[50%] right-[40%]'>
								<ServicesDash />
							</div>
							<div className='absolute -right-[25px] -top-[30px]'>
								<TriangleSun />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* end of services section 1 */}
			{/* services section 2 */}
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
							<ServiceCard
								key={id}
								title={title}
								desc={desc}
								variant={variant}
							/>
						);
					})}
					<div className='absolute -top-[50px] left-[26%]'>
						<ServiceArrow />
					</div>
				</div>
			</div>
			{/* end of services section 2 */}
			{/* FAQ section */}
			<div className='relative my-[100px] px-[20px] lg:px-[120px]'>
				<div className='px-8'>
					<div className='relative mb-[20px]'>
						<h1 className='text-[38px]'>Frequently Asked Questions</h1>
						<p className=' text-gray-500'>
							If you have any futher questions please contact us.
						</p>
						<div className='absolute -left-[16px] -top-[5px] -z-10'>
							<TriangleGreen />
						</div>
					</div>

					<div className='flex flex-wrap gap-x-[20px] gap-y-[10px]'>
						{FAQ.map((quest) => {
							const { id, question, answer } = quest;
							return <Accordion key={id} question={question} answer={answer} />;
						})}
					</div>
				</div>
				<div className='absolute -top-[80px] right-[24%]'>
					<FAQArrow />
				</div>
				<div className='absolute -bottom-[70px] right-[120px]'>
					<SquareDark />
				</div>
			</div>
			{/* end of FAQ section */}
		</main>
	);
}
