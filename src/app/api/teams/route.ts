import { NextResponse, NextRequest } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Team from "@/model/Team";

export async function POST (req:NextRequest){
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
    
        // Assuming you have a Team model to save the data;
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