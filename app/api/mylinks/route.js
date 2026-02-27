import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("linktree");
    const collection = db.collection("links");

    // Find all links created by this user
    const userLinks = await collection.find({ userEmail: email }).toArray();

    // Convert to plain objects
    const plainLinks = userLinks.map((link) => ({
      handle: link.handle,
      description: link.description || null,
      pic: link.pic || null,
      links: link.links || [],
    }));

    return NextResponse.json({ success: true, links: plainLinks });
  } catch (error) {
    console.error("Error fetching user links:", error);
    return NextResponse.json(
      { success: false, message: "Error fetching links" },
      { status: 500 }
    );
  }
}
