import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";
import ProfilePage from "./ProfilePage";

export default async function Page({ params }) {
  const { handle } = await params;

  // Decode URL-encoded handle (e.g., "sarrah%20profile" -> "sarrah profile")
  const decodedHandle = decodeURIComponent(handle);

  const client = await clientPromise;
  const db = client.db("linktree");
  const collection = db.collection("links");

  const data = await collection.findOne({ handle: decodedHandle });

  console.log("Looking for handle:", decodedHandle);
  console.log("Found data:", data);

  if (!data) {
    return notFound();
  }

  // Convert MongoDB document to plain object (removes special MongoDB types like ObjectId)
  // This is required because we're passing data from Server Component to Client Component
  const plainData = {
    handle: data.handle,
    description: data.description || null,
    pic: data.pic || null,
    links: data.links || [],
  };

  return <ProfilePage data={plainData} handle={decodedHandle} />;
}
