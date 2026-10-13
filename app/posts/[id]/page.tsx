
import type { Metadata } from "next";
import type { PostType } from "../page";

type Props = {
  params: Promise<{ id: string }>;
};

async function getProduct(id: string): Promise<PostType> {
  const url = `https://oline-shop-backend.onrender.com/api/products/${id}`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`API xatosi: ${res.status}`);
  }

  const result: { data: PostType } = await res.json();

  return result.data;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);

  const imageUrl = product.images?.[0]?.url;

  return {
    title: product.name,
    description: product.description,

    openGraph: {
      type: "website",
      siteName: "Bizda",
      title: product.name,
      description: product.description,
      url: `/products/${id}`,
      images: imageUrl
        ? [
            {
              url: imageUrl,
              alt: product.name,
              width: 1200,
              height: 630,
            },
          ]
        : [],
    },
  };
}

export default async function PostDetail({ params }: Props) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <div>
      <h1>PostDetail - {product.id}</h1>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}
