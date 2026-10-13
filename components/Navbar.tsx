
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Heart,
  ShoppingCart,
  UserRound,
  Menu,
  Store,
} from "lucide-react";

const menus = [
  { name: "Bosh sahifa", href: "/" },
  { name: "Barcha mahsulotlar", href: "/products" },
  { name: "Elektronika", href: "/products/electronics" },
  { name: "Kiyimlar", href: "/products/clothes" },
  { name: "Kitoblar", href: "/products/books" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      {/* Top section */}
      <div className="border-b border-gray-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
              <Store size={23} />
            </div>

            <span className="text-xl font-extrabold tracking-tight text-gray-900">
              Online<span className="text-blue-600">Shop</span>
            </span>
          </Link>

          {/* Search */}
          <form
            action="/products"
            method="GET"
            className="mx-6 hidden max-w-xl flex-1 md:flex"
          >
            <div className="flex w-full items-center overflow-hidden rounded-xl border border-gray-200 bg-gray-50 transition focus-within:border-blue-500 focus-within:bg-white">
              <Search className="ml-4 shrink-0 text-gray-400" size={20} />

              <input
                type="search"
                name="search"
                placeholder="Mahsulotlarni qidirish..."
                className="w-full bg-transparent px-3 py-3 text-sm outline-none"
              />

              <button
                type="submit"
                className="bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Qidirish
              </button>
            </div>
          </form>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-3">
            <Link
              href="/favorites"
              aria-label="Sevimlilar"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 transition hover:bg-gray-100 hover:text-blue-600"
            >
              <Heart size={22} />
            </Link>

            <Link
              href="/cart"
              aria-label="Savatcha"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 transition hover:bg-gray-100 hover:text-blue-600"
            >
              <ShoppingCart size={22} />
            </Link>

            <Link
              href="/profile"
              className="hidden items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 sm:flex"
            >
              <UserRound size={19} />
              <span>Kirish</span>
            </Link>

            <button
              type="button"
              aria-label="Menyuni ochish"
              className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-700 hover:bg-gray-100 md:hidden"
              onClick={() => {
                window.dispatchEvent(new Event("toggle-mobile-menu"));
              }}
            >
              <Menu size={23} />
            </button>
          </div>
        </div>
      </div>

      {/* Categories navigation */}
      {/* <nav className="mx-auto hidden max-w-7xl items-center gap-1 overflow-x-auto px-4 sm:px-6 md:flex">
        {menus.map((menu) => {
          const active = isActive(menu.href);

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`relative shrink-0 px-4 py-3.5 text-sm font-medium transition ${
                active
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {menu.name}

              {active && (
                <span className="absolute inset-x-4 bottom-0 h-0.5 rounded-full bg-blue-600" />
              )}
            </Link>
          );
        })}

        <div className="ml-auto py-2">
          <Link
            href="/deals"
            className="rounded-lg bg-orange-50 px-3 py-2 text-sm font-semibold text-orange-600 transition hover:bg-orange-100"
          >
            Chegirmalar
          </Link>
        </div>
      </nav> */}
    </header>
  );
}
