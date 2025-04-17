import Image from 'next/image'
import PostCard from '../../components/PostCard'
import Link from 'next/link'
import styles from './page.module.css'
import Layout from '../../components/Layout'
import { createClient } from '@sanity/client'

// Create a new Sanity client
const client = createClient({
    projectId: '48tlul12',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-03-21',
})

async function getAllPosts() {
    try {
        const posts = await client.fetch(`
            *[_type == "post"] | order(publishedAt desc) {
                _id,
                title,
                author,
                publishedAt,
                description,
                "slug": slug.current,
                categories
            }
        `)
        console.log('All posts:', posts)
        return posts
    } catch (error) {
        console.error('Error fetching posts:', error)
        return []
    }
}

export default async function Stories() {
    const posts = await getAllPosts()
    
    return (
        <Layout>
            <section className={styles['category-hero']}>
                <Image 
                    src="/images/stories-hero.jpg"
                    alt="Featured stories collection"
                    fill
                    className={styles['hero-image']}
                    priority
                />
                <div className={styles['hero-content']}>
                    <h1>All <span className={styles.keyword}>Stories</span></h1>
                    <p>Discover inspiring tales from the world of running and climbing</p>
                </div>
            </section>

            <section className={styles['category-content']}>
                <div className={styles['post-grid']}>
                    {posts && posts.length > 0 ? (
                        posts.map((post) => (
                            <Link href={`/stories/${post.slug}`} key={post._id}>
                                <PostCard 
                                    title={post.title}
                                    author={post.author}
                                    date={new Date(post.publishedAt).toLocaleDateString()}
                                    description={post.description}
                                    slug={post.slug}
                                />
                            </Link>
                        ))
                    ) : (
                        <p>No stories published yet. Check back soon!</p>
                    )}
                </div>
            </section>
        </Layout>
    )
} 