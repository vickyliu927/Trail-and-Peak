import PostCard from './PostCard'

export default function BlogPostList({ posts, title, subtitle }) {
    return (
        <section className="blog-posts">
            {title && <h2>{title}</h2>}
            {subtitle && <p className="subtitle">{subtitle}</p>}
            <div className="post-grid">
                {posts.map((post, index) => (
                    <PostCard
                        key={index}
                        title={post.title}
                        author={post.author}
                        date={post.date}
                        description={post.description}
                    />
                ))}
            </div>
        </section>
    )
} 