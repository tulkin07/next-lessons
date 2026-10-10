import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold text-blue-600">404</p>
      <h1 className="mt-2 text-3xl font-black">Page not found</h1>
      <p className="mt-2 text-sm text-slate-500">
        This route is not handled by the app.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
      >
        Back home
      </Link>
    </main>
  );
}
