import Link from 'next/link'
import topMenu from '../data/top-menu.json'

const Navbar = () => {
	return (
		<nav className='nav-header'>
			<div className='container'>
				<ul>
					{topMenu.map((item, index) => (
						<li key={index}>
							<Link href={item.href}>{item.label}</Link>
						</li>
					))}
					<li className='lang'>
						<Link href='/'>NL</Link>
						<Link href='/' className='active'>
							FR
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
