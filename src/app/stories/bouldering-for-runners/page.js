import Image from 'next/image'
import Link from 'next/link'
import styles from '../stories.module.css'

export default function BoulderingForRunners() {
    return (
        <article className={styles['story-page']}>
            <header className={styles['story-header']}>
                <div className={styles['story-hero']}>
                    <Image
                        src="/images/bouldering-runners.jpg"
                        alt="Runner practicing bouldering techniques"
                        fill
                        className={styles['hero-image']}
                        priority
                    />
                </div>
                <div className={styles['story-meta']}>
                    <h1>Bouldering for Runners</h1>
                    <div className={styles['meta-info']}>
                        <span className={styles.author}>By Sarah Johnson</span>
                        <span className={styles.date}>May 5, 2024</span>
                    </div>
                </div>
            </header>

            <div className={styles['story-content']}>
                <p className={styles.lead}>
                    Discover how incorporating bouldering into your training routine can enhance your running performance and help prevent common injuries through improved strength and body awareness.
                </p>

                <h2>Benefits of Bouldering for Runners</h2>
                <p>
                    Bouldering offers unique benefits for runners, from developing core strength to improving balance and proprioception. The dynamic movements in bouldering complement running by targeting different muscle groups and movement patterns.
                </p>

                <h2>Key Areas of Improvement</h2>
                <ul>
                    <li>Core strength and stability</li>
                    <li>Upper body muscular endurance</li>
                    <li>Balance and coordination</li>
                    <li>Mental focus and problem-solving</li>
                    <li>Injury prevention through cross-training</li>
                </ul>

                <h2>Getting Started</h2>
                <p>
                    Begin with basic bouldering techniques at a local climbing gym. Focus on proper form and gradually increase difficulty as you build confidence. Most gyms offer introductory classes perfect for runners new to climbing.
                </p>

                <h2>Training Schedule Integration</h2>
                <p>
                    To maximize benefits while avoiding overtraining, incorporate bouldering sessions between running days. This allows adequate recovery while maintaining consistent training stimulus. Start with 1-2 bouldering sessions per week.
                </p>

                <h2>Safety Considerations</h2>
                <p>
                    Always prioritize safety when bouldering. Learn proper falling techniques, use crash pads, and climb with a spotter when necessary. Listen to your body and avoid overtraining, especially when first starting out.
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