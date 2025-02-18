import { FC } from 'react'
import Button from '../../button'
import Section from '../../section'
import s from './style.module.scss'

const Questions: FC = () => {
	return (
		<div className={s.section} id={'8'}>
			<Section
				children={
					<>
						<h1>FAG</h1>
						<div className={s.question}>
							<details className={s.details}>
								<summary className={s.summary}>
									How to purchase a collection?
								</summary>
								<p>
									Click on the "Buy" button, after which you will be transferred
									to the care department in Telegram. Write "I want to purchase
									a collection" and the name of the tariff.
								</p>
							</details>
							<details className={s.details}>
								<summary className={s.summary}>
									Where to make the payment?
								</summary>
								<p>
									Payment is made to the account of the individual entrepreneur.
									Payment details will be sent to you in Telegram via the care
									department.
								</p>
							</details>
							<details className={s.details}>
								<summary className={s.summary}>
									Is the collection suitable for beginners?
								</summary>
								<p>
									This collection is suitable for vocalists of all levels, but
									it is important that you do not have significant problems with
									intonation (getting into the notes).
								</p>
							</details>

							<details className={s.details}>
								<summary className={s.summary}>
									Is it necessary to know the notes?
								</summary>
								<p>
									Knowing the notes can be an added bonus, but it is not
									mandatory for training with this collection. All exercises are
									accompanied by demonstrations.
								</p>
							</details>

							<details className={s.details}>
								<summary className={s.summary}>
									How long will access to the collection last?
								</summary>
								<p>
									Access to the collection will be eternal, at least unless
									there are technical problems with Telegram.
								</p>
							</details>
							<details className={s.details}>
								<summary className={s.summary}>Will there be feedback?</summary>
								<p>
									No, feedback is not included in this collection. However, if
									you have any doubts about the exercises or you do not fully
									understand the work of some structures, you can contact me for
									individual lessons or consultations.
								</p>
							</details>
						</div>
						<Button />
					</>
				}
			/>
		</div>
	)
}

export default Questions
