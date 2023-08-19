import Home from "@/app/(site)/page"
import { render, screen } from "@testing-library/react"


test('home components', () => {
    render(<Home />)

    // check if the screen has the text content
    const contentWrapper = screen.getByTestId('contentWrapper')
    const textWrapper = screen.getByTestId('textWrapper')
    const greeting = screen.getByText(/Salutations, kindred explorer of the digital realm,/i)

    // expect the text content
    expect(contentWrapper).toBeInTheDocument()
    expect(textWrapper).toBeInTheDocument()
    expect(greeting).toBeInTheDocument()

    // check if the screen has the social buttons container
    const dockWrapper = screen.getByTestId('dockWrapper')
    const socialLabel = screen.getByText(/Harmonizing Tunes/i)

    // expect the container's to be in the doc
    expect(dockWrapper).toBeInTheDocument()
    expect(socialLabel).toBeInTheDocument()

    // check if the screen has the 4 social buttons
    const linkedin = screen.getByRole('button', { name: /Connect: LinkedIn Journey/i })
    const github = screen.getByRole('button', { name: /Explore: My GitHub Odyssey/i })
    const instagram = screen.getByRole('button', { name: /Code Chronicles: Instagram/i })
    const tiktok = screen.getByRole('button', { name: /Coding Adventures: TikTok/i })

    // expect to the social buttons to be in the doc
    expect(linkedin).toBeInTheDocument()
    expect(github).toBeInTheDocument()
    expect(instagram).toBeInTheDocument()
    expect(tiktok).toBeInTheDocument()
})
