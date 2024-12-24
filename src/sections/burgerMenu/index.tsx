import { Dispatch, FC, SetStateAction } from "react";
import { Link } from "react-scroll";
import s from "./style.module.scss";

interface Props {
	setOpenBurger: Dispatch<SetStateAction<boolean>>;
}

const BurgerMenu: FC<Props> = ({ setOpenBurger }) => (
	<div className={s.container}>
		<Link
			onClick={() => setOpenBurger(false)}
			to={"1"}
			smooth={true}
			duration={500}
			className={s.text}
		>
			Про збірник
		</Link>
		<Link
			onClick={() => setOpenBurger(false)}
			to={"2"}
			smooth={true}
			duration={500}
			className={s.text}
		>
			Кому підійде
		</Link>
		<Link
			onClick={() => setOpenBurger(false)}
			to={"3"}
			smooth={true}
			duration={500}
			className={s.text}
		>
			Що входить
		</Link>
		<Link
			onClick={() => setOpenBurger(false)}
			to={"4"}
			smooth={true}
			duration={500}
			className={s.text}
		>
			Зміст
		</Link>
		<Link
			onClick={() => setOpenBurger(false)}
			to={"5"}
			smooth={true}
			duration={500}
			className={s.text}
		>
			Про автора
		</Link>

		<Link
			onClick={() => setOpenBurger(false)}
			to={"6"}
			smooth={true}
			duration={500}
			className={s.text}
		>
			Відгуки
		</Link>
		<Link
			onClick={() => setOpenBurger(false)}
			to={"7"}
			smooth={true}
			duration={500}
			className={s.text}
		>
			Ціни
		</Link>
		<Link
			onClick={() => setOpenBurger(false)}
			to={"8"}
			smooth={true}
			duration={500}
			className={s.text}
		>
			Часті запитання
		</Link>
	</div>
);

export default BurgerMenu;
