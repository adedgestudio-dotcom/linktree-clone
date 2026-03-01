import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const handle = searchParams.get("handle");

    if (!handle) {
      return NextResponse.json(
        { success: false, message: "Handle required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("linktree");
    const collection = db.collection("links");

    // Delete the linktree
    const result = await collection.deleteOne({ handle: handle });

    if (result.deletedCount === 1) {
      return NextResponse.json({
        success: true,
        message: "Linktree deleted successfully",
      });
    } else {
      return NextResponse.json(
        { success: false, message: "Linktree not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error deleting linktree:", error);
    return NextResponse.json(
      { success: false, message: "Error deleting linktree" },
      { status: 500 }
    );
  }
}
