import { FC, useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import img1 from "../../assets/img/1.webp";
import img2 from "../../assets/img/2.webp";
import img3 from "../../assets/img/3.webp";
import img4 from "../../assets/img/4.webp";
import img5 from "../../assets/img/5.webp";
import img6 from "../../assets/img/6.webp";
import img7 from "../../assets/img/7.webp";
import img8 from "../../assets/img/8.webp";

import Button from "../../button";
import s from "./style.module.scss";

const Reviews: FC = () => {
	const [activeSlideIndex, setActiveSlideIndex] = useState(0);

	return (
		<section className={s.section} id={"5"}>
			<h1>Відгуки</h1>

			<div className={s.carousel}>
				<ReactSimplyCarousel
					activeSlideIndex={activeSlideIndex}
					onRequestChange={setActiveSlideIndex}
					itemsToShow={1}
					itemsToScroll={1}
					forwardBtnProps={{
						style: {
							width: "50px",
							height: "50px",
							borderRadius: "50%",
							backgroundColor: "#f9eeee",
							position: "absolute",
							right: "2%",
							top: "42%",
							opacity: "40%",
							border: "none",
							cursor: "pointer",
						},
						children: <span>{">"}</span>,
					}}
					backwardBtnProps={{
						style: {
							width: "50px",
							height: "50px",
							borderRadius: "50%",
							backgroundColor: "#f9eeee",
							position: "absolute",
							left: "2%",
							top: "42%",
							opacity: "40%",
							border: "none",
							zIndex: "10",
							cursor: "pointer",
						},
						children: <span>{"<"}</span>,
					}}
					responsiveProps={[
						{
							itemsToShow: 1,
							itemsToScroll: 1,
							minWidth: 768,
						},
						{
							itemsToShow: 2,
							itemsToScroll: 1,
							minWidth: 1024,
						},
					]}
					speed={400}
					easing="linear"
				>
					<div style={{ width: 360, height: 600 }}>
						<img className={s.img} src={img1} alt="review" />
					</div>
					<div style={{ width: 360, height: 600 }}>
						<img className={s.img} src={img2} alt="review" />
					</div>
					<div style={{ width: 360, height: 600 }}>
						<img className={s.img} src={img3} alt="review" />
					</div>
					<div style={{ width: 360, height: 600 }}>
						<img className={s.img} src={img4} alt="review" />
					</div>
					<div style={{ width: 360, height: 600 }}>
						<img className={s.img} src={img5} alt="review" />
					</div>
					<div style={{ width: 360, height: 600 }}>
						<img className={s.img} src={img6} alt="review" />
					</div>
					<div style={{ width: 360, height: 600 }}>
						<img className={s.img} src={img7} alt="review" />
					</div>
					<div style={{ width: 360, height: 600 }}>
						<img className={s.img} src={img8} alt="review" />
					</div>
				</ReactSimplyCarousel>
				<div className={s.dots}>
					{[...Array(8)].map((_, index) => (
						<button
							key={index}
							className={`${s.dot} ${
								activeSlideIndex === index ? s.activeDot : ""
							}`}
							onClick={() => setActiveSlideIndex(index)}
						/>
					))}
				</div>
			</div>

			<Button />
		</section>
	);
};

export default Reviews;
