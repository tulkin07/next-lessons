import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function BottomBanner() {
  return (
     <section className="mx-auto max-w-7xl px-4 pb-12 pt-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-blue-600 p-7 sm:p-10 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold text-blue-100">
              ONLAYN XARID QILISHNI BOSHLANG
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
              Kerakli mahsulotingiz shu yerda!
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">
              Mahsulotlar katalogini ko'ring va o'zingizga mosini tanlang.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-blue-600 transition hover:bg-blue-50"
          >
            Katalogga o'tish
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
  )
}
