import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import { AnimatePresence, motion, Variants } from 'framer-motion'

type LayoutProps = {
    children: ReactNode
}

const variants: Variants = {
    initial: { opacity: 0, x: -200, y: 0 },
    animate: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 200 }
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="bg-zinc-800 min-h-screen">
            <Header />
            <main className="pt-[58px]">{children}</main>
            <Footer />
        </div>
    )
}
