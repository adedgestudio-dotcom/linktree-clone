"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const deleteLinktree = async (handle) => {
    if (!confirm(`Are you sure you want to delete @${handle}?`)) {
      return;
    }

    try {
      const response = await fetch(`/api/delete?handle=${handle}`, {
        method: "DELETE",
      });
      const data = await response.json();

      if (data.success) {
        toast.success("Linktree deleted successfully!");
        // Remove from local state
        setLinks(links.filter((item) => item.handle !== handle));
      } else {
        toast.error("Failed to delete linktree");
      }
    } catch (error) {
      console.error("Error deleting linktree:", error);
      toast.error("Error deleting linktree");
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#d5a334] via-[#e8b84d] to-[#d5a334] flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d5a334] via-[#e8b84d] to-[#d5a334] pt-32 px-4 md:px-8 pb-20">
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
          <div className="bg-white rounded-2xl p-12 text-center shadow-2xl">
            <p className="text-gray-700 text-xl mb-6">
              You haven't created any links yet!
            </p>
            <Link href="/generate">
              <button className="bg-[#d5a334] text-white px-8 py-4 rounded-full font-bold hover:bg-[#c6941f] transition-all">
                Create Your First Link
              </button>
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Your Linktrees
            </h2>
            <div className="space-y-4">
              {links.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-[#d5a334] w-8">
                      {index + 1}.
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        @{item.handle}
                      </h3>
                      {item.description && (
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Link href={`/${item.handle}`} target="_blank">
                      <button className="bg-[#d5a334] text-white px-4 py-2 rounded-full font-bold hover:bg-[#c6941f] transition-all flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        View
                      </button>
                    </Link>
                    <button
                      onClick={() => deleteLinktree(item.handle)}
                      className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-600 rounded-lg transition-all"
                      title="Delete this linktree"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
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

      <ToastContainer />
    </div>
  );
}
