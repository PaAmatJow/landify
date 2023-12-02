import Link from "next/link"

interface ButtonProps {
  url: string;
  name: string;
  variant?: string
}

const Button = ({url, name, variant}: ButtonProps) => {
  return (
    <Link href={url}>
						<button className={`text-[14px] text-white bg-dark font-semibold px-4 py-3 rounded-lg ${variant}`}>
							{name}
						</button>
					</Link>
  )
}
export default Button