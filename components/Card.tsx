
import { Product } from "@/types/products";
import { ShoppingCart, Star } from "lucide-react";
import Link from "next/link";

function formatPrice(price: number) {
  return `${price.toLocaleString("uz-UZ")} so'm`;
}

export default function Card({ product }: { product: Product }) {
  const image =
    product.images?.find((img) => img.isMain)?.url ||
    product.images?.[0]?.url ||
    "/placeholder.png";

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/60">
      {/* Product image */}
      <Link
        href={`/products/${product.id}`}
        className="relative block overflow-hidden bg-gray-100"
      >
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        {product.discountPercent > 0 && (
          <span className="absolute left-3 top-3 rounded-lg bg-red-500 px-2.5 py-1 text-xs font-bold text-white">
            -{product.discountPercent}%
          </span>
        )}

        {product.isNew && (
          <span className="absolute right-3 top-3 rounded-lg bg-green-600 px-2.5 py-1 text-xs font-bold text-white">
            Yangi
          </span>
        )}
      </Link>

      {/* Product information */}
      <div className="p-3 sm:p-4">
        <p className="text-xs font-medium text-gray-400">
          {product.category?.name}
        </p>

        <Link href={`/products/${product.slug}`}>
          <h3 className="mt-2 line-clamp-2 min-h-10 text-sm font-semibold leading-5 text-gray-800 transition hover:text-blue-600 sm:text-base">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1.5">
          <Star
            size={15}
            className="fill-amber-400 text-amber-400"
          />

          <span className="text-xs font-semibold">
            {product.averageRating.toFixed(1)}
          </span>

          <span className="text-xs text-gray-400">
            ({product.reviewsCount})
          </span>
        </div>

        {/* Price */}
        <div className="mt-4">
          <p className="text-base font-extrabold text-gray-900 sm:text-lg">
            {formatPrice(product.price)}
          </p>

          {product.oldPrice > product.price && (
            <p className="mt-1 text-xs text-gray-400 line-through">
              {formatPrice(product.oldPrice)}
            </p>
          )}
        </div>

        {/* Stock */}
        <p
          className={`mt-2 text-xs font-medium ${
            product.availableStock > 0
              ? "text-green-600"
              : "text-red-500"
          }`}
        >
          {product.availableStock > 0
            ? `Mavjud: ${product.availableStock} ta`
            : "Sotuvda mavjud emas"}
        </p>

        {/* Add to cart */}
        <button
          type="button"
          disabled={product.availableStock <= 0}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-3 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          <ShoppingCart size={17} />
          Savatchaga
        </button>
      </div>
    </article>
  );
}
