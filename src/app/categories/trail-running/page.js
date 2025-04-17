import Image from 'next/image'
import PostCard from '../../../components/PostCard'
import Layout from '../../../components/Layout'
import { createClient } from '@sanity/client'

// Create a new Sanity client
const client = createClient({
    projectId: '48tlul12',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-03-21',
})

async function getTrailRunningPosts() {
    try {
        const posts = await client.fetch(`
            *[_type == "post" && "trail-running" in categories] {
                _id,
                title,
                author,
                publishedAt,
                description,
                "slug": slug.current
            }
        `)
        console.log('Trail Running posts:', posts)
        return posts
    } catch (error) {
        console.error('Error fetching trail running posts:', error)
        return []
    }
}

export default async function TrailRunning() {
    const posts = await getTrailRunningPosts()
    
    return (
        <Layout>
            <section className="category-hero">
                <Image 
                    src="/images/trail-running-hero.jpg"
                    alt="Trail running in mountains"
                    fill
                    className="hero-image"
                    priority
                />
                <div className="hero-content">
                    <h1>Trail <span className="keyword">Running</span></h1>
                    <p>Discover the joy of running in nature's playground</p>
                </div>
            </section>

            <section className="category-content">
                <div className="post-grid">
                    {posts && posts.length > 0 ? (
                        posts.map((post) => (
                            <PostCard 
                                key={post._id}
                                title={post.title}
                                author={post.author}
                                date={new Date(post.publishedAt).toLocaleDateString()}
                                description={post.description}
                                slug={post.slug}
                            />
                        ))
                    ) : (
                        <p>No trail running articles yet. Check back soon!</p>
                    )}
                </div>
            </section>

            <section className="category-resources">
                <h2>Essential <span className="keyword">Resources</span></h2>
                <div className="resources-grid">
                    <div className="resource-card">
                        <h3>Training Plans</h3>
                        <p>Structured programs for all levels</p>
                    </div>
                    <div className="resource-card">
                        <h3>Trail Guides</h3>
                        <p>Detailed guides for popular trails</p>
                    </div>
                    <div className="resource-card">
                        <h3>Gear Reviews</h3>
                        <p>Expert reviews and recommendations</p>
                    </div>
                </div>
            </section>
        </Layout>
    )
} 