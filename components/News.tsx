import Card from './ui/Card'
import { PostSchema } from '@/types/post'
import { z } from 'zod'

const PostsResponseSchema = z.object({
	posts: z.array(PostSchema),
})

export default async function News() {
	const res = await fetch('https://dummyjson.com/posts')

	if (!res.ok) {
		throw new Error('Failed to fetch posts')
	}

	const json = await res.json()
	const parsed = PostsResponseSchema.parse(json) // <-- Validation
	const latestThree = parsed.posts.slice(0, 3)

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
