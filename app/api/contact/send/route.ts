import sendMail from "@/app/[locale]/contact/sendMail"; // Import the sendMail utility
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const params = await request.json(); // Get JSON params from the request

    return await sendMail(params)
        ? NextResponse.json({ok: true}, { status: 200 })
        : NextResponse.json({ok: false}, { status: 500 });
}