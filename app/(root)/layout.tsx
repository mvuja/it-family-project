import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { ReactNode } from 'react'

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
	return (
		<main>
			<Navbar />
			{children}
			<Footer />
		</main>
	)
}

export default Layout
