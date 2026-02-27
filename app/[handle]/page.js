import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";
import ProfilePage from "./ProfilePage";

export default async function Page({ params }) {
  try {
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
  } catch (error) {
    console.error("Error loading linktree page:", error);
    return (
      <div className="min-h-screen bg-[#d5a334] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Error Loading Page
          </h1>
          <p className="text-gray-700 mb-4">
            There was an error loading this linktree page.
          </p>
          <p className="text-sm text-gray-500">{error.message}</p>
        </div>
      </div>
    );
  }
}
