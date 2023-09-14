import { ThemeProvider } from "styled-components"
import theme from "src/theme"
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { BrowserRouter } from "react-router-dom"
interface ProviderProps {
    children: React.ReactNode
}

const Provider = ({ children }: ProviderProps) => {
    const queryClient = new QueryClient()

    return (
        < >
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        {children}
                    </BrowserRouter>
                </ThemeProvider>
            </QueryClientProvider>
        </>
    )
}

export default Provider