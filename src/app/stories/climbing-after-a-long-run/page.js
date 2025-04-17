import Image from 'next/image'
import Link from 'next/link'
import styles from '../stories.module.css'

export default function ClimbingAfterLongRun() {
    return (
        <article className={styles['story-page']}>
            <header className={styles['story-header']}>
                <div className={styles['story-hero']}>
                    <Image
                        src="/images/climbing-recovery.jpg"
                        alt="Athlete stretching after a long run"
                        fill
                        className={styles['hero-image']}
                        priority
                    />
                </div>
                <div className={styles['story-meta']}>
                    <h1>Climbing After a Long Run</h1>
                    <div className={styles['meta-info']}>
                        <span className={styles.author}>By Jane Smith</span>
                        <span className={styles.date}>May 10, 2024</span>
                    </div>
                </div>
            </header>

            <div className={styles['story-content']}>
                <p className={styles.lead}>
                    Combining running and climbing in the same day can be challenging but rewarding. Learn how to properly recover and prepare your body for climbing after a long run.
                </p>

                <h2>The Science of Recovery</h2>
                <p>
                    Understanding how your body recovers from running is crucial before attempting to climb. Running primarily uses your lower body and cardiovascular system, while climbing engages your upper body and core. This complementary nature can be beneficial if managed correctly.
                </p>

                <h2>Recovery Techniques</h2>
                <ul>
                    <li>Active recovery methods</li>
                    <li>Proper hydration and nutrition</li>
                    <li>Targeted stretching routines</li>
                    <li>Rest periods and timing</li>
                </ul>

                <h2>Training Tips</h2>
                <p>
                    When planning to combine running and climbing, consider the intensity and duration of each activity. Start with shorter runs before climbing sessions, and gradually increase the distance as your body adapts. Pay attention to your body's signals and adjust your training accordingly.
                </p>

                <h2>Common Challenges</h2>
                <p>
                    Fatigue, muscle soreness, and reduced grip strength are common challenges when climbing after running. Learn how to recognize these signs and modify your climbing session to prevent injury and maintain proper form.
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