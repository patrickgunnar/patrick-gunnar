import Table from "@/components/table/table"
import { render, screen } from "@testing-library/react"


test('table container', async () => {
    render(
        <Table>
            <div></div>
        </Table>
    )

    // Look for if screen has the table
    const tableContainer = screen.getByTestId('tableContainer')

    // Expect the table container to be in the doc
    expect(tableContainer).toBeInTheDocument()
})
