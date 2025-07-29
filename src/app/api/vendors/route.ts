import { NextResponse, NextRequest } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Vendor from "@/model/Vendor";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await dbConnect();
    const { name, email, story, image, verified, phone, address } = body;
    if (!name || !email || !story || !image || !phone || !address) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }
    const newVendor = {
      name,
      email,
      story,
      image,
      verified: verified || false,
      phone,
      address,
    };
    // Assuming you have a Vendor model to save the data
    const vendor = await Vendor.create(newVendor);
    return NextResponse.json(vendor, { status: 201 });
  } catch (error) {
    console.error("Error adding vendor:", error);
    return NextResponse.json(
      { error: "Failed to add vendor" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const vendors = await Vendor.find().sort({ createdAt: -1 });
    return NextResponse.json(vendors, { status: 200 });
  } catch (error) {
    console.error("Error fetching vendors:", error);
    return NextResponse.json(
      { error: "Failed to fetch vendors" },
      { status: 500 }
    );
  }
}
export async function DELETE(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Team member ID is required" },
        { status: 400 }
      );
    }
    const vendor = await Vendor.findByIdAndDelete(id);
    if (!vendor) {
      return NextResponse.json({ error: "Vendor not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Vendor deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting vendor:", error);
    return NextResponse.json(
      { error: "Failed to delete vendor" },
      { status: 500 }
    );
  }
}
