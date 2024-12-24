import { FC } from "react";
import Button from "../../button";
import Section from "../../section";
import s from "./style.module.scss";

const Questions: FC = () => {
	return (
		<div className={s.section} id={"7"}>
			<Section
				children={
					<>
						<h1>Часті запитання</h1>
						<div className={s.question}>
							<details className={s.details}>
								<summary className={s.summary}>Як придбати збірку?</summary>
								<p>
									Натисніть на кнопку "Придбати", після чого Вас буде переведено
									в телеграм до відділу турботи. Напишіть "Хочу придбати збірку"
									і назву тарифу.
								</p>
							</details>
							<details className={s.details}>
								<summary className={s.summary}>
									Куди здійснювати оплату?
								</summary>
								<p>
									Оплата здійснюється на рахунок ФОП. Реквізити для оплати Вам
									надішлють в телеграм через відділ турботи.
								</p>
							</details>
							<details className={s.details}>
								<summary className={s.summary}>
									Чи підійде збірка початківцям?
								</summary>
								<p>
									Ця збірка підходить для вокалістів усіх рівнів, але важливо,
									щоб у Вас не було суттєвих проблем з інтонуванням (потрапляння
									в ноти).
								</p>
							</details>

							<details className={s.details}>
								<summary className={s.summary}>
									Чи обов'язково знати ноти?
								</summary>
								<p>
									Знання нот може стати додатковим бонусом, але це не є
									обов'язковим для тренувань за цією збіркою. До всіх вправ
									додаються демонстрації.
								</p>
							</details>

							<details className={s.details}>
								<summary className={s.summary}>
									Скільки буде тривати доступ до збірки?
								</summary>
								<p>
									Доступ до збірки буде вічним, принаймні, якщо не виникнуть
									технічні проблеми з Telegram.
								</p>
							</details>
							<details className={s.details}>
								<summary className={s.summary}>
									Чи буде зворотній зв'язок?
								</summary>
								<p>
									Ні, зворотній зв'язок не входить до цієї збірки. Однак, якщо у
									Вас виникли сумніви щодо виконання вправ чи Ви не зовсім
									розумієте роботу деяких структур, Ви можете звернутися до мене
									для індивідуальних уроків або консультацій.
								</p>
							</details>
						</div>
						<Button />
					</>
				}
			/>
		</div>
	);
};

export default Questions;
