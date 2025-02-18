import { Dispatch, FC, SetStateAction } from 'react'
import { Link } from 'react-scroll'
import s from './style.module.scss'

interface Props {
	setOpenBurger: Dispatch<SetStateAction<boolean>>
}

const BurgerMenu: FC<Props> = ({ setOpenBurger }) => (
	<div className={s.container}>
		<Link
			onClick={() => setOpenBurger(false)}
			to={'1'}
			smooth={true}
			duration={500}
			className={s.text}
		>
			About the collection
		</Link>
		<Link
			onClick={() => setOpenBurger(false)}
			to={'2'}
			smooth={true}
			duration={500}
			className={s.text}
		>
			Who will it suit?
		</Link>
		<Link
			onClick={() => setOpenBurger(false)}
			to={'3'}
			smooth={true}
			duration={500}
			className={s.text}
		>
			What is included
		</Link>
		<Link
			onClick={() => setOpenBurger(false)}
			to={'4'}
			smooth={true}
			duration={500}
			className={s.text}
		>
			Content
		</Link>
		<Link
			onClick={() => setOpenBurger(false)}
			to={'5'}
			smooth={true}
			duration={500}
			className={s.text}
		>
			About the author
		</Link>

		<Link
			onClick={() => setOpenBurger(false)}
			to={'6'}
			smooth={true}
			duration={500}
			className={s.text}
		>
			Reviews
		</Link>
		<Link
			onClick={() => setOpenBurger(false)}
			to={'7'}
			smooth={true}
			duration={500}
			className={s.text}
		>
			Prices
		</Link>
		<Link
			onClick={() => setOpenBurger(false)}
			to={'8'}
			smooth={true}
			duration={500}
			className={s.text}
		>
			FAQ
		</Link>
	</div>
)

export default BurgerMenu
