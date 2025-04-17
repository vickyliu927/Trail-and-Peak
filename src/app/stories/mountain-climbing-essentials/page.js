import Image from 'next/image'
import Link from 'next/link'
import styles from '../stories.module.css'

export default function MountainClimbingEssentials() {
    return (
        <article className={styles['story-page']}>
            <header className={styles['story-header']}>
                <div className={styles['story-hero']}>
                    <Image
                        src="/images/climbing-essentials.jpg"
                        alt="Essential mountain climbing gear laid out"
                        fill
                        className={styles['hero-image']}
                        priority
                    />
                </div>
                <div className={styles['story-meta']}>
                    <h1>Mountain Climbing Essentials</h1>
                    <div className={styles['meta-info']}>
                        <span className={styles.author}>By David Wilson</span>
                        <span className={styles.date}>May 3, 2024</span>
                    </div>
                </div>
            </header>

            <div className={styles['story-content']}>
                <p className={styles.lead}>
                    Whether you're a beginner or experienced climber, having the right gear and knowledge is crucial for safe and successful mountain climbing adventures. Here's your comprehensive guide to essential equipment and techniques.
                </p>

                <h2>Essential Gear Checklist</h2>
                <ul>
                    <li>Climbing harness and helmet</li>
                    <li>Ropes and carabiners</li>
                    <li>Proper climbing shoes</li>
                    <li>Chalk bag and chalk</li>
                    <li>Protection gear (nuts, cams, etc.)</li>
                    <li>First aid kit</li>
                </ul>

                <h2>Safety Equipment</h2>
                <p>
                    Safety should always be your top priority in mountain climbing. Invest in high-quality safety gear and regularly inspect your equipment for wear and damage. Never compromise on safety equipment to save money.
                </p>

                <h2>Clothing and Weather Protection</h2>
                <p>
                    Mountain weather can be unpredictable. Layer your clothing appropriately and always carry rain protection. Choose moisture-wicking base layers and insulating mid-layers, topped with a weatherproof outer shell.
                </p>

                <h2>Navigation Tools</h2>
                <ul>
                    <li>Topographic maps of the area</li>
                    <li>Compass and GPS device</li>
                    <li>Emergency communication device</li>
                    <li>Headlamp with extra batteries</li>
                </ul>

                <h2>Training and Preparation</h2>
                <p>
                    Beyond equipment, proper training is essential. Take courses in rope management, anchor building, and rescue techniques. Practice your skills regularly and always climb with experienced partners when tackling new challenges.
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