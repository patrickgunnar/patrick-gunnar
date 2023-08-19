import Skills from "@/app/skills/page"
import { render, screen } from "@testing-library/react"


test('skills components', () => {
    render(<Skills />)

    // check if the screen has the skills components
    const contentWrapper = screen.getByTestId('contentWrapper')
    const titleLabel = screen.getByText(/Technical Wizardry/i)
    const next = screen.getByText(/Next.js:/i)
    const react = screen.getByText(/React.js:/i)
    const typescript = screen.getByText(/TypeScript:/i)
    const tailwind = screen.getByText(/Tailwind CSS:/i)
    const styled = screen.getByText(/styled-components:/i)
    const javascript = screen.getByText(/JavaScript:/i)
    const css = screen.getByText(/cascading stylesheets/i)
    const html = screen.getByText(/HTML5:/i)
    const mongo = screen.getByText(/MongoDB:/i)
    const supabase = screen.getByText(/Supabase:/i)
    const prisma = screen.getByText(/Prisma:/i)
    const pusher = screen.getByText(/Pusher:/i)
    const jest = screen.getByText(/Jest:/i)
    const testing = screen.getByText(/Testing Library:/i)
    const cypress = screen.getByText(/Cypress:/i)

    // expect the components
    expect(contentWrapper).toBeInTheDocument()
    expect(titleLabel).toBeInTheDocument()
    expect(next).toBeInTheDocument()
    expect(react).toBeInTheDocument()
    expect(typescript).toBeInTheDocument()
    expect(tailwind).toBeInTheDocument()
    expect(styled).toBeInTheDocument()
    expect(javascript).toBeInTheDocument()
    expect(css).toBeInTheDocument()
    expect(html).toBeInTheDocument()
    expect(mongo).toBeInTheDocument()
    expect(supabase).toBeInTheDocument()
    expect(prisma).toBeInTheDocument()
    expect(pusher).toBeInTheDocument()
    expect(jest).toBeInTheDocument()
    expect(testing).toBeInTheDocument()
    expect(cypress).toBeInTheDocument()
})
