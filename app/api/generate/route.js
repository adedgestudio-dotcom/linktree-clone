import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    const client = await clientPromise;
    const body = await request.json();
    const db = client.db("linktree")
    const collection = db.collection("links")

    const result = await collection.insertOne(body)

  return Response.json({ success: true, error: false,  message: "Added", result: result, });
}
