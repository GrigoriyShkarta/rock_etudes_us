import { FC, ReactNode, useEffect } from "react";
import s from "./style.module.scss";

interface Props {
	children: ReactNode;
}

const Section: FC<Props> = ({ children }) => {
	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible"); // Добавляем класс, чтобы применить анимацию
					} else {
						entry.target.classList.remove("visible"); // Убираем класс, если элемент выходит из видимости (опционально)
					}
				});
			},
			{ threshold: 0.1 } // Элемент становится видимым, если 10% его площади пересекают экран
		);

		const sections = document.querySelectorAll("section");
		sections.forEach(section => observer.observe(section));

		return () => {
			sections.forEach(section => observer.unobserve(section));
		};
	}, []);

	return <section className={s.section}>{children}</section>;
};

export default Section;
