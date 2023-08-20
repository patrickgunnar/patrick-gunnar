import Resume from "@/app/resume/page"
import { render, screen } from "@testing-library/react"


test('resume components', () => {
    render(<Resume />)

    // check if the screen has the components
    const title = screen.getByText(/Digital Craftsmanship Envisioned/i)
    const text = screen.getByText(/Step into the realm of my digital journey/i)
    const button = screen.getByRole('button', { name: /Uncover Brilliance/i })

    // expect to be in the doc
    expect(title).toBeInTheDocument()
    expect(text).toBeInTheDocument()
    expect(button).toBeInTheDocument()
})
