import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Greeting from './Greeting'

describe("Greeting Feature", () => {
    test('Renders Hello World text', () => {
        // 3 A's to write tests
        // Arrange - test data and conditions
        render(<Greeting />)
        // Act - logic
        // Nothing
    
        // Assert
        // Virtual DOM using screen
        const helloWorldElement = screen.getByText('Hello World', { exact: false })
        expect(helloWorldElement).toBeInTheDocument()
    })

    test('Button was not clicked', () => {
        // if changeText state value if false
        render(<Greeting />)
        const greetingMessageElement = screen.getByText('Good to see you')
        expect(greetingMessageElement).toBeInTheDocument()
    })
    test('Button was clicked', () => {
        render(<Greeting />)
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)
        const greetingMessageElement = screen.getByText('Changed')
        expect(greetingMessageElement).toBeInTheDocument()
    })
})
