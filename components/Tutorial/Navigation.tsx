import { HiArrowLeftCircle, HiArrowRightCircle } from "react-icons/hi2"

type NavigationProps = {
	left: string,
	right: string,
}

export default function Navigation({ left, right }: NavigationProps) {
	return (
		<div className="flex justify-between">
			<a href={left} className="btn btn-circle"><HiArrowLeftCircle /></a>
			<a href={right} className="btn btn-circle"><HiArrowRightCircle /></a>
		</div>
	)
}
