import Myself from "@/app/myself/page"
import { render, screen } from "@testing-library/react"


test('myself components', () => {
    render(<Myself />)

    // check if the screen has the text content
    const contentWrapper = screen.getByTestId('contentWrapper')
    const textWrapper = screen.getByTestId('textWrapper')
    const greeting = screen.getByText(/A warm embrace, fellow traveler of the digital ether,/i)

    // expect the text content
    expect(contentWrapper).toBeInTheDocument()
    expect(textWrapper).toBeInTheDocument()
    expect(greeting).toBeInTheDocument()

    // check if the screen has profile data
    const dockWrapper = screen.getByTestId('dockWrapper')
    const profileImg = screen.getByAltText(/Patrick Gunnar/i)
    const profileName = screen.getByText(/Patrick Gunnar/i)
    const profileLabel = screen.getByText(/Masterful Full-Stack Web Artisan/i)
    const profileBio = screen.getByText(
        /🌌 Transmuting Dreams into Code | ✨ Fusing Tech with Creative Essence | 🚀 Navigating Algorithms, Stroke by Stroke | 🌟 Sculpting Exquisite Digital Solutions/i
    )

    // expect the profile data
    expect(dockWrapper).toBeInTheDocument()
    expect(profileImg).toBeInTheDocument()
    expect(profileName).toBeInTheDocument()
    expect(profileLabel).toBeInTheDocument()
    expect(profileBio).toBeInTheDocument()
})
