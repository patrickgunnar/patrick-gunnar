import Container from "@/components/container/container"
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

test('container content', async () => {
    render(
        <Container>
            <div></div>
        </Container>
    )

    // Look for if screen has the container element
    const containerContent = screen.getByTestId('containerContent')

    // Expect the container content to be in the doc
    expect(containerContent).toBeInTheDocument()
})
