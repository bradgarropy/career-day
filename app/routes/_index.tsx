import { Link } from "react-router";
import type { Route } from "./+types/_index";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Career Day" },
    { name: "description", content: "Brad Garropy's career day presentations" },
  ];
}

export default function Index() {
  return (
    <main className="grid place-content-center min-h-screen p-8">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold">Career Day</h1>
        <p className="mt-3 text-xl text-gray-600">Highland Park Elementary School</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 max-w-2xl">
        <Link
          to="/2024"
          className="border-2 border-gray-200 rounded-2xl p-8 text-center transition-colors hover:bg-gray-50 hover:border-gray-300"
        >
          <div className="text-5xl font-bold">2024</div>
        </Link>
        <Link
          to="/2026"
          className="border-2 border-gray-200 rounded-2xl p-8 text-center transition-colors hover:bg-gray-50 hover:border-gray-300"
        >
          <div className="text-5xl font-bold">2026</div>
        </Link>
      </div>
    </main>
  );
}
