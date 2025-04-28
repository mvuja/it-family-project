import Link from 'next/link'
import topMenu from '@/data/top-menu.json'
import LangSwitcher from './ui/LangSwitcher'

const Navbar = () => {
	return (
		<nav className='nav-header'>
			<div className='container'>
				<ul>
					{topMenu.map((item, id) => (
						<li key={id}>
							<Link href={item.href}>{item.label}</Link>
						</li>
					))}
					<LangSwitcher />
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
