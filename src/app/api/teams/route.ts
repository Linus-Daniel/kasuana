import { NextResponse, NextRequest } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Team from "@/model/Team";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const { name, role, description, image, isCoFounder } = body;

    if (!name || !role || !description || !image) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const newTeamMember = {
      name,
      role,
      description,
      image,
      isCoFounder: isCoFounder || false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const teamMember = await Team.create(newTeamMember);

    return NextResponse.json(teamMember, { status: 201 });
  } catch (error) {
    console.error("Error adding team member:", error);
    return NextResponse.json(
      { error: "Failed to add team member" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const teamMembers = await Team.find().sort({ createdAt: -1 });
    return NextResponse.json(teamMembers, { status: 200 });
  } catch (error) {
    console.error("Error fetching team members:", error);
    return NextResponse.json(
      { error: "Failed to fetch team members" },
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

    const deletedMember = await Team.findByIdAndDelete(id);

    if (!deletedMember) {
      return NextResponse.json(
        { error: "Team member not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Team member deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting team member:", error);
    return NextResponse.json(
      { error: "Failed to delete team member" },
      { status: 500 }
    );
  }
}


export async function PUT(req: NextRequest) {
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

    const body = await req.json();
    const updatedMember = await Team.findByIdAndUpdate(id, body, { new: true });

    if (!updatedMember) {
      return NextResponse.json(
        { error: "Team member not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedMember, { status: 200 });
  } catch (error) {
    console.error("Error updating team member:", error);
    return NextResponse.json(
      { error: "Failed to update team member" },
      { status: 500 }
    );
  }
}
