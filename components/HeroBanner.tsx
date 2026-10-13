import { ArrowRight, ShieldCheck, Truck, Zap } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function HeroBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:pt-8">
           <div className="relative isolate overflow-hidden rounded-3xl bg-slate-950">
             <div className="absolute inset-0 -z-10">
               <img
                 src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1800&auto=format&fit=crop&q=85"
                 alt="Zamonaviy do'kon"
                 className="h-full w-full object-cover opacity-35"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
             </div>
   
             <div className="grid min-h-[400px] items-center px-6 py-12 sm:px-12 lg:grid-cols-2 lg:px-16 lg:py-16">
               <div className="max-w-xl">
                 <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-blue-200 backdrop-blur">
                   <Zap size={16} />
                   Katta mavsumiy chegirmalar
                 </span>
   
                 <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                   Xarid qilishning
                   <span className="block text-blue-400">
                     yangi uslubi
                   </span>
                 </h1>
   
                 <p className="mt-5 max-w-lg text-base leading-7 text-gray-300 sm:text-lg">
                   O'zingizga kerakli mahsulotlarni toping. Sifatli
                   mahsulotlar, qulay narxlar va tezkor yetkazib berish.
                 </p>
   
                 <div className="mt-8 flex flex-wrap gap-3">
                   <Link
                     href="/products"
                     className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500"
                   >
                     Xarid qilish
                     <ArrowRight size={19} />
                   </Link>
   
                   <Link
                     href="/deals"
                     className="rounded-xl border border-white/25 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                   >
                     Chegirmalar
                   </Link>
                 </div>
   
                 <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-300">
                   <span className="flex items-center gap-2">
                     <ShieldCheck size={18} className="text-green-400" />
                     Ishonchli xarid
                   </span>
                   <span className="flex items-center gap-2">
                     <Truck size={18} className="text-green-400" />
                     Tez yetkazish
                   </span>
                 </div>
               </div>
   
               <div className="hidden justify-end lg:flex">
                 <div className="rounded-2xl border border-white/20 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-md">
                   <p className="text-sm text-gray-300">
                     Maxsus taklif
                   </p>
                   <p className="mt-2 text-5xl font-black text-white">
                     -30%
                   </p>
                   <p className="mt-2 text-sm text-gray-300">
                     Tanlangan mahsulotlarga
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </section>
  )
}
