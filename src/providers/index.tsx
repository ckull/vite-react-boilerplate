import { ThemeProvider } from "styled-components"
import theme from "src/theme"

interface ProviderProps {
    children: React.ReactNode
}

const Provider = ({children} : ProviderProps) => {
    return (
        < >
            <ThemeProvider theme={theme}>
            { children }
            </ThemeProvider>
        </>
    )
}

export default Provider