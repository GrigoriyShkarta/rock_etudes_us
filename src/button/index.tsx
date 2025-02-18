import { FC } from 'react'
import s from './styles.module.scss'

const Button: FC = () => (
	<button className={s.button} type={'button'}>
		{/* <a href='https://t.me/ysvocalcoach'>Buy</a> */}
		<a href='https://secure.wayforpay.com/payment/sc33072552a68'>Buy</a>
	</button>
)

export default Button
