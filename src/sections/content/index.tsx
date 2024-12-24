import { FC } from "react";
import Section from "../../section";
import s from "./style.module.scss";

const Content: FC = () => {
	return (
		<div className={s.section} id={"4"}>
			<Section
				children={
					<>
						<h1>Зміст</h1>
						<ul className={s.list}>
							<li>- Вступ</li>
							<li>- Від автора</li>
							<li>- Голосові складки: атаки та закінчення</li>
							<li>- Голосові складки: режими</li>
							<li>- Хибні голосові складки</li>
							<li>- Щитоподібний хрящ</li>
							<li>- Перснеподібний хрящ</li>
							<li>- Гортань</li>
							<li>- Сфінктер черпало-надгортанний</li>
							<li>- М’яке піднебіння</li>
							<li>- Язик</li>
							<li>- Губи</li>
							<li>- Нижня щелепа</li>
							<li>- Голова та шия</li>
							<li>- Торс</li>
							<li>- Заключення</li>
						</ul>
					</>
				}
			/>
		</div>
	);
};

export default Content;
