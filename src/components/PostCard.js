import Link from 'next/link'

export default function PostCard({ title, author, date, description, slug }) {
    return (
        <article className="post-card">
            <div className="post-image">
                <img src="https://via.placeholder.com/400x300" alt={title} />
            </div>
            <div className="post-content">
                <h3>{title}</h3>
                <p className="post-meta">By {author} | {date}</p>
                <p>{description}</p>
                <Link href={`/stories/${slug}`} className="read-more">Read More</Link>
            </div>
        </article>
    )
} 