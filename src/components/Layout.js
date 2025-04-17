import Navigation from './Navigation'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Navigation />
            <main>{children}</main>
            <Footer />
        </div>
    )
} 