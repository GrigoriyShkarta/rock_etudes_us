import { FC } from "react";
import s from "./styles.module.scss";

const Button: FC = () => (
	<button className={s.button} type={"button"}>
		<a href="https://t.me/ysvocalcoach">Придбати</a>
	</button>
);

export default Button;
