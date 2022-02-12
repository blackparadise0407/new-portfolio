import { useTheme } from '@/app/contexts/theme'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import Image from 'next/image'
import { IconButton } from '..'
import { BiMenu } from 'react-icons/bi'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useCallback, useRef, useState } from 'react'
import { useOnClickOutside } from '@/app/hooks/useOnClickOutside'
import Link from 'next/link'

const variants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, rotate: 360 }
}

const menuVariants: Variants = {
    initial: { y: 150, opacity: 0 },
    animate: { y: 0, opacity: 1, origin: '0 0' },
    exit: { y: 50, opacity: 0 }
}

export default function Header() {
    const { theme, onToggle } = useTheme()
    const [menuVis, setMenuVis] = useState(false)
    const menuRef = useRef(null)

    const handleToggleMenuVis = useCallback(() => {
        setMenuVis((prev) => !prev)
    }, [])

    const handleClickOutsideMenu = useCallback(() => {
        if (!menuVis) return
        setMenuVis(false)
    }, [menuVis])

    useOnClickOutside(menuRef, handleClickOutsideMenu)

    return (
        <nav className="fixed top-0 left-0 right-0 h-[58px] flex items-center px-2 backdrop-blur-[2px] bg-opacity-50">
            <div className="font-bold md:text-lg text-white">
                <Link href="/">Kyle Pham</Link>
            </div>
            <ul className="hidden items-center md:flex">
                <li className="py-1 px-3 text-sm rounded font-bold cursor-pointer select-none hover:bg-slate-700 transition-colors hover:text-white">
                    Works
                </li>
                <li className="py-1 px-3 text-sm rounded font-bold cursor-pointer select-none hover:bg-slate-700 transition-colors hover:text-white">
                    Posts
                </li>
            </ul>
            <div className="flex-grow"></div>
            <div className="flex items-center space-x-4">
                <IconButton
                    fill="bg-indigo-500"
                    icon={theme === 'dark' ? <FaMoon /> : <FaSun />}
                    onClick={onToggle}
                />
                <div className="hidden md:flex">
                    <div className="avatar">
                        <Image
                            className="rounded-full"
                            width={32}
                            height={32}
                            src="/profile-avatar.jpg"
                            alt="user avatar"
                        />
                    </div>
                </div>
                <div className="relative" ref={menuRef}>
                    <IconButton
                        onClick={handleToggleMenuVis}
                        icon={<BiMenu />}
                    />
                    <AnimatePresence>
                        {menuVis && (
                            <motion.ul
                                className="absolute top-12 right-0 w-40 rounded-md border border-zinc-500 overflow-hidden"
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={menuVariants}
                            >
                                <li className="text-sm bg-slate-600 text-white px-4 py-2 hover:bg-slate-500 hover:underline cursor-pointer transition-colors">
                                    <Link href="/about">About</Link>
                                </li>
                                <li className="text-sm bg-slate-600 text-white px-4 py-2 hover:bg-slate-500 hover:underline cursor-pointer transition-colors">
                                    Works
                                </li>
                                <li className="text-sm bg-slate-600 text-white px-4 py-2 hover:bg-slate-500 hover:underline cursor-pointer transition-colors">
                                    Posts
                                </li>
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    )
}
