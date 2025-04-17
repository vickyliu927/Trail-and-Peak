import Image from 'next/image'
import Link from 'next/link'
import styles from '../stories.module.css'

export default function RoadVsTrailRunning() {
    return (
        <article className={styles['story-page']}>
            <header className={styles['story-header']}>
                <div className={styles['story-hero']}>
                    <Image
                        src="/images/road-vs-trail.jpg"
                        alt="Split image showing road running and trail running"
                        fill
                        className={styles['hero-image']}
                        priority
                    />
                </div>
                <div className={styles['story-meta']}>
                    <h1>Road Running vs Trail Running</h1>
                    <div className={styles['meta-info']}>
                        <span className={styles.author}>By Emma Davis</span>
                        <span className={styles.date}>May 1, 2024</span>
                    </div>
                </div>
            </header>

            <div className={styles['story-content']}>
                <p className={styles.lead}>
                    Both road running and trail running offer unique experiences and benefits. Understanding the key differences between these disciplines can help you choose the right terrain for your goals and preferences.
                </p>

                <h2>Surface and Terrain</h2>
                <p>
                    Road running offers consistent, predictable surfaces ideal for speed work and maintaining steady paces. Trail running presents varied terrain that challenges balance and agility while reducing repetitive impact stress.
                </p>

                <h2>Key Differences</h2>
                <ul>
                    <li>Impact and joint stress levels</li>
                    <li>Pace and speed expectations</li>
                    <li>Required gear and equipment</li>
                    <li>Mental engagement and focus</li>
                    <li>Training adaptations needed</li>
                </ul>

                <h2>Benefits of Road Running</h2>
                <p>
                    Road running excels in convenience and accessibility. It's perfect for structured training, speed work, and consistent pacing. The predictable surface makes it easier to track progress and achieve specific time goals.
                </p>

                <h2>Benefits of Trail Running</h2>
                <p>
                    Trail running offers natural variety, reduced impact, and stronger stabilizer muscles. The changing terrain improves balance and coordination while providing a more immersive nature experience. It often requires more mental engagement and presents unique challenges.
                </p>

                <h2>Choosing Your Path</h2>
                <p>
                    Consider incorporating both types of running into your training. Road running can help build speed and endurance, while trail running improves strength and agility. Many runners find that mixing both provides the best of both worlds.
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