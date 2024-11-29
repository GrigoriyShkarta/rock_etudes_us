import { Dispatch, FC, SetStateAction } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

import logo from "../assets/img/logo.webp";
import s from "./style.module.scss";

interface Props {
	openBurger: boolean;
	setOpenBurger: Dispatch<SetStateAction<boolean>>;
}

const Header: FC<Props> = ({ openBurger, setOpenBurger }) => {
	return (
		<header className={s.header}>
			<div className={s.left}>
				<img className={s.logo} src={logo} alt="ys vocal coach" />
				<h1 className={s.title}>YS Vocal Coach</h1>
			</div>

			{!openBurger ? (
				<RxHamburgerMenu size={30} onClick={() => setOpenBurger(!openBurger)} />
			) : (
				<IoMdClose size={30} onClick={() => setOpenBurger(!openBurger)} />
			)}
		</header>
	);
};

export default Header;
