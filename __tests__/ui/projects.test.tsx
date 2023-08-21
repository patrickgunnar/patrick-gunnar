import Projects from "@/app/projects/page"
import { render, screen } from "@testing-library/react"


test('projects components', () => {
    render(<Projects />)

    // check if screen has the components
    const project_01 = screen.getByText(/OrionRent/i)
    const project_02 = screen.getByText(/VirgoChat/i)
    const project_03 = screen.getByText(/Atomico/i)
    const project_04 = screen.getByText(/SunTime/i)
    const project_05 = screen.getByText(/Spotify Clone/i)
    const project_06 = screen.getByText(/Airbnb Clone/i)

    const githubButton = screen.getAllByRole('button', { name: /Github/i })
    const liveButton = screen.getAllByRole('button', { name: /Live/i })

    // expect to be in the deoc
    expect(project_01).toBeInTheDocument()
    expect(project_02).toBeInTheDocument()
    expect(project_03).toBeInTheDocument()
    expect(project_04).toBeInTheDocument()
    expect(project_05).toBeInTheDocument()
    expect(project_06).toBeInTheDocument()

    expect(githubButton).toHaveLength(6)
    expect(liveButton).toHaveLength(6)
})
