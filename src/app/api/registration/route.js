import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  // Inter new registration data
  try {
    let prisma = new PrismaClient();
    let reqBody = await req.json();

    let result = await prisma.registration.create({ data: reqBody });
    return NextResponse.json({
      status: "success",
      data: result,
    });
  } catch (err) {
    return NextResponse.json({ status: "fail!", err: err.toString() });
  }
}
