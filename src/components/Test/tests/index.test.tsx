import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import Test from "../index"

describe("Test", () => {
    test('demo', () => {
        expect(true).toBe(true)
    })

    test("Renders the main page", () => {
        render(<Test />)
        expect(true).toBeTruthy()
    })
})
