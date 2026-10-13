import { Headphones, ShieldCheck, Star, Truck } from 'lucide-react';
import React from 'react'

export default function Benefits() {
  return (
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {[
          {
            icon: Truck,
            title: "Tezkor yetkazib berish",
            text: "Buyurtmangizni eshigingizgacha",
          },
          {
            icon: ShieldCheck,
            title: "Xavfsiz xarid",
            text: "Ishonchli xarid tajribasi",
          },
          {
            icon: Headphones,
            title: "Doimiy yordam",
            text: "Sizga yordam berishga tayyormiz",
          },
          {
            icon: Star,
            title: "Sifatli mahsulotlar",
            text: "Tanlangan mahsulotlar",
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Icon size={23} />
              </div>
              <div>
                <h3 className="text-sm font-bold">{item.title}</h3>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </section>
  )
}
