
export const getAllProducts = async () => {
    const res = await fetch("https://oline-shop-backend.onrender.com/api/products", {
        next: { revalidate: 60 }
    })

    return res.json()
}

export const getProduct = async (id: string) => {
    const res = await fetch(`https://oline-shop-backend.onrender.com/api/products/${id}`, {
    })

    return res.json()
}