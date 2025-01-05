import { FC } from "react";
import Button from "../../button";
import Section from "../../section";
import s from "./style.module.scss";

const Prices: FC = () => (
	<div className={s.section} id="7">
		<Section
			children={
				<>
					<h1>Ціни</h1>
					<div className={s.container}>
						<div className={s.price}>
							<div className={s.price_top}>
								<h3 className={s.title}>Students</h3>
							</div>
							<div className={s.price_bottom}>
								<p>
									📖 Електронна версія збірки: доступна для читання на будь-яких
									пристроях.
								</p>
								<p>🎵 MP3-файли: тренуйтеся де завгодно.</p>
								<p>
									📱 Доступ до Telegram-каналу: усі матеріали в одному місці,
									завжди під рукою!
								</p>
							</div>
							<div className={s.prices_block}>
								<p className={s.priceText}>1 790 грн</p>
								<p className={s.smallText}>Акційна ціна для моїх студентів</p>
							</div>
						</div>

						<div className={s.price}>
							<div className={s.price_top}>
								<h3 className={s.title}>Followers</h3>
							</div>
							<div className={s.price_bottom}>
								<p>
									📖 Електронна версія збірки: доступна для читання на будь-яких
									пристроях.
								</p>
								<p>🎵 MP3-файли: тренуйтеся де завгодно.</p>
								<p>
									📱 Доступ до Telegram-каналу: усі матеріали в одному місці,
									завжди під рукою!
								</p>
							</div>
							<p className={s.priceText}>2 490 грн</p>
							<p className={s.smallText}>
								Ціна для читачів мого блогу та всіх інших
							</p>
						</div>
					</div>

					<Button />
				</>
			}
		/>
	</div>
);

export default Prices;
