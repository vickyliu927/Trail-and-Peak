import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import Layout from '../../../components/Layout'
import Image from 'next/image'
import styles from './page.module.css'

// Create a new Sanity client
const client = createClient({
    projectId: '48tlul12',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-03-21',
})

// Create an image URL builder
const builder = imageUrlBuilder(client)
function urlFor(source) {
    return builder.image(source)
}

async function getPost(slug) {
    try {
        const post = await client.fetch(`
            *[_type == "post" && slug.current == $slug][0] {
                title,
                author,
                publishedAt,
                description,
                body,
                mainImage
            }
        `, { slug })
        return post
    } catch (error) {
        console.error('Error fetching post:', error)
        return null
    }
}

export default async function ArticlePage({ params }) {
    const post = await getPost(params.slug)

    if (!post) {
        return (
            <Layout>
                <div className={styles['article-container']}>
                    <h1 className={styles['article-title']}>Article not found</h1>
                    <p>Sorry, we couldn't find the article you're looking for.</p>
                </div>
            </Layout>
        )
    }

    return (
        <Layout>
            <article className={styles['article-container']}>
                <header className={styles['article-header']}>
                    {post.mainImage && (
                        <div className={styles['article-image-container']}>
                            <Image
                                src={urlFor(post.mainImage).url()}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}
                    <h1 className={styles['article-title']}>{post.title}</h1>
                    <div className={styles['article-meta']}>
                        <span>By {post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>
                </header>

                <div className={styles['article-content']}>
                    <p className="text-xl mb-8">{post.description}</p>
                    {post.body && post.body.map((block, index) => {
                        if (block._type === 'block') {
                            return <p key={index}>{block.children[0].text}</p>
                        }
                        return null
                    })}
                </div>
            </article>
        </Layout>
    )
} 