import { FC } from 'react'
import { MdOutlineDone } from 'react-icons/md'

import Button from '../../button'
import Section from '../../section'
import s from './style.module.scss'

const WhatEnter: FC = () => (
	<div className={s.section} id={'3'}>
		<Section
			children={
				<>
					<h1>WHAT'S INCLUDED</h1>
					<div className={s.container}>
						<div className={s.block}>
							<MdOutlineDone size={40} />
							<p className={s.text}>
								13 exercises for each structure of the vocal apparatus in
								different rock styles
							</p>
						</div>
						<div className={s.block}>
							<MdOutlineDone size={40} />
							<p className={s.text}>
								Examples of performance and backing tracks for each exercise
							</p>
						</div>
						<div className={s.block}>
							<MdOutlineDone size={40} />
							<p className={s.text}>
								Notes for each exercise with explanations
							</p>
						</div>
						<div className={s.block}>
							<MdOutlineDone size={40} />
							<p className={s.text}>
								Basic theory and introductory exercises for each structure of
								the vocal apparatus
							</p>
						</div>
						<div className={s.block}>
							<MdOutlineDone size={40} />
							<p className={s.text}>
								Access to a closed Telegram channel with all materials
							</p>
						</div>
					</div>

					<Button />
				</>
			}
		/>
	</div>
)

export default WhatEnter
