import { NextResponse } from "next/server"
import nodemailer from "nodemailer"



// check if email is valid
const isValidEmail = (email: string): boolean => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    return regex.test(email)
}

// remove special characters
const removeSpecialChar = (data: string) => {
    const regex = /[^a-zA-Z0-9]/g

    return data.replace(regex, '').toLowerCase()
}

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { name, email, message } = body

        if (
            !name || typeof name !== "string" ||
            !email || typeof email !== "string" ||
            !message || typeof message !== "string"
        ) {
            throw new Error("Invalid name, email or message format.")
        }

        const validName = removeSpecialChar(name)
        const validMessage = removeSpecialChar(message)
        const isEmail = isValidEmail(email)

        if (!validName && !validMessage && !isEmail) {
            throw new Error("Invalid name, email or message.")
        }

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.SENDER_EMAIL || '',
                pass: process.env.SENDER_PASSWORD || '',
            }
        })

        const mailOptions = {
            from: email,
            to: process.env.RECEIVER_EMAIL || '',
            subject: `New Message From: ${validName}`,
            text: validMessage
        }

        await transporter.sendMail(mailOptions)

        return NextResponse.json({ message: 'Email sent successfully!' })
    } catch (error: any) {
        console.error("Error in POST request:", error)

        return new NextResponse("Internal error!", {
            status: 500,
        })
    }
}