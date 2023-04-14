import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';

const rightPosition = 'lg:right-10 md:right-10 right-0';
const leftPosition = 'lg:left-10 md:left-10 left-0';

const NavButton = ({ idx, slideNav, position }) => (
	<button
		className={`lg:top-[40%] md:top-[40%] top-[30%] absolute z-10 ${
			position === 'right' ? rightPosition : leftPosition
		} grid place-items-center ${
			!idx ? `${slideNav} cursor-pointer text-[#b91c1c]` : `text-red-300`
		}  bg-center  w-20 text-5xl `}
	>
		{slideNav === 'button-prev-slide' ? (
			<AiFillLeftCircle />
		) : (
			<AiFillRightCircle />
		)}
	</button>
);

export default NavButton;
