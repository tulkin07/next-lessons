"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
const menus = [
  { name: "Home", href: "/", icon: "🏠" },
  { name: "Posts", href: "/posts", icon: "📝" },
  { name: "Users", href: "/users", icon: "👥" },
  { name: "Students", href: "/students", icon: "🎓" },
  { name: "Teachers", href: "/teachers", icon: "👨‍🏫" },
];


export default function Navbar() {
  const pathName = usePathname()
  console.log(pathName)
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-blue-600"
        >
          Edu<span className="text-gray-900">Panel</span>
        </Link>

        {/* Menus */}
        <div className="flex items-center gap-2">
          {menus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
            >
              <span>{menu.icon}</span>
              <span>{menu.name}</span>
            </Link>
          ))}
        </div>

        {/* Profile */}
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
          Admin
        </button>
      </div>
    </nav>
  );
}
