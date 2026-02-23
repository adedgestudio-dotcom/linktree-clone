import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  const client = await clientPromise;
  const body = await request.json();
  const db = client.db("linktree");
  const collection = db.collection("links");

  const doc = await collection.findOne({ handle: body.handle });
  if (doc) {
    return Response.json({
      success: false,
      error: true,
      message: "your linktree already exists!",
      result: null,
    });
  }

  const result = await collection.insertOne(body);

  return Response.json({
    success: true,
    error: false,
    message: "your linktree has been generated",
    result: result,
  });
}
