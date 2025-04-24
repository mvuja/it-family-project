import Navbar from '@/components/Navbar'
import { ReactNode } from 'react'

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
	return (
		<main>
			<Navbar />
			{children}
		</main>
	)
}

export default Layout
