import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function Page({ params }) {
  const { handle } = await params;

  const client = await clientPromise;
  const db = client.db("linktree");
  const collection = db.collection("links");

  const data = await collection.findOne({ handle: handle });

  console.log("Looking for handle:", handle);
  console.log("Found data:", data);

  if (!data) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d5a334] via-[#e8b84d] to-[#d5a334] flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-2xl">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          {/* Profile Section */}
          <div className="flex flex-col items-center gap-4">
            {data.pic && (
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src={data.pic}
                  alt={data.handle}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
              @{data.handle}
            </h1>
          </div>

          {/* Links Section */}
          <div className="w-full flex flex-col gap-4 md:gap-5 px-4 md:px-0">
            {data.links &&
              data.links.slice(0, 5).map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white hover:bg-white/90 text-[#d5a334] font-bold text-base md:text-lg py-4 md:py-5 px-6 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-200 text-center"
                >
                  {item.linktext}
                </a>
              ))}
          </div>

          {/* Footer */}
          <div className="mt-8 text-white/80 text-sm text-center">
            <p>Powered by Linktree clone by Sarrah</p>
          </div>
        </div>
      </div>
    </div>
  );
}
