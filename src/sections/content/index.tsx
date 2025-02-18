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
							<li>- Vocal folds: attacks and endings</li>
							<li>- Vocal folds: modes</li>
							<li>- False vocal folds</li>
							<li>- Thyroid cartilage</li>
							<li>- Annular cartilage</li>
							<li>- Larynx</li>
							<li>- Sphincter epiglottis</li>
							<li>- Soft palate</li>
							<li>- Language</li>
							<li>- Lips</li>
							<li>- Lower jaw</li>
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
