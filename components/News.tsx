import React from 'react'
import Card from './ui/Card'

export default async function News() {
	const data = await fetch('https://dummyjson.com/posts')
	const fetchedData = await data.json()
	const posts = fetchedData.posts
	const latestThree = posts.slice(0, 3)
	console.log(latestThree)

	return (
		<section id='news'>
			<div className='container'>
				<h2 className='text-center'>Nos dernières actualités</h2>
				<ul className='posts'>
					{latestThree?.map(post => (
						<Card key={post.id} post={post} />
					))}
				</ul>
			</div>
		</section>
	)
}
