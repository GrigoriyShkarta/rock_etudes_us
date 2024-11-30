import { FC } from "react";
import main from "../../assets/img/main.webp";
import Section from "../../section";
import s from "./style.module.scss";

const Main: FC = () => (
	<div className={s.section}>
		<Section
			children={
				<>
					<img className={s.img} src={main} alt="rock etudes" />
					<button className={s.button} type={"button"}>
						<a href="https://t.me/ys_department_of_care_bot?start=6742f1d3e01c8aca7d035e5f">
							Придбати
						</a>
					</button>
				</>
			}
		/>
	</div>
);

export default Main;
