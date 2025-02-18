import { FC } from 'react'
import author from '../../assets/img/author.webp'
import Button from '../../button'
import Section from '../../section'
import s from './style.module.scss'

const AboutAuthor: FC = () => (
	<div className={s.section} id={'5'}>
		<Section
			children={
				<>
					<h1>ABOUT THE AUTHOR</h1>
					<div className={s.container}>
						<div className={s.ava}>
							<img
								className={s.img}
								src={author}
								alt='yana sabada vocal coach'
							/>
						</div>
						<p className={s.text}>
							Greetings! My name is Yana, I am a teacher of modern, rock and
							extreme vocals. I have over 15 years of experience in music and 8
							years of vocal teaching.
						</p>
						<p className={s.text}>
							My goal is to impart quality knowledge and help unlock potential
							every voice In my work, I use it only scientifically sound
							information based on research, anatomy and voice physiology.
						</p>
						<p className={s.text}>
							I am passionate about rock music, so I created a unique collection
							of exercises! Each exercise is designed to work with a specific
							vocal structure device and has a stylish rock arrangement. If you
							are looking for an interesting and useful collection - you found
							it!
						</p>
					</div>
					<Button />
				</>
			}
		/>
	</div>
)

export default AboutAuthor
