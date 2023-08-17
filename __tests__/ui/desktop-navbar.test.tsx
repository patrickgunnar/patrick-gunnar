import Navbar from "@/components/navbar/navbar"
import { render, screen } from "@testing-library/react"


// Mock the useRouter implementation from 'next/navigation'
jest.mock('next/navigation', () => ({
    useRouter: () => ({
        route: '/',
        pathname: '/',
        query: {},
        asPath: '/',
    }),

    usePathname: () => '/'
}))

test('desktop navbar content', async () => {
    render(
        <Navbar />
    )

    // Look for if the navbar has home button
    const navbarHome = screen.getByRole('button', {
        name: /Home/i
    })

    // Look for if the navbar has myself button
    const navbarMyself = screen.getByRole('button', {
        name: /Myself/i
    })

    // Look for if the navbar has skills button
    const navbarSkills = screen.getByRole('button', {
        name: /Skills/i
    })

    // Look for if the navbar has projects button
    const navbarProjects = screen.getByRole('button', {
        name: /Projects/i
    })

    // Look for if the navbar has resume button
    const navbarResume = screen.getByRole('button', {
        name: /Resumé/i
    })

    // Look for if the navbar has contact button
    const navbarContact = screen.getByRole('button', {
        name: /Contact/i
    })

    // Look for if the navbar has articles button
    const navbarArticles = screen.getByRole('button', {
        name: /Articles/i
    })

    // Expect the elements to be in the doc
    expect(navbarHome).toBeInTheDocument()
    expect(navbarMyself).toBeInTheDocument()
    expect(navbarSkills).toBeInTheDocument()
    expect(navbarProjects).toBeInTheDocument()
    expect(navbarResume).toBeInTheDocument()
    expect(navbarContact).toBeInTheDocument()
    expect(navbarArticles).toBeInTheDocument()
})
