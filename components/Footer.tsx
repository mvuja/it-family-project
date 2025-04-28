import footerLogo from '@/img/footer-logo.png'
import linkedin from '@/img/linkedin.png'
import youtube from '@/img/yt.png'
import Image from 'next/image'
import Link from 'next/link'
import secondMenu from '@/data/second-menu.json'
import topMenu from '@/data/top-menu.json'
import LangSwitcher from './ui/LangSwitcher'

const Footer = () => {
	return (
		<footer>
			<div className='container top'>
				<div className='col'>
					<Image src={footerLogo} alt='Logo' />
				</div>
				<div className='col'>
					<h6>Coordonnées</h6>
					<ul>
						<li>
							<Link href='/'>Rue de Louvain, 48/2, 1000 Bruxelles</Link>
						</li>
						<li>
							<Link href='mailto:info@ccsp-belgium.be'>info@ccsp-belgium.be</Link>
						</li>
						<li>
							<Link href='tel:+32 (0)2 549 94 70'>+32 (0)2 549 94 70</Link>
						</li>
					</ul>
				</div>
				<div className='col'>
					<h6>Accès rapides</h6>
					<div className='inner-col'>
						<ul>
							{secondMenu.map((item, id) => (
								<li key={id}>
									<Link href={item.href}>{item.label}</Link>
									{item.submenu && (
										<ul className='submenu'>
											{item.submenu.map((subitem, id) => (
												<li key={id}>
													<Link href={subitem.href}>{subitem.label}</Link>
												</li>
											))}
										</ul>
									)}
								</li>
							))}
						</ul>
						<ul>
							{topMenu.map((item, id) => (
								<li key={id}>
									<Link href={item.href}>{item.label}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className='col'>
					<h6>Légal</h6>
					<ul>
						<li>
							<Link href='/'>Police de confidentialité</Link>
						</li>
						<li>
							<Link href='/'>Police de cookies</Link>
						</li>
						<li>
							<Link href='/'>Termes et conditions</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className='container bottom'>
				<div className='left'>
					<div className='col'>
						<Image src={linkedin} alt='LinkedIn' />
						<span>LinkedIn</span>
					</div>
					<div className='col'>
						<Image src={youtube} alt='Youtube' />
						<span>Youtube</span>
					</div>
				</div>
				<div className='right'>
					<p>©2025 CCSP Tout droits réservés.</p>
					<LangSwitcher />
				</div>
			</div>
		</footer>
	)
}

export default Footer
