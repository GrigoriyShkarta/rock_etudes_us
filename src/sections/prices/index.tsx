import { FC } from 'react'
import Button from '../../button'
import Section from '../../section'
import s from './style.module.scss'

const Prices: FC = () => (
	<div className={s.section} id='7'>
		<Section
			children={
				<>
					<h1>Prices</h1>
					<div className={s.container}>
						{/* <div className={s.price}>
							<div className={s.price_top}>
								<h3 className={s.title}>Students</h3>
							</div>
							<div className={s.price_bottom}>
								<p>
									📖 Electronic version of the collection: available for reading
									on any devices.
								</p>
								<p>🎵 MP3 files: work out anywhere.</p>
								<p>
									📱 Access to the Telegram channel: all materials in one place,
									always at hand!
								</p>
							</div>
							<div className={s.prices_block}>
								<p className={s.priceText}>1 790 грн</p>
								<p className={s.smallText}>Special price for my students</p>
							</div>
						</div> */}

						<div className={s.price}>
							<div className={s.price_top}>
								<h3 className={s.title}>Followers</h3>
							</div>
							<div className={s.price_bottom}>
								<p>
									📖 Electronic version of the collection: available for reading
									on any devices.
								</p>
								<p>🎵 MP3 files: work out anywhere.</p>
								<p>
									📱 Access to the Telegram channel: all materials in one place,
									always at hand!
								</p>
							</div>
							<p className={s.priceText}>100 USD</p>
							<p className={s.smallText}>
								Price for my blog readers and everyone else
							</p>
						</div>
					</div>

					<Button />
				</>
			}
		/>
	</div>
)

export default Prices
