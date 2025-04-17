import Layout from '../components/Layout'
import PostCard from '../components/PostCard'
import Image from 'next/image'
import Link from 'next/link'
import { createClient } from '@sanity/client'

// Create a new Sanity client
const client = createClient({
    projectId: '48tlul12',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-03-21',
})

// Add revalidation settings
export const revalidate = 0; // This ensures the page is revalidated on every request

async function getFeaturedStories() {
    try {
        // Query posts where featured is true
        const posts = await client.fetch(`
            *[_type == "post" && featured == true] {
                _id,
                title,
                author,
                publishedAt,
                description,
                "slug": slug.current
            }
        `)
        console.log('Featured posts from Sanity:', posts)
        return posts
    } catch (error) {
        console.error('Error fetching stories:', error)
        return []
    }
}

export default async function Home() {
    const featuredStories = await getFeaturedStories()
    
    return (
        <Layout>
            {/* Hero Section */}
            <section className="hero">
                <Image 
                    src="/images/hero-trail-running.jpg" 
                    alt="Woman trail running in mountains"
                    fill
                    className="hero-image"
                    priority
                />
                <div className="hero-content">
                    <h1>Where Running Meets <span className="keyword">Climbing</span></h1>
                    <p>Stories from athletes who push their limits on roads, trails and mountains</p>
                    <Link href="/stories">
                        <button className="cta-button">Read Latest Stories</button>
                    </Link>
                </div>
            </section>

            {/* Featured Stories */}
            <section className="featured-posts">
                <h2>Featured <span className="keyword">Stories</span></h2>
                <div className="post-grid">
                    {featuredStories && featuredStories.length > 0 ? (
                        featuredStories.map((post) => (
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
                        <>
                            <p>No featured stories yet. Add some in Sanity Studio!</p>
                        </>
                    )}
                </div>
            </section>

            {/* Categories */}
            <section className="categories">
                <h2>Explore <span className="keyword">Categories</span></h2>
                <div className="category-grid">
                    <Link href="/categories/trail-running" className="category-card">
                        <div>
                            <i className="fas fa-mountain"></i>
                            <h3>Trail Running</h3>
                        </div>
                    </Link>
                    <Link href="/categories/road-running" className="category-card">
                        <div>
                            <i className="fas fa-road"></i>
                            <h3>Road Running</h3>
                        </div>
                    </Link>
                    <Link href="/categories/mountain-climbing" className="category-card">
                        <div>
                            <i className="fas fa-hiking"></i>
                            <h3>Mountain Climbing</h3>
                        </div>
                    </Link>
                    <Link href="/categories/bouldering" className="category-card">
                        <div>
                            <i className="fas fa-hand-rock"></i>
                            <h3>Bouldering</h3>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Newsletter */}
            <section className="newsletter">
                <h2>Stay <span className="keyword">Updated</span></h2>
                <p>Subscribe to our newsletter for the latest stories and tips</p>
                <form className="newsletter-form">
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit">Subscribe</button>
                </form>
            </section>
        </Layout>
    )
}
