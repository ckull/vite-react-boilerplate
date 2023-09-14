import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import Test from "../index"
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

describe("Test", () => {
    let queryClient: QueryClient;

    beforeAll(() => {
        queryClient = new QueryClient() // Initialize queryClient
    })

    test('demo', () => {
        expect(true).toBe(true)
    })

    test("Renders the main page", () => {
        render(
            <QueryClientProvider client={queryClient}>
                <Test />
            </QueryClientProvider>
        )
        expect(true).toBeTruthy()
    })
})
