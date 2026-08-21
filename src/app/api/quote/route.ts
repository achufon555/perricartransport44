import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { quoteRequests } from "@/db/schema";
import { resend } from "@/lib/resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, fromCity, toCity, vehicleType, serviceType, message } = body;

    if (!name || !phone || !fromCity || !toCity || !vehicleType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const [quote] = await db
      .insert(quoteRequests)
      .values({
        name: name.trim(),
        email: email?.trim() || null,
        phone: phone.trim(),
        fromCity: fromCity.trim(),
        toCity: toCity.trim(),
        vehicleType: vehicleType.trim(),
        serviceType: serviceType || "open",
        message: message?.trim() || null,
      })
      .returning();

    if (process.env.RESEND_API_KEY && process.env.RESEND_TO_EMAIL) {
      try {
        await resend.emails.send({
          from: `SwiftMove Auto Transport <${process.env.RESEND_FROM_EMAIL}>`,
          to: process.env.RESEND_TO_EMAIL,
          replyTo: quote.email || undefined,
          subject: `New quote request from ${quote.name}`,
          html: `
            <h2>New Quote Request</h2>
            <p><strong>Name:</strong> ${quote.name}</p>
            <p><strong>Phone:</strong> ${quote.phone}</p>
            <p><strong>Email:</strong> ${quote.email || "N/A"}</p>
            <p><strong>From:</strong> ${quote.fromCity}</p>
            <p><strong>To:</strong> ${quote.toCity}</p>
            <p><strong>Vehicle Type:</strong> ${quote.vehicleType}</p>
            <p><strong>Service Type:</strong> ${quote.serviceType}</p>
            <p><strong>Message:</strong> ${quote.message || "N/A"}</p>
          `,
        });
      } catch (emailError) {
        console.error("Quote notification email failed:", emailError);
      }
    }

    return NextResponse.json({ success: true, id: quote.id }, { status: 201 });
  } catch (error) {
    console.error("Quote submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit quote request" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const quotes = await db
      .select()
      .from(quoteRequests)
      .orderBy(quoteRequests.createdAt);

    return NextResponse.json({ quotes });
  } catch (error) {
    console.error("Quote fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch quotes" }, { status: 500 });
  }
}
