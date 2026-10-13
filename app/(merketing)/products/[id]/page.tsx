import { getProduct } from "@/services/products";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const { data } = await getProduct(id)
  console.log(data)
  return {
    title: data?.name,
    description: data?.description
    
  }
}


export default async function ProductsDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { data } = await getProduct(id)
  return (
    <div>
      Product Name-{data?.name}
      <hr />
      <img src={data?.images?.[0].url} alt="" />
    </div>
  )
}
