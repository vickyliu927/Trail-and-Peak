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

async function getMountainClimbingPosts() {
    try {
        const posts = await client.fetch(`
            *[_type == "post" && "mountain-climbing" in categories] {
                _id,
                title,
                author,
                publishedAt,
                description,
                "slug": slug.current
            }
        `)
        console.log('Mountain Climbing posts:', posts)
        return posts
    } catch (error) {
        console.error('Error fetching mountain climbing posts:', error)
        return []
    }
}

export default async function MountainClimbing() {
    const posts = await getMountainClimbingPosts()
    
    return (
        <Layout>
            <section className="category-hero">
                <Image 
                    src="/images/mountain-climbing-hero.jpg"
                    alt="Climber ascending a mountain peak"
                    fill
                    className="hero-image"
                    priority
                />
                <div className="hero-content">
                    <h1>Mountain <span className="keyword">Climbing</span></h1>
                    <p>Reach new heights and conquer peaks</p>
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
                        <p>No mountain climbing articles yet. Check back soon!</p>
                    )}
                </div>
            </section>
        </Layout>
    )
} 