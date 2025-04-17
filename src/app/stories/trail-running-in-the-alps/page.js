import Image from 'next/image'
import Link from 'next/link'
import styles from '../stories.module.css'

export default function TrailRunningInTheAlps() {
    return (
        <article className={styles['story-page']}>
            <header className={styles['story-header']}>
                <div className={styles['story-hero']}>
                    <Image
                        src="/images/alps-trail.jpg"
                        alt="Scenic mountain trail in the Alps"
                        fill
                        className={styles['hero-image']}
                        priority
                    />
                </div>
                <div className={styles['story-meta']}>
                    <h1>Trail Running in the Alps</h1>
                    <div className={styles['meta-info']}>
                        <span className={styles.author}>By Michael Brown</span>
                        <span className={styles.date}>May 8, 2024</span>
                    </div>
                </div>
            </header>

            <div className={styles['story-content']}>
                <p className={styles.lead}>
                    The European Alps offer some of the most breathtaking and challenging trail running experiences in the world. Join us on a journey through these majestic mountains and discover the best routes for every level of runner.
                </p>

                <h2>Iconic Alpine Trails</h2>
                <p>
                    From the famous Tour du Mont Blanc to the lesser-known but equally stunning trails in the Dolomites, the Alps provide endless opportunities for trail runners. Each region offers unique landscapes, from lush valleys to rugged peaks.
                </p>

                <h2>Must-Visit Locations</h2>
                <ul>
                    <li>Chamonix Valley, France</li>
                    <li>Zermatt, Switzerland</li>
                    <li>Cortina d'Ampezzo, Italy</li>
                    <li>Innsbruck, Austria</li>
                </ul>

                <h2>Seasonal Considerations</h2>
                <p>
                    The best time for trail running in the Alps is typically from June to September, when most trails are snow-free and weather conditions are most favorable. However, early season runners should be prepared for variable conditions and possible snow at higher elevations.
                </p>

                <h2>Safety and Preparation</h2>
                <p>
                    Alpine trail running requires careful preparation. Always check weather forecasts, carry appropriate gear, and be aware of altitude effects. Many trails are well-marked, but having navigation skills and a map is essential for safety.
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