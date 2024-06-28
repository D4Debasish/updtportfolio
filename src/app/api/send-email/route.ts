import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const { firstname, lastname, email, phone, message }: FormData =
      await request.json();

    if (!firstname || !lastname || !email || !phone || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      logger: true,
      debug: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });

    const mailOptions = {
      from: email,
      to: "ddebu168@gmail.com",
      subject: `Contact form submission from ${firstname} ${lastname}`,
      text: `Name: ${firstname} ${lastname}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    };

    const sendMailPromise = () =>
      new Promise<void>((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info: any) => {
          if (error) {
            reject(error);
          } else {
            resolve(info);
          }
        });
      });

    await sendMailPromise();
    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send message.", error: error.toString() },
      { status: 500 }
    );
  }
}
