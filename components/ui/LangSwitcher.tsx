import Link from 'next/link'

const LangSwitcher = () => {
	return (
		<li className='lang'>
			<Link href='/'>NL</Link>
			<Link href='/' className='active'>
				FR
			</Link>
		</li>
	)
}

export default LangSwitcher
