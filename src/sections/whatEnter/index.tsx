import { FC } from "react";
import { MdOutlineDone } from "react-icons/md";

import Button from "../../button";
import Section from "../../section";
import s from "./style.module.scss";

const WhatEnter: FC = () => (
	<div className={s.section} id={"3"}>
		<Section
			children={
				<>
					<h1>ЩО ВХОДИТЬ</h1>
					<div className={s.container}>
						<div className={s.block}>
							<MdOutlineDone size={40} />
							<p className={s.text}>
								13 вправ на кожну структуру голосового апарату в різних
								рок-стилях
							</p>
						</div>
						<div className={s.block}>
							<MdOutlineDone size={40} />
							<p className={s.text}>
								Приклади виконання та мінусовки до кожної вправи
							</p>
						</div>
						<div className={s.block}>
							<MdOutlineDone size={40} />
							<p className={s.text}>Ноти до кожної вправи з поясненнями</p>
						</div>
						<div className={s.block}>
							<MdOutlineDone size={40} />
							<p className={s.text}>
								Базова теорія та навідні вправи на роботу кожної структури
								голосового апарату
							</p>
						</div>
						<div className={s.block}>
							<MdOutlineDone size={40} />
							<p className={s.text}>
								Доступ до закритого телеграм-каналу з усіми матеріалами
							</p>
						</div>
					</div>

					<Button />
				</>
			}
		/>
	</div>
);

export default WhatEnter;
