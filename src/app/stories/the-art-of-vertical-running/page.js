import Image from 'next/image'
import Link from 'next/link'
import styles from '../stories.module.css'

export default function TheArtOfVerticalRunning() {
    return (
        <article className={styles['story-page']}>
            <header className={styles['story-header']}>
                <div className={styles['story-hero']}>
                    <Image
                        src="/images/vertical-running-hero.jpg"
                        alt="Runner ascending a steep mountain trail"
                        fill
                        className={styles['hero-image']}
                        priority
                    />
                </div>
                <div className={styles['story-meta']}>
                    <h1>The Art of Vertical Running</h1>
                    <div className={styles['meta-info']}>
                        <span className={styles.author}>By John Doe</span>
                        <span className={styles.date}>May 15, 2024</span>
                    </div>
                </div>
            </header>

            <div className={styles['story-content']}>
                <p className={styles.lead}>
                    Vertical running is more than just running uphill - it's a unique discipline that combines endurance, strength, and technical skill. In this comprehensive guide, we'll explore how to transition from flat trails to technical mountain running.
                </p>

                <h2>Understanding Vertical Running</h2>
                <p>
                    Vertical running, also known as mountain running or sky running, involves running up steep mountain trails with significant elevation gain. Unlike traditional trail running, vertical running requires specific techniques and training approaches to handle the increased demands on your body.
                </p>

                <h2>Essential Techniques</h2>
                <ul>
                    <li>Power hiking on steep sections</li>
                    <li>Efficient uphill running form</li>
                    <li>Proper downhill technique</li>
                    <li>Breathing and pacing strategies</li>
                </ul>

                <h2>Training Progression</h2>
                <p>
                    Start with gradual elevation gain in your runs, focusing on building strength and endurance. Incorporate specific exercises like stair climbing and hill repeats. Gradually increase the technical difficulty of your routes as you become more comfortable.
                </p>

                <h2>Gear Considerations</h2>
                <p>
                    Proper footwear with good grip is essential for vertical running. Consider trail shoes with aggressive tread patterns and good ankle support. Hydration packs and poles can be valuable additions for longer vertical runs.
                </p>

                <div className={styles['story-footer']}>
                    <Link href="/stories" className={styles['back-link']}>
                        ← Back to Stories
                    </Link>
                </div>
            </div>
        </article>
    )
} 