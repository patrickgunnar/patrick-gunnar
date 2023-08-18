'use client'

import { useEffect, useRef } from "react";
import "./styles.module.css";


const CanvasTemplate = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const intervalRef = useRef<NodeJS.Timer>()

    useEffect(() => {
        // get the canvas element
        const canvasElement = canvasRef.current

        if(!canvasElement) return

        // set canvas context
        const context = canvasElement.getContext('2d')

        if(!context) return

        // set canvas height and width
        canvasElement.height = window.innerHeight
        canvasElement.width = window.innerWidth

        // matrix content
        const matrix = (
            'Unveil the Hidden Gem: Welcome the Maestro of Code, the Artisan of Innovation, Patrick Gunnar, to Elevate the Digital Symphony of Your Company with Unsurpassed Full-Stack Mastery'
        ).split('')
        const fontSize = 12
        // size of the matrix columns
        const columns = canvasElement.width / fontSize
        // array drops
        const drops: number[] = []

        for(let x = 0; x < columns; x++) drops[x] = 1

        // draw the characters
        const handleDraw = () => {
            // set black background
            // set transllucent background to display the trail
            context.fillStyle = '#0000000a'
            context.fillRect(0, 0, canvasElement.width, canvasElement.height)

            context.fillStyle = '#007bff'
            context.font = `${fontSize}px arial`

            // loop over the drops
            drops.forEach((_, index) => {
                // select a random charater
                const char = matrix[Math.floor(Math.random() * matrix.length)]

                // fill context text
                context.fillText(char, index * fontSize, drops[index] * fontSize)

                // reset the dropping to the top after it reached the bottom
                // gen a random number to make the reset dropping on the Y axis
                if(drops[index] * fontSize > canvasElement.height && Math.random() > 0.975) {
                    drops[index] = 0
                }

                // increment the Y coordinate
                drops[index]++
            })
        }

        // set matrix interval
        intervalRef.current = setInterval(handleDraw, 35)

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <canvas ref={canvasRef} className="canvas_content__styles" data-testid="matrixBackground"></canvas>
    );
}
 
export default CanvasTemplate;
