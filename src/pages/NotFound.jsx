import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#953177] mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-2">Page Not Found</p>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-[#953177] text-white font-semibold rounded-lg hover:bg-[#6f1f57] transition"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
