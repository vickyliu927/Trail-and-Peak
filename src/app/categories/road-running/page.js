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

async function getRoadRunningPosts() {
    try {
        const posts = await client.fetch(`
            *[_type == "post" && "road-running" in categories] {
                _id,
                title,
                author,
                publishedAt,
                description,
                "slug": slug.current
            }
        `)
        console.log('Road Running posts:', posts)
        return posts
    } catch (error) {
        console.error('Error fetching road running posts:', error)
        return []
    }
}

export default async function RoadRunning() {
    const posts = await getRoadRunningPosts()
    
    return (
        <Layout>
            <section className="category-hero">
                <Image 
                    src="/images/road-running-hero.jpg"
                    alt="Road running at sunset"
                    fill
                    className="hero-image"
                    priority
                />
                <div className="hero-content">
                    <h1>Road <span className="keyword">Running</span></h1>
                    <p>Push your limits on the open road</p>
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
                        <p>No road running articles yet. Check back soon!</p>
                    )}
                </div>
            </section>
        </Layout>
    )
} 