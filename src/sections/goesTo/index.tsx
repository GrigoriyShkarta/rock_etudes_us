import { FC } from "react";
import { IoMdMicrophone } from "react-icons/io";
import { IoSchoolSharp } from "react-icons/io5";
import rock from "../../assets/svg/rock.svg";
import Button from "../../button";
import Section from "../../section";
import s from "./style.module.scss";

const GoesTo: FC = () => (
	<div className={s.section} id={"2"}>
		<Section
			children={
				<>
					<h1>КОМУ ПІДІЙДЕ</h1>
					<div className={s.block}>
						<IoSchoolSharp size={56} color={"#ff914d"} />
						<h3 className={s.subtitle}>ВИКЛАДЧАМ ВОКАЛУ</h3>
						<p>
							Які хочуть отримати нові, цікаві та ефективні вправи для себе та
							своїх учнів
						</p>
					</div>
					<div className={s.block}>
						<IoMdMicrophone size={56} color={"#ff914d"} />
						<h3 className={s.subtitle}>ВОКАЛІСТАМ</h3>
						<p>
							Які хочуть свідомо прокачувати свій вокал з максимальною користю
							та насолодою
						</p>
					</div>
					<div className={s.block}>
						<img src={rock} className={s.svg} />
						<h3 className={s.subtitle}>РОКЕРАМ</h3>
						<p>Які хочуть тренуватися під улюблену музику</p>
					</div>
					<Button />
				</>
			}
		/>
	</div>
);

export default GoesTo;
