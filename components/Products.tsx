import { ArrowRight, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import Card from './Card';
import { getAllProducts } from '@/services/products';
import { Product } from '@/types/products';


export default async function Products() {
 
    const {data} = await getAllProducts()
  

    return (
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
            <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                    <p className="text-sm font-semibold text-blue-600">
                        SIZ UCHUN TANLANDI
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                        Mashhur mahsulotlar
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                        Xaridorlar ko'p tanlayotgan mahsulotlar
                    </p>
                </div>

                <Link
                    href="/products"
                    className="flex shrink-0 items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                    Barchasi <ArrowRight size={17} />
                </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                {data?.map((product:Product) => <Card key={product?.id} product={product} />)}
            </div>
        </section>
    )
}
