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

async function getBoulderingPosts() {
    try {
        const posts = await client.fetch(`
            *[_type == "post" && "bouldering" in categories] {
                _id,
                title,
                author,
                publishedAt,
                description,
                "slug": slug.current
            }
        `)
        console.log('Bouldering posts:', posts)
        return posts
    } catch (error) {
        console.error('Error fetching bouldering posts:', error)
        return []
    }
}

export default async function Bouldering() {
    const posts = await getBoulderingPosts()
    
    return (
        <Layout>
            <section className="category-hero">
                <Image 
                    src="/images/bouldering-hero.jpg"
                    alt="Boulderer tackling a challenging problem"
                    fill
                    className="hero-image"
                    priority
                />
                <div className="hero-content">
                    <h1>Bouldering <span className="keyword">Adventures</span></h1>
                    <p>Experience the purest form of climbing</p>
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
                        <p>No bouldering articles yet. Check back soon!</p>
                    )}
                </div>
            </section>
        </Layout>
    )
} 