import { FC } from "react";
import { MdStars } from "react-icons/md";
import Button from "../../button";
import Section from "../../section";
import s from "./style.module.scss";

const AboutEtudes: FC = () => (
	<div className={s.section} id={"1"}>
		<Section
			children={
				<>
					<h1 className={s.title}>ПРО ЗБІРНИК</h1>
					<div className={s.textBlock}>
						<div className={s.block}>
							<MdStars size={42} />
							<p className={s.text}>
								ROCK ETUDES — це авторська збірка вправ створена на основі
								моделі “Estill Voice”.
							</p>
						</div>
						<div className={s.block}>
							<MdStars size={42} />
							<p className={s.text}>
								Дані вправи допоможуть тобі легше, цікавіше опанувати та почати
								свідомо контролювати 13 анатомічних структур голосового апарату.
							</p>
						</div>
						<div className={s.block}>
							<MdStars size={42} />
							<p className={s.text}>
								Особливість збірки в тому, що всі вправи мають стилізоване
								аранжування у стилі рок.
							</p>
						</div>
						<div className={s.block}>
							<MdStars size={42} />
							<p className={s.text}>
								Також збірка містить базову теоретичну інформацію про кожну
								структуру та навідні вправи.
							</p>
						</div>
						<div className={s.block}>
							<MdStars size={42} />
							<p className={s.text}>
								В телеграм-каналі ти знайдеш всі необхідні mp3-файли для свого
								ефективного тренування.
							</p>
						</div>

						<iframe
							width="100%"
							height="500"
							src="https://www.youtube.com/embed/YwDMNS9tl_c"
							title="Збірка ROCK ETUDES"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerpolicy="strict-origin-when-cross-origin"
							allowfullscreen
						></iframe>
					</div>

					<Button />
				</>
			}
		/>
	</div>
);

export default AboutEtudes;
