import { FC } from 'react'
import logo from '../../assets/img/logo.webp'
// import main from "../../assets/img/main.webp";
import rock_etudes from '../../assets/img/rock_etudes.png'
import Section from '../../section'
import s from './style.module.scss'

const Main: FC = () => (
	<div className={s.section}>
		<Section
			children={
				<>
					{/* <img className={s.img} src={main} alt="rock etudes" /> */}
					<div className={s.desctop}>
						<div className={s.top}>
							<img className={s.logo} src={logo} alt='ys vocal coach' />
							<p className={s.name}>YS VOCAL COACH</p>
						</div>
						<div className={s.bottom}>
							<img src={rock_etudes} alt='rock etudes' />
							<p className={s.text}>
								13 rock exercises for the conscious development of your vocal
								abilities
							</p>
						</div>
					</div>
					<button className={s.button} type={'button'}>
						{/* <a href='https://t.me/ys_department_of_care_bot?start=6742f1d3e01c8aca7d035e5f'>
							Buy
						</a> */}
						<a href='https://secure.wayforpay.com/payment/sc33072552a68'>Buy</a>
					</button>
					<p className={s.yana}>@yana_vocalcoach_us</p>
				</>
			}
		/>
	</div>
)

export default Main
