import Contact from "@/app/contact/page"
import { render, screen } from "@testing-library/react"


test('contact components', () => {
    render(<Contact />)

    // check if the screen has the components
    const title = screen.getByText(/Enigmatic Convergence: Reach Out/i)
    const inputName = screen.getByPlaceholderText('Signature Mark (name)')
    const inputEmail = screen.getByPlaceholderText('Cyberink Channel (e-mail)')
    const textarea = screen.getByPlaceholderText('Compose Your Enigma (message)')
    const button = screen.getByRole('button', { name: /Cipher Transmit/i })

    // expect to be in the doc
    expect(title).toBeInTheDocument()
    expect(inputName).toBeInTheDocument()
    expect(inputEmail).toBeInTheDocument()
    expect(textarea).toBeInTheDocument()
    expect(button).toBeInTheDocument()
})
