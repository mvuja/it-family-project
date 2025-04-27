import Image from 'next/image'
import placeholder from '@/img/image.png'
import like from '@/img/like.png'
import dislike from '@/img/dislike.png'

const Card = ({ post }) => {
	return (
		<div className='card'>
			<Image className='main-img' src={placeholder} alt={post.title} width={500} height={278} />
			<div className='tags'>
				{post.tags?.map((el, id) => (
					<span key={id}>{el}</span>
				))}
			</div>
			<h3>{post.title}</h3>
			<div className='reactions'>
				<div>
					<Image src={like} alt='Like' />
					<span>{post.reactions.likes}</span>
				</div>
				<div>
					<Image src={dislike} alt='Like' />
					<span>{post.reactions.dislikes}</span>
				</div>
			</div>
		</div>
	)
}

export default Card
