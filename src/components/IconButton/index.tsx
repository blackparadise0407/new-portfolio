import React, { HTMLProps, ReactNode } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

type IconButtonProps = Omit<HTMLProps<HTMLButtonElement>, 'onClick'> & {
    icon: ReactNode
    htmlType?: 'button' | 'reset' | 'submit' | undefined
    fill?: string | undefined
    onClick?: (...args: any[]) => void
}

export default function IconButton({
    className,
    icon,
    htmlType = 'button',
    fill = undefined,
    onClick = () => {},
    ...rest
}: IconButtonProps) {
    return (
        <motion.div onClick={onClick} whileTap={{ scale: 0.9 }}>
            <button
                className={clsx(
                    'rounded-lg w-10 h-10 text-white text-xl grid place-items-center shadow border-2 border-transparent ring-0 focus:border-indigo-400 transition-all',
                    !fill ? 'bg-slate-400 bg-opacity-20' : fill,
                    className
                )}
                type={htmlType as any}
                {...rest}
            >
                {icon}
            </button>
        </motion.div>
    )
}
