import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useState
} from 'react'

type ThemeProviderProps = {
    children: ReactNode | JSX.Element
}

const initialState: ITheme = {
    theme: 'light',
    onToggle: () => {}
}

const ThemeContext = createContext<ITheme>(initialState)

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<ThemeType>(initialState.theme)

    const handleChangeTheme = useCallback(() => {
        setTheme((prev) => {
            const next = prev === 'light' ? 'dark' : 'light'
            localStorage.setItem('theme', next)
            return next
        })
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setTheme((localStorage.getItem('theme') as ThemeType) || 'light')
        }
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, onToggle: handleChangeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}
