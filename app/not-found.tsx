import Link from "next/link";

// Disable static generation for error pages that use ClerkProvider
export const dynamic = "force-dynamic";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-900 to-black">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">Page not found</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-[#FE5933] text-white rounded-lg hover:bg-[#e84620] transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
