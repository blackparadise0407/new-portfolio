import '../styles/imports.css'
import '../styles/globals.css'
import '../styles/reset.css'
import { Layout } from '@/app/components'
import { ThemeProvider } from '@/app/contexts/theme'

function MyApp({ Component, pageProps }: EnhancedAppProps) {
    const AppLayout = Component.layout
        ? Layout
        : ({ children }: any) => <>{children}</>

    return (
        <ThemeProvider>
            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
        </ThemeProvider>
    )
}

export default MyApp
