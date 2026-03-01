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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {links.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all flex flex-col items-center justify-center gap-6"
              >
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-[#d5a334] mb-2">
                    @{item.handle}
                  </h2>
                  {item.description && (
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  )}
                </div>
                <Link
                  href={`/${item.handle}`}
                  target="_blank"
                  className="w-full"
                >
                  <button className="w-full bg-[#d5a334] text-white py-3 px-6 rounded-full font-bold hover:bg-[#c6941f] transition-all">
                    View My Page
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Floating Home Button */}
      <a
        href="/"
        className="fixed bottom-8 left-8 bg-white text-[#d5a334] p-4 rounded-full shadow-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-200 z-50"
        title="Go to Home"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </a>
    </div>
  );
}
