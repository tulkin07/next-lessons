import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
const categories = [
  {
    name: "Elektronika",
    description: "Smartfon va gadjetlar",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&auto=format&fit=crop&q=80",
    href: "/products/electronics",
  },
  {
    name: "Kiyimlar",
    description: "Zamonaviy uslub",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&auto=format&fit=crop&q=80",
    href: "/products/clothes",
  },
  {
    name: "Aksessuarlar",
    description: "Har kun uchun",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80",
    href: "/products/accessories",
  },
  {
    name: "Poyabzal",
    description: "Qulaylik va sifat",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=80",
    href: "/products/shoes",
  },
];

export default function Categories() {
  return (
  <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              KATEGORIYALAR
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Nima izlayapsiz?
            </h2>
          </div>

          <Link
            href="/products"
            className="flex shrink-0 items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            Barchasi <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative h-48 overflow-hidden rounded-2xl bg-gray-200 sm:h-60"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <h3 className="text-lg font-bold text-white">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-gray-200">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
  )
}
