import search from '@/img/search.svg'

const Hero = () => {
	console.log(search)

	return (
		<section id='hero'>
			<div className='left'>
				<h1>
					Garantir <span>les droits</span> et <span>la dignité humaine</span> des personnes détenues
				</h1>
				<p>
					Le Conseil central de surveillance pénitentiaire et 36 commissions de surveillance exercent une surveillance indépendante des prisons et du
					traitement réservé aux personnes détenues.
				</p>
				<div className='search'>
					<input type='text' placeholder='Cherchez un mot-clé' />
					<button className='btn btn-icon'>
						<img src={search.src} alt='Search' />
					</button>
				</div>
			</div>
			<div className='right'></div>
		</section>
	)
}

export default Hero
