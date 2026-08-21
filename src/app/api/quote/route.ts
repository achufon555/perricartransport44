import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { quoteRequests } from "@/db/schema";

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
