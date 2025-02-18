import { FC } from 'react'
import { MdStars } from 'react-icons/md'
import Button from '../../button'
import Section from '../../section'
import s from './style.module.scss'

const AboutEtudes: FC = () => (
	<div className={s.section} id={'1'}>
		<Section
			children={
				<>
					<h1 className={s.title}>ABOUT THE COLLECTION</h1>
					<div className={s.textBlock}>
						<div className={s.block}>
							<MdStars size={42} />
							<p className={s.text}>
								ROCK ETUDES is an author's collection of exercises created on
								the basis of "Estill Voice" models.
							</p>
						</div>
						<div className={s.block}>
							<MdStars size={42} />
							<p className={s.text}>
								These exercises will help you learn and start more easily and
								interestingly consciously control 13 anatomical structures of
								the vocal apparatus.
							</p>
						</div>
						<div className={s.block}>
							<MdStars size={42} />
							<p className={s.text}>
								The special feature of the collection is that all exercises are
								stylized arrangement in the style of rock.
							</p>
						</div>
						<div className={s.block}>
							<MdStars size={42} />
							<p className={s.text}>
								The collection also contains basic theoretical information about
								each structure and guided exercises.
							</p>
						</div>
						<div className={s.block}>
							<MdStars size={42} />
							<p className={s.text}>
								In the Telegram channel you will find all the necessary mp3
								files for your effective training.
							</p>
						</div>

						<iframe
							width='100%'
							height='500'
							src='https://www.youtube.com/shorts/Zqp8RlCzuqw'
							title='ROCK ETUDES'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerPolicy='strict-origin-when-cross-origin'
							allowFullScreen
						></iframe>
					</div>

					<Button />
				</>
			}
		/>
	</div>
)

export default AboutEtudes
