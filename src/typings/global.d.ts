import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

declare global {
    type PageWithLayout = NextPage & {
        layout?: boolean
    }

    type EnhancedAppProps = AppProps & {
        Component: PageWithLayout
    }

    type ThemeType = 'light' | 'dark'

    interface ITheme {
        theme: ThemeType
        onToggle: () => void
    }
}
