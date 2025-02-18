import { FC } from 'react'
import { IoMdMicrophone } from 'react-icons/io'
import { IoSchoolSharp } from 'react-icons/io5'
import rock from '../../assets/svg/rock.svg'
import Button from '../../button'
import Section from '../../section'
import s from './style.module.scss'

const GoesTo: FC = () => (
	<div className={s.section} id={'2'}>
		<Section
			children={
				<>
					<h1>WHO WILL SUIT</h1>
					<div className={s.block}>
						<IoSchoolSharp size={56} color={'#ff914d'} />
						<h3 className={s.subtitle}>VOCAL TEACHERS</h3>
						<p>
							Who want to get new, interesting and effective exercises for
							themselves and their students
						</p>
					</div>
					<div className={s.block}>
						<IoMdMicrophone size={56} color={'#ff914d'} />
						<h3 className={s.subtitle}>VOCALISTS</h3>
						<p>
							Who want to consciously pump up their vocals with maximum benefit
							and pleasure
						</p>
					</div>
					<div className={s.block}>
						<img src={rock} className={s.svg} />
						<h3 className={s.subtitle}>ROCKERS</h3>
						<p>Who want to train to their favorite music</p>
					</div>
					<Button />
				</>
			}
		/>
	</div>
)

export default GoesTo
