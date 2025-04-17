import Link from 'next/link'

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Trail & Peak</h3>
                    <p>Inspiring stories from the intersection of running and climbing.</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/stories">Stories</Link></li>
                        <li><Link href="/training">Training</Link></li>
                        <li><Link href="/gear">Gear</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Connect</h3>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-facebook"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Trail & Peak. All rights reserved.</p>
            </div>
        </footer>
    )
} 