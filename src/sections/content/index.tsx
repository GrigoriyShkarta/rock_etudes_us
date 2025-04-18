import { FC } from 'react'
import Section from '../../section'
import s from './style.module.scss'

const Content: FC = () => {
	return (
		<div className={s.section} id={'4'}>
			<Section
				children={
					<>
						<h1>Content</h1>
						<ul className={s.list}>
							<li>- Introduction</li>
							<li>- From the author</li>
							<li>- True Vocal Folds: Onset/Offset</li>
							<li>- True Vocal Folds: Body-Cover</li>
							<li>- False vocal folds</li>
							<li>- Thyroid cartilage</li>
							<li>- Cricoid cartilage</li>
							<li>- Larynx</li>
							<li>- Aryepiglottic sphincter</li>
							<li>- Velum</li>
							<li>- Tongue</li>
							<li>- Lips</li>
							<li>- Jaw</li>
							<li>- Head and neck</li>
							<li>- Torso</li>
							<li>- Conclusion</li>
						</ul>
					</>
				}
			/>
		</div>
	)
}

export default Content
