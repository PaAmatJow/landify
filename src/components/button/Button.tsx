import Link from 'next/link';

interface ButtonProps {
	url: string;
	name: string;
	variant?: string;
}

const Button = ({ url, name, variant }: ButtonProps) => {
	return (
		<Link href={url}>
			<button
				className={`rounded-lg  px-4 py-3 text-[14px] font-semibold ${variant}`}
			>
				{name}
			</button>
		</Link>
	);
};
export default Button;
