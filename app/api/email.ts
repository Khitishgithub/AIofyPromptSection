// app/api/email.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface EmailRequestBody {
  website: string;
  email: string;
  useCases: Array<{
    id: number;
    title: string;
    description: string;
  }>;
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as EmailRequestBody;
    const { website, email, useCases } = body;

    if (!website || !email || !useCases) {
      return NextResponse.json(
        { error: "Website, email, and useCases are required" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Format use cases for email
    const useCasesHtml = useCases
      .map(
        (useCase) => `
        <div style="margin-bottom: 20px; padding: 15px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h3 style="margin-top: 0; color: #333;">${useCase.title}</h3>
          <p style="color: #555;">${useCase.description}</p>
        </div>
      `
      )
      .join("");

    // Create email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New AI Use Case Analysis</h2>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>User Email:</strong> ${email}</p>
        
        <h3 style="margin-top: 30px; color: #333;">Generated AI Use Cases:</h3>
        ${useCasesHtml}
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `AI Use Case Analysis for ${website}`,
      html: emailContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}