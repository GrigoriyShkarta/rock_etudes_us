import { useEffect, useState } from 'react'
import './App.scss'
import Header from './header'
import AboutAuthor from './sections/aboutAuthor'
import AboutEtudes from './sections/aboutEtudes'
import BurgerMenu from './sections/burgerMenu'
import Content from './sections/content'
import GoesTo from './sections/goesTo'
import Main from './sections/main'
import Prices from './sections/prices'
import Questions from './sections/questions'
import WhatEnter from './sections/whatEnter'

function App() {
	const [openBurger, setOpenBurger] = useState(false)

	useEffect(() => {
		if (openBurger) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
	}, [openBurger])

	return (
		<>
			{/* <Helmet>
				<meta charSet='utf-8' />
				<title>Rock Etudes</title>
				<link rel='canonical' href='https://rock-etudes.vercel.app/' />
				<meta
					name='description'
					content='ROCK ETUDES — це авторська збірка вправ створена на основі моделі “Estil Voice”'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:title' content='Rock Etudes' />
				<meta
					property='og:description'
					content='ROCK ETUDES — це авторська збірка вправ створена на основі моделі “Estil Voice”'
				/>
				<meta property='og:url' content='https://rock-etudes.vercel.app/' />
				<meta property='og:image' content={main} />
				<meta property='og:site_name' content='Rock Etudes' />
			</Helmet> */}

			<Header setOpenBurger={setOpenBurger} openBurger={openBurger} />
			{openBurger && <BurgerMenu setOpenBurger={setOpenBurger} />}
			<Main />
			<AboutEtudes />
			<GoesTo />
			<WhatEnter />
			<Content />
			<AboutAuthor />
			{/* <Reviews /> */}
			<Prices />
			<Questions />
			{/* <Footer /> */}
		</>
	)
}

export default App
