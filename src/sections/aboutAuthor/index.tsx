import { FC } from "react";
import author from "../../assets/img/author.webp";
import Button from "../../button";
import Section from "../../section";
import s from "./style.module.scss";

const AboutAuthor: FC = () => (
	<div className={s.section} id={"4"}>
		<Section
			children={
				<>
					<h1>ПРО АВТОРА</h1>
					<div className={s.container}>
						<div className={s.ava}>
							<img
								className={s.img}
								src={author}
								alt="yana sabada vocal coach"
							/>
						</div>
						<p className={s.text}>
							Привіт! Мене звати Яна, я викладач сучасного, рок- та
							екстрим-вокалу. Маю понад 15 років досвіду в музиці та 8 років
							викладання вокалу.
						</p>
						<p className={s.text}>
							Моя мета — передати якісні знання та допомогти розкрити потенціал
							кожного голосу. У своїй роботі використовую лише науково
							обґрунтовану інформацію, засновану на дослідженнях, анатомії та
							фізіології голосу.
						</p>
						<p className={s.text}>
							Я захоплююся рок-музикою, тому створила унікальний збірник вправ!
							Кожна вправа розроблена для роботи з певною структурою голосового
							апарату та має стильне рок-аранжування. Якщо ти шукаєш цікаву та
							корисну збірку — ти її знайшов!
						</p>
					</div>
					<Button />
				</>
			}
		/>
	</div>
);

export default AboutAuthor;
