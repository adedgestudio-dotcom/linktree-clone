"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function MyLinks() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Redirect to home if not authenticated
    if (status === "unauthenticated") {
      router.push("/");
    }

    // Fetch user's links from database
    if (session?.user?.email) {
      fetchUserLinks();
    }
  }, [session, status, router]);

  const fetchUserLinks = async () => {
    try {
      const response = await fetch(`/api/mylinks?email=${session.user.email}`);
      const data = await response.json();
      if (data.success) {
        setLinks(data.links);
      }
    } catch (error) {
      console.error("Error fetching links:", error);
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-[#d5a334] flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#d5a334] pt-32 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            My Links
          </h1>
          <Link href="/generate">
            <button className="bg-white text-[#d5a334] px-6 py-3 rounded-full font-bold hover:bg-white/90 transition-all">
              + Create New
            </button>
          </Link>
        </div>

        {links.length === 0 ? (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 text-center">
            <p className="text-white text-xl mb-6">
              You haven't created any links yet!
            </p>
            <Link href="/generate">
              <button className="bg-white text-[#d5a334] px-8 py-4 rounded-full font-bold hover:bg-white/90 transition-all">
                Create Your First Link
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid gap-6">
            {links.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-[#d5a334]">
                      @{item.handle}
                    </h2>
                    {item.description && (
                      <p className="text-gray-600 mt-2">{item.description}</p>
                    )}
                  </div>
                  <Link href={`/${item.handle}`} target="_blank">
                    <button className="bg-[#d5a334] text-white px-4 py-2 rounded-full font-bold hover:bg-[#c6941f] transition-all">
                      View Page
                    </button>
                  </Link>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500 mb-2">
                    Links: {item.links?.length || 0}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.links?.slice(0, 3).map((link, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {link.linktext}
                      </span>
                    ))}
                    {item.links?.length > 3 && (
                      <span className="text-gray-500 text-sm">
                        +{item.links.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
