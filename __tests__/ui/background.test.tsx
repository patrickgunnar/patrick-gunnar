import { render, screen } from "@testing-library/react";
import CanvasTemplate from "@/components/background/canvas-template";

test('background matrix', async () => {
    render(<CanvasTemplate />)

    // look for if screen has the canvas background
    const canvasElement = screen.getByTestId('matrixBackground')

    // expect the canvas to be  in the doc
    expect(canvasElement).toBeInTheDocument()
})
