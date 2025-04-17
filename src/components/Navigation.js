import Link from 'next/link'

export default function Navigation() {
    return (
        <nav>
            <div className="logo">
                <Link href="/">
                    <h1>Trail & Peak</h1>
                </Link>
            </div>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/stories">Stories</Link></li>
                <li><Link href="/categories/trail-running">Trail Running</Link></li>
                <li><Link href="/categories/road-running">Road Running</Link></li>
                <li><Link href="/categories/mountain-climbing">Mountain Climbing</Link></li>
                <li><Link href="/categories/bouldering">Bouldering</Link></li>
            </ul>
        </nav>
    )
} 